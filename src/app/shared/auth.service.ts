import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //login method
  login(email : string,password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(() => {
    localStorage.setItem('token','true');
    this.router.navigate(['homepage']);
  
    },err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
      
  }

  //regisration method
  registration(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=> {
      alert('Registration Successful');
      this.router.navigate(['/homepage']);
     }, err => {
      alert(err.message);
      this.router.navigate(['/registration']);
    })
  }

  //signout
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
},err => {
})
  }


}
