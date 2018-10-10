import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'

import { User } from '../../models/user.model';
/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

	usersCollection: AngularFirestoreCollection<User>;
	userDoc: AngularFirestoreDocument<User>;

  	constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    	console.log('Hello AuthenticationProvider Provider');
    	this.usersCollection = db.collection('users');
  	}

  	/**
		* Create new user with email and password
		* @param email		new user's email
		* @param password	new user's password
		* @return			new Promise containing non-null User Credential. See Google Firebase documentation at: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword	
  	*/
  	register(email: string, password: string) {
	  	return new Promise((resolve, reject) => {
	  		this.afAuth.auth.createUserWithEmailAndPassword(email, password)
	  			.then((userData) => {
	  				let newUser: User = {
	  					userId: userData.user.uid,
	  					email: userData.user.email
					}
	  				this.usersCollection.add(newUser);
	  				resolve(userData);
	  			}, (err) =>{
	  				reject(err);
	  			});
	  	});
  	}

  	/**
		* Sign in using email and password
		* @param email		user's email
		* @param password	user's password
		* @return			new Promise containing non-null User Credential. See Google Firebase documentation at: https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#signInWithEmailAndPassword
  	*/
  	signIn(email: string, password: string) {
  		return new Promise((resolve, reject) => {
  			this.afAuth.auth.signInWithEmailAndPassword(email, password)
  				.then(userData => resolve(userData), err => reject(err));
  		});
  	}


  	/**
		* Sign out current logged in user.
		* More at: https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#signOut
  	*/
  	logout() {
  		this.afAuth.auth.signOut();
  	}

}
