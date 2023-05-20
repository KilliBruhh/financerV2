import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private userService: UserService) {}

  userData = 
  {
    name: '',
    email: '',
    password: '',
  }

  submitUserForm() {
    this.userService.postUserData(this.userData).subscribe(
      response => {
        console.log("ADDED Data: ", response);
      }, error => {
        console.log("ERROR Adding Data: ", error);
      }
    )
  }

}
