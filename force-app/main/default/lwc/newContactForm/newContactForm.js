import { LightningElement,wire } from 'lwc';
import createNewContact from '@salesforce/apex/ContactController.createNewContact' 
export default class NewContactForm extends LightningElement {
firstName ='';
lastName ='';
contactCreated = false;
hasError = false;
handleFirstName(event){
    this.firstName = event.target.value;
}
handleLastName(event){
    this.lastName = event.target.value;
}

handleNewContactBtn(){
    createNewContact({firstName:this.firstName,lastName:this.lastName})
    .then(result => {
        this.contactCreated = true;
        this.hasError = false;
    })
    .catch(error => {
        this.contactCreated = false;
        this.hasError = true;
    });
}
}