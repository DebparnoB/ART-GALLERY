import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';
import { User } from '../Classes/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-up-dialog',
  templateUrl: './log-up-dialog.component.html',
  styleUrls: ['./log-up-dialog.component.css']
})
export class LogUpDialogComponent implements OnInit {
 

  user: User = new User();
  //user1 = { first_name: '',middle_name:'',last_name: '',country: '',state: '',address: '',pin_code: '',city: '',email: '', cont_number:''};

  signUpForm: FormGroup;

  login_userName: string = "";
  login_password: string = "";

  page: boolean[] = [true, false, false, false, false, false];
  page_login: boolean = false;

  account_create_success: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      //page1
      first_name: new FormControl(this.user.first_name, [
        Validators.required,
        Validators.pattern('[A-Za-z]*')
      ]),
      middle_name: new FormControl(this.user.middle_name,[
        Validators.pattern('[A-Za-z]*')
      ]),
      last_name: new FormControl(this.user.last_name, [
        Validators.required,
        Validators.pattern('[A-Za-z]*')
      ]),  
      //page2
      country: new FormControl(this.user.country, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]*')
      ]),
      state: new FormControl(this.user.state, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]*')
      ]),
      address: new FormControl(this.user.address, [
        Validators.required
      ]),
      city: new FormControl(this.user.city, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]*')
      ]),
      pin_code: new FormControl(this.user.pin_code, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('[0-9]*')
      ]),      
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.pattern('[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})')
      ]),      
      cont_number: new FormControl(this.user.cont_number, [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]*')
      ]),      
      password: new FormControl(this.user.password) 
    }); // <-- add custom validator at the FormGroup level
  }

  onSubmit(){
    this.userService.addUser(this.user).subscribe(data => {this.account_create_success = data});
  }

  get first_name() { return this.signUpForm.get('first_name'); }
  get middle_name() { return this.signUpForm.get('middle_name'); }
  get last_name() { return this.signUpForm.get('last_name'); }
  get country() { return this.signUpForm.get('country'); }
  get state() { return this.signUpForm.get('state'); }
  get address() { return this.signUpForm.get('address'); }
  get city() { return this.signUpForm.get('city'); }
  get pin_code() { return this.signUpForm.get('pin_code'); }
  get email() { return this.signUpForm.get('email'); }
  get cont_number() { return this.signUpForm.get('cont_number'); }
  get password() { return this.signUpForm.get('password'); }

  traverse(index: number, direction: number){
    this.page[index] = false;
    this.page[index + direction] = true;
  }

}
