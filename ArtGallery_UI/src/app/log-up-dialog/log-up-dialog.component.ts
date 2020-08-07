import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-log-up-dialog',
  templateUrl: './log-up-dialog.component.html',
  styleUrls: ['./log-up-dialog.component.css']
})
export class LogUpDialogComponent implements OnInit {
 
  hero = { first_name: 'Dr.',last_name: ''};

  heroForm: FormGroup;

  login_userName: string = "";
  login_password: string = "";

  page: boolean[] = [true, false, false, false];
  page_login: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      first_name: new FormControl(this.hero.first_name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      last_name: new FormControl(this.hero.last_name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/lost/i)
      ]),
    }); // <-- add custom validator at the FormGroup level
  }

  get first_name() { return this.heroForm.get('first_name'); }
  get last_name() { return this.heroForm.get('last_name'); }

  traverse(index: number, direction: number){
    this.page[index] = false;
    this.page[index + direction] = true;
  }

}
