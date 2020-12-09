import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Users } from '../users/users';

@Component({
  selector: 'app-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.css']
})
export class SectionFooterComponent implements OnInit {
  emailForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm(new Users());
  }

  createForm(user: Users) {
    this.emailForm = new FormGroup({
      email: new FormControl(user.email)
    })
  }

  onSubmit() {
    console.log(this.emailForm.value);
    this.emailForm.reset(new Users());
  }
}
