import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product-card/product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogUpDialogComponent } from '../log-up-dialog/log-up-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  loginStatus: boolean;
  loginID: number;
  loginUser: string;

  products: Product[];
  constructor(private productService: ProductServiceService, 
              private dialog: MatDialog,
              private userService: UserService ) {  
   }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });         
  }

  openLogUpDialog() {
    this.dialog.open(LogUpDialogComponent);
  }

  onLogOut(){
    this.userService.logOut().subscribe(data=>{
      if(data){
        localStorage.setItem("logInStatus","false");
        localStorage.setItem("logInUser",null);
      }
    });
  }
  validate(): boolean{
    this.loginStatus = JSON.parse(localStorage.getItem("logInStatus"));
    if(this.loginStatus){
      this.loginUser = localStorage.getItem("logInUser");
    }    
    return this.loginStatus;
  }

}
