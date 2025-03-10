import { LightningElement,wire } from 'lwc';
import createNewContact from '@salesforce/apex/ContactController.createNewContact' 
export default class NewContactForm extends LightningElement {
firstName ='';
lastName ='';

handleFirstName(event){
    this.firstName = event.target.value;
}
handleLastName(event){
    this.lastName = event.target.value;
}

handleNewContactBtn(){
    createNewContact({firstName:this.firstName,lastName:this.lastName})
    .then(result => {
        alert("Contact created successfully.");
    })
    .catch(error => {
        alert("Error:"+error.body.message);
    });
}
}