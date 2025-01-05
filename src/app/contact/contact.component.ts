import { Component } from '@angular/core';

import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


name: string = '';
  userAge: string = '';
  email: string = '';
  password: string = '';

  isFocusedName: boolean = false;
  isFocusedAge: boolean = false;
  isFocusedEmail: boolean = false;
  isFocusedPassword: boolean = false;

}

