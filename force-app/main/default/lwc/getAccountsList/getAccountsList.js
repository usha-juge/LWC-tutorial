import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'; 
export default class GetAccountsList extends LightningElement {
    
    
    accounts;
    error;
    @wire(getAccounts)
    wiredAccounts({ data, error }) {
        if (data) {
            // Ensure that the data is an array
            console.log('Accounts Data:', data);
            this.accounts = Array.isArray(data) ? data : [];
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }
}