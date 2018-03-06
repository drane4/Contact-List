import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Contact {
  lname: string;
  fname: string;
  mobile: string;
  phone: string;
  email: string;
  address: string;
}

interface ContactId extends Contact { 
  id: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactsCol: AngularFirestoreCollection<Contact>;
  contacts: any;

  lname: string;
  fname: string;
  mobile: string;
  phone: string;
  email: string;
  address: string;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.contactsCol = this.afs.collection('contacts');
    this.contacts = this.contactsCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return {id, data};
      })
    })
  }
  addPost() {
    this.afs.collection('contacts').doc('my-custom-id').set
    ({
    'lname': this.lname, 
    'fname': this.fname, 
    'mobile': this.mobile,
    'phone': this.phone,
    'email': this.email,
    'address': this.address
  });
  }
}
