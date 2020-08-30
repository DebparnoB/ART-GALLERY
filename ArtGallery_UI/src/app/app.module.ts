import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductServiceService } from './product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { LogUpDialogComponent } from './log-up-dialog/log-up-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from './log-up-dialog/forbidden-name.directive';
import { UserService } from './user.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { ModalModule } from './_modal';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductCardComponent,
    LogUpDialogComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    ModalModule,
    NgIdleKeepaliveModule.forRoot(),    
  ],
  providers: [
    ProductServiceService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LogUpDialogComponent],
})
export class AppModule { }
