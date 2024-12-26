import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  useremail: string = '';
  cnfpassword: string = '';
  userrole : string = '';
  constructor(private router: Router,private user:UserService) {}

  signup(data:any) {
    // console.log('Username :', this.username);
    // console.log('User Role :',this.userrole)
    // console.log('Email :' , this.useremail);
    // console.log('Password' ,this.password );
    // console.log('Confirm Password :', this.cnfpassword);
    // alert("You Have Successfully Signed Up!! Go To Login Page...")
    this.user.userSignUp(data).subscribe((result:any)=>{
        console.log(result);
    });
    this.router.navigate(['/login']);
  }
}

