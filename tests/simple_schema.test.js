const mocha = require("mocha")
const chai = require("chai")
const mongoose = require('mongoose')
require('../simple_db');

const SimpleSchema = require('../simple_schema');

it('Should throw a more useful error', function(done){
    let simpleSchema = new SimpleSchema({word: 'Hello'})
    simpleSchema
    .save()
    .then(function (simpleSchema) {
        done()
    })
    .catch(function (err) {
        console.log(err)
        done()
    })
});

after(function (done) {
    SimpleSchema
    .findOneAndDelete({word:'Hello'})
    .then( function (res) {
        done()
    })
    .catch(function (err) {
        console.log(err)
        done()
    })
    mongoose.connection.close()
})