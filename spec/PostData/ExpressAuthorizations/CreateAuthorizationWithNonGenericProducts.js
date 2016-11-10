/**
 * Created by Jeremy on 10/18/2016.
 */
var testHelper = require('../../TestHelpers');

var createExpressBody = function getCreateExpressBody() {
    return {
        "items": [
            {
                "osigu_product_id": 14862,
                "product_id": "382064",
                "quantity": 1,
                "price": 500
            }
        ]
    }
}


module.exports = {

    getCreateExpressBody:createExpressBody
}
;


