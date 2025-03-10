public with sharing class AccountController {
  

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            if (Schema.sObjectType.Account.isAccessible()) {
             System.debug('inside if');   
             return [Select Id, Name From Account];
            }
            return null;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}