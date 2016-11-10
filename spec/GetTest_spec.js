/**
 * Created by Jeremy on 10/14/2016.
 */
console.log("Hello world");

var frisby = require('frisby');
var URL = 'https://dev.paycodenetwork.com/v1/mock/insurer-notification';

frisby.create("Positive_GET_MiddlewareMonitor_Widget_Status")
    .get(URL)
    .expectStatus(200)
    .toss();
