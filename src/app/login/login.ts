import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class login {
  name: string = '';
  password: string = '';
  remember: boolean = false;
  message: string = '';
  router = inject(Router);
  login() {
    if (this.name == 'admin' && this.password == '1234') {
    this.router.navigateByUrl('/feedback');
    } else {
      this.message = 'Incorrect input';
    }
  }
}
