import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'; 
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

      this.afAuth.authState.subscribe(user=> {
        if(user){
          this.user$ = this.afAuth.authState;
        } else {
          this.user$ = null;
        }
      });
   }


  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    const uid = credential.user.uid;
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`)
    this.updateUserData(credential.user);
    return this.router.navigate(['/events']);
  }

  async SignUpWithEmail(email, password, displayName) {
    
    this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log('You are Successfully signed up!', res);
      this.router.navigate(['/login']);
      })
      .catch(error => {
      console.log('Something is wrong:', error.message , email);
      });
  }

  async loginWithEmain(email, password){
    this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You are Successfully logged in!');
    this.router.navigate(['/events']);
    })
    .catch(err => {
    console.log('Something is wrong:',err.message);
    });
  }

   

  async signOut(){
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData({ uid, email, displayName}: User){
    
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName
    }

    return userRef.set(data, {merge: true});
  }

}
