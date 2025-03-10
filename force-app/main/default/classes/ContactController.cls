public with sharing class ContactController {
   
    @AuraEnabled
    public static Contact createNewContact(String firstName, String lastName){
        try {
            Contact newContact = new Contact();
            newContact.FirstName = firstName;
            newContact.LastName = lastName;
            if (Schema.sObjectType.Account.isCreateable()) {
            
                insert newContact;
            }
            return newContact;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}