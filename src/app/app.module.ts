import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    ContactListComponent,
    EditContactComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
