const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    department: String
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;