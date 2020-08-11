import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product-card/product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogUpDialogComponent } from '../log-up-dialog/log-up-dialog.component';
import { GlobalConstants } from '../Common/global-constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  sessionExist: boolean;
  sessionID: number;
  sessionUser: string;

  products: Product[];
  constructor(private productService: ProductServiceService, private dialog: MatDialog) {      
   }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    }); 
    this.sessionExist = GlobalConstants.sessionExist;
    this.sessionID = GlobalConstants.sessionUserID;
    this.sessionUser = GlobalConstants.sessionUserName;       
  }

  openLogUpDialog() {
    this.dialog.open(LogUpDialogComponent);
  }

}
