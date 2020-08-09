import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-log-up-dialog',
  templateUrl: './log-up-dialog.component.html',
  styleUrls: ['./log-up-dialog.component.css']
})
export class LogUpDialogComponent implements OnInit {
 
  user = { first_name: '',middle_name:'',last_name: '',country: '',state: '',address: '',pin_code: '',city: '',email: '', cont_number:''};

  signUpForm: FormGroup;

  login_userName: string = "";
  login_password: string = "";

  page: boolean[] = [true, false, false, false, false];
  page_login: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      //page1
      first_name: new FormControl(this.user.first_name, [
        Validators.required,
        Validators.pattern('[A-Za-z]*'),
        //Validators.minLength(4),
        //forbiddenNameValidator(/bob/i)
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
        Validators.pattern('[A-Za-z]*')
      ]),      
      cont_number: new FormControl(this.user.cont_number, [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]*')
      ])  
    }); // <-- add custom validator at the FormGroup level
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

  traverse(index: number, direction: number){
    this.page[index] = false;
    this.page[index + direction] = true;
  }

}
