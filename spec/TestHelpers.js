/**
 * Created by Jeremy on 10/19/2016.
 */
var randomString = require('randomstring');

Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
}

var randomInt = function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var authorizationReferenceId = function getAuthorizationReferenceId() {
    return (randomString.generate(5).toUpperCase() + randomInt(10000,99999)).toString()
}


var invoiceAmount = function getInvoiceAmount (items, copayment) {
    var amount = 0;
    items.forEach(function (item) {
        var itemAmount =  item.quantity * item.price * ((100 - item.coinsurance_percentage)/100).round(2);
        amount = amount + itemAmount.round(2);
    })
    return amount - copayment;
} ;
var invoiceDocumentNumber = function getInvoiceDocumentNumber () {
    return (randomString.generate(5).toUpperCase() + randomInt(10000,99999)).toString()
} ;

var completeClaimBody = function getCompleteClaimBody(invoiceAmount) {
    return {
        "invoice": {
            "document_number": this.getInvoiceDocumentNumber(),
            "document_date": new Date().toISOString(),
            "currency": "GTQ",
            "amount": invoiceAmount
        }
    }
};

var policyHolderTest = function getPolicyHolderTestData() {
    return {
        "insurer_id": 1,
        "policy_holder": {
            "id": "50258433",
            "date_of_birth": "1967-07-20T00:00:00.000Z"
        }
    }
};


module.exports = {
    baseAddress: 'https://qa.paycodenetwork.com/v1',
    tokenInsurer: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbnRpdHlfdHlwZSI6IklOU1VSRVIiLCJ1c2VyX25hbWUiOiJJTlNVUkVSLTEiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZW50aXR5X2lkIjoxLCJhdXRob3JpdGllcyI6WyJST0xFX0lOU1VSRVIiXSwianRpIjoiNjI4ODY4NWItYjAxYS00MmM2LWIwZGMtNTc5NTQyODE2NjUzIiwic2x1ZyI6InRlY25pc2VndXJvcyIsImNsaWVudF9pZCI6Im9zaWd1X2luc3VyZXJzX2FwcCJ9.DbX2VHjxc-z7z67zL2g_ESxXPXQM0qqTw1VsRFDzj8U',
    tokenProvider: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbnRpdHlfdHlwZSI6IlBST1ZJREVSX0JSQU5DSCIsInVzZXJfbmFtZSI6IlBST1ZJREVSX0JSQU5DSC0xNSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJlbnRpdHlfaWQiOjE1LCJhdXRob3JpdGllcyI6WyJST0xFX1BST1ZJREVSX0JSQU5DSCJdLCJqdGkiOiJjNGMyOWIxZS1iYmFhLTQ2N2UtODNlOC0xMmM2OTNjOGJkZmIiLCJzbHVnIjoiZmF5Y28iLCJjbGllbnRfaWQiOiJvc2lndV9pbnN1cmVyc19hcHAifQ.8nMDyg14w6c0VacnszLdzQq9T9Sy-OOgHEYVaB3EMng',
    generateRandomInt: randomInt,
    getAuthorizationReferenceId: authorizationReferenceId,
    getInvoiceAmount: invoiceAmount,
    getInvoiceDocumentNumber: invoiceDocumentNumber,
    getCompleteClaimBody: completeClaimBody,
    getPolicyHolderData: policyHolderTest
}
;

//Branch 15
//eyJhbGciOiJIUzI1NiJ9.eyJlbnRpdHlfdHlwZSI6IlBST1ZJREVSX0JSQU5DSCIsInVzZXJfbmFtZSI6IlBST1ZJREVSX0JSQU5DSC0xNSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJlbnRpdHlfaWQiOjE1LCJhdXRob3JpdGllcyI6WyJST0xFX1BST1ZJREVSX0JSQU5DSCJdLCJqdGkiOiIwZGNhYTRmNS01MzM5LTQ0NzMtYmM2ZS0yMmY0OGQzODc1YjYiLCJzbHVnIjoiZmF5Y28iLCJjbGllbnRfaWQiOiJvc2lndV9pbnN1cmVyc19hcHAifQ.yuoHqmIq25zPtu4ioPCNQjj4YzxhapY8ZkIrkHUdsXI

//Branch 25
//tokenProvider: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbnRpdHlfdHlwZSI6IlBST1ZJREVSX0JSQU5DSCIsInVzZXJfbmFtZSI6IlBST1ZJREVSX0JSQU5DSC0yNSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJlbnRpdHlfaWQiOjI1LCJhdXRob3JpdGllcyI6WyJST0xFX1BST1ZJREVSX0JSQU5DSCJdLCJqdGkiOiJiNmIxYjlhOC0wYmQ0LTRmNWMtYTRmMS0wNGUzOTI1YWM1ZjQiLCJzbHVnIjoiZmF5Y28iLCJjbGllbnRfaWQiOiJvc2lndV9pbnN1cmVyc19hcHAifQ.gUSOraElHDJpJYNgnr7hwlw7iRyNIw6lV_Zjr05KqTE',