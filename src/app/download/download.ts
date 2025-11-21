import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  imports: [],
  templateUrl: './download.html',
  styleUrl: './download.css',
})
export class Download {
  download() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const number = (document.getElementById('number') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
if(!name || !email || !password){

}
window.location.href="/education";
  }
}
