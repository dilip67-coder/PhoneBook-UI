import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  contacts:Contact[] =[];
  constructor(private contactService: ContactService, private router : Router){}

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactService.getAllContacts().subscribe(
      data=>{
        this.contacts=data;
      }
    );
  }
  //remove a contact
  deleteContact(id:number){
    this.contactService.deleteContact(id).subscribe(
      data=>{
        console.log("SUCCESSFULL........");
        console.log(data);
        this.getAllContacts();
      },
      error=>{
        console.log("FAILED........");
        console.log(error);
      }
    )
   }
   //edit a contact
  editContact(id:number){
        console.log("Edited :: "+id);
        this.router.navigate(['/edit',id]); 
  }
}