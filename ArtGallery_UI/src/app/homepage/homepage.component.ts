import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product-card/product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogUpDialogComponent } from '../log-up-dialog/log-up-dialog.component';
import { UserService } from '../user.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ModalService } from '../_modal'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  loginStatus: boolean;
  loginID: number;
  loginUser: string;
  bodyText: string = "hello";

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';
  id: string = "session_timeout_dialog";

  products: Product[];
  constructor(private productService: ProductServiceService, 
              private dialog: MatDialog,
              private userService: UserService,
              private idle: Idle, 
              private keepalive: Keepalive,
              private modalService: ModalService) {  

      idle.setIdle(300);
      // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
      idle.setTimeout(30);
      // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

      idle.onIdleEnd.subscribe(() => { 
        this.idleState = 'No longer idle.'
        console.log(this.idleState);
        this.reset();
      });

      idle.onTimeout.subscribe(() => { 
        this.closeModal('session_timeout_dialog');
        this.idleState = 'Timed out!';
        this.timedOut = true;
        console.log(this.idleState);
        this.onLogOut();
        //this.router.navigate(['/']);
      });

      idle.onIdleStart.subscribe(() => {
        this.idleState = 'You have gone idle!'
        console.log(this.idleState);
        this.openModal('session_timeout_dialog');
      });
    
      idle.onTimeoutWarning.subscribe((countdown) => {
        this.idleState = 'You will time out in ' + countdown + ' seconds!'
        console.log(this.idleState);
      });

      // sets the ping interval to 15 seconds
      keepalive.interval(15);

      keepalive.onPing.subscribe(() => this.lastPing = new Date());

      

   }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem("logInStatus"))){
      this.idle.watch()
      this.timedOut = false;
    }else{
      this.idle.stop();
    }

    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });         
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  stay() {
    this.closeModal('session_timeout_dialog');
    this.reset();
  }

  logout() {
    this.closeModal('session_timeout_dialog');
    this.onLogOut();
    //this.appService.setUserLoggedIn(false);
    //this.router.navigate(['/']);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  openLogUpDialog() {
    this.dialog.open(LogUpDialogComponent);
  }

  onLogOut(){
    this.userService.logOut().subscribe(data=>{
      if(data){
        localStorage.setItem("logInStatus","false");
        localStorage.setItem("logInUser",null);
        this.idle.stop();
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
