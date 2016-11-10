/**
 * Created by Jeremy on 10/18/2016.
 */




var createExpressBody = function getCreateExpressBody() {

    return  {
        "diagnoses": [
            {
                "id": 4
            }
        ],
        "items": [
            {
                "product_id": "245025",
                "quantity": 1,
                "price": 200
            },
            {
                "product_id": "020109",
                "quantity": 1,
                "price": 500
            },
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


