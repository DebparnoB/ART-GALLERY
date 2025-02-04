import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product-card/product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogUpDialogComponent } from '../log-up-dialog/log-up-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductServiceService, private dialog: MatDialog) {      
   }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });  
    
  }

  openLogUpDialog() {
    this.dialog.open(LogUpDialogComponent);
  }

}
