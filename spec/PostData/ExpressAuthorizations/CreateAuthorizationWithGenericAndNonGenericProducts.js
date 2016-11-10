/**
 * Created by Jeremy on 10/18/2016.
 */




var createExpressBody = function getCreateExpressBody() {

    return  {

        "items": [
            {
                "product_id": "382064",
                "quantity": 1,
                "price": 200
            },
            {
                "product_id": "056064",
                "quantity": 1,
                "price": 500
            }
        ]
    }


};

module.exports = {

    getCreateExpressBody:createExpressBody
}
;


