import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

import { Claim } from '../../models/claim.model';

/*
  Generated class for the ClaimProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClaimProvider {

	claimsCollection: AngularFirestoreCollection<Claim>;
	claimDoc: AngularFirestoreDocument<Claim>;

  	constructor(
  		private afAuth: AngularFireAuth,
  		private afStore: AngularFirestore,
  		private afStorage: AngularFireStorage
  	) {
    	console.log('Hello ClaimProvider Provider');
  	}

}
