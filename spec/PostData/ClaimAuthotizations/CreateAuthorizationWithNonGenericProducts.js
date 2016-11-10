/**
 * Created by Jeremy on 10/18/2016.
 */
var testHelper = require('../../TestHelpers');

var createAuthorizationBody = function getCreateAuthorizationBody () {
    var dateNow = new Date();
    return {
        "reference_id": testHelper.getAuthorizationReferenceId(),
        "authorization_date": dateNow.toISOString(),
        "expires_at": new Date(new Date(dateNow).setMonth(dateNow.getMonth()+1)).toISOString(),
        "diagnoses": [
            {
                "name": "Infeccion Respiratoria Superior"
            }
        ],
        "doctor": {
            "country_code": "GT",
            "name": "Wade Wilson",
            "medical_license": "MG20100211-4567",
            "specialties": [
                {
                    "name": "Gastroenterologist"
                }
            ]
        },
        "policy": {
            "country_code": "US",
            "number": "55222",
            "certificate": "0000011255",
            "expiration_date": "2016-08-05T08:40:51.620Z",
            "insurance_company_name": "Insurance XYZ",
            "policy_holder": {
                "id": "50258433",
                "name": "ARMANDO PRUEBAS SIMPLES",
                "email": "william.smith@gmail.com",
                "cellphone": "(734) 555-1212",
                "owner": true,
                "date_of_birth": "1967-07-20T00:00:00.000Z"
            }
        },
        "items": [
            {
                "product_id": "904135",
                "quantity": 1
            }
        ]
    }
}


var createClaimBody = function getCreateClaimBody(pin) {
    return {
        "pin": pin.toString(),
        "items": [
            {
                "osigu_product_id": 14862,
                "product_id": "382064",
                "quantity": 1,
                "price": 200
            }
        ]
    }
}


module.exports = {
    getCreateAuthorizationBody: createAuthorizationBody,
    getCreateClaimBody:createClaimBody
}
;


