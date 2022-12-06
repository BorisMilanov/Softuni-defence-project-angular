const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
    firstname: String,
    sencondName: String,
    email: String
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;