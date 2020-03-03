import { Component, OnInit } from '@angular/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormGroup } from '@angular/forms';
import { Registration } from '../registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loaded = false;
  registrationGroup: FormGroup;

  constructor(
    private _fb: RxFormBuilder
  ) {
    this.registrationGroup = this._fb.formGroup(new Registration());
  }

  ngOnInit() {
    this.loaded = true;
  }

  submit() {
    this.registrationGroup.markAllAsTouched()
    alert('The form is valid: ' + this.registrationGroup.valid);
  }
}
