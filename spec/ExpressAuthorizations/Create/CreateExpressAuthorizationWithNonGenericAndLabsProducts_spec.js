/**
 * Created by Jeremy on 10/18/2016.
 */

return;

console.log("Test starting");

var postData = require('../../PostData/ExpressAuthorizations/CreateAuthorizationWithNonGenericAndLabsProducts');

var testHelper = require('../../TestHelpers');
var frisby = require('frisby');


var createExpressURL = testHelper.baseAddress + '/providers/fayco/authorizations/express';

frisby.create('Create express')
    .addHeader('Content-Type', 'application/json')
    .addHeader('Authorization', testHelper.tokenProvider)
    .post(createExpressURL, testHelper.getPolicyHolderData(), {json: true})
    .expectStatus(202)
    .inspectBody()
    .inspectHeaders()
    .after(function (body, res) {
        var queueURL = testHelper.baseAddress + res.headers['location'].replace('/v1', '');
        console.log(queueURL);

        frisby.create('Check Queue')
            .addHeader('Content-Type', 'application/json')
            .addHeader('Authorization', testHelper.tokenProvider)
            .get(queueURL)
            .inspectJSON()
            .expectBodyContains('verification_code')
            .inspectBody()
            .retry(6, 1000)
            .afterJSON(function (body) {
                var expressAuthorizationCode = body.id;
                var modifyExpressURL = testHelper.baseAddress + '/providers/fayco/authorizations/express/' + expressAuthorizationCode;
                frisby.create('Add or Modify Express Authorization')
                    .addHeader('Content-Type', 'application/json')
                    .addHeader('Authorization', testHelper.tokenProvider)
                    .patch(modifyExpressURL, postData.getCreateExpressBody(), {json: true})
                    .inspectJSON()
                    .expectStatus(200)
                    .afterJSON(function (body) {
                        var invoiceAmount = testHelper.getInvoiceAmount(body.items, body.copayment);
                        var completeExpressURL = testHelper.baseAddress + '/providers/fayco/authorizations/express/' + expressAuthorizationCode + '/complete';

                        frisby.create('Complete an express')
                            .addHeader('Content-Type', 'application/json')
                            .addHeader('Authorization', testHelper.tokenProvider)
                            .post(completeExpressURL, testHelper.getCompleteClaimBody(invoiceAmount), {json: true})
                            .expectStatus(200)
                            .inspectJSON()
                            .afterJSON(function (body) {
                                expect(body.status.toUpperCase()).toBe('PENDING_REVIEW');
                                console.log(body.id);
                            })
                            .toss()


                    })
                    .toss()

            })
            .toss()
    })
    .toss()

