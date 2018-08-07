import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import 'firebase/database';
import {AngularFireDatabase,AngularFireDatabaseModule,AngularFireList,AngularFireObject} from 'angularfire2/database'
import { Router } from '@angular/router';
import { Observable } from '@firebase/util';
import { FirebaseDatabase } from '@firebase/database-types';
import { QueryFn } from 'angularfire2/database/interfaces';
import {Student} from '../app/student.model'

@Injectable()
export class AuthserviceService {
  [x: string]: any;
  authState: any = null;
 
  private basePath: string = '/Users/student';
  userref:AngularFireList<Student>=null;
 db ;
 db2;
  constructor(public afAuth:AngularFireAuth,private router: Router,private firebase :AngularFireDatabase,private db1: AngularFireDatabase) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      this.userref = firebase.list(this.basePath);
   this.db=firebase.database;


    });
   }

   

    public createUser(student: Student): void {
    
    this.db1.database.ref(this.basePath).child(student.name).set(student)
    //this.userref.push(student)

    
  
   
   
  
   }
  
  
  
  
  
  
    private handleError(error) {
      console.log(error);
    }
  
  get userName():string{
    return Student.name;
  }
  
  
    get isUserAnonymousLoggedIn(): boolean {
      return (this.authState !== null) ? this.authState.isAnonymous : false
    }
   
    get currentUserId(): string {
      return (this.authState !== null) ? this.authState.uid : ''
    }
   
    get currentUserName(): string {
      return this.authState['email']
    }
   
    get currentUser(): any {
      return (this.authState !== null) ? this.authState : null;
    }
   
    get isUserEmailLoggedIn(): boolean {
      if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
        return true
      } else {
        return false
      }
    }
  
    
    
    // Return a single observable item
    
  
  
  
  
   
    signUpWithEmail(email: string, password: string) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((student) => {
          
          this.authState = student
         
        })
        .catch(error => {
          console.log(error)
          throw error
        });
    }
   
    loginWithEmail(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((student) => {
          this.authState = student
        })
        .catch(error => {
          console.log(error)
          throw error
        });
    }
  
  
  
    
  
  
  resetPassword(email:string){
    return this.afAuth.auth.sendPasswordResetEmail(email)
    .then(() => console.log("email sent"))
    .catch((error) => console.log(error))
  }
  
  
   
    signOut(): void {
      this.afAuth.auth.signOut();
      this.router.navigate(['/'])
    }}
  




