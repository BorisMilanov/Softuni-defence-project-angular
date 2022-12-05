const { Schema, model } = require('mongoose');

const loanSchema = new Schema({
    loanName: 'String',
    loanType: 'String',
    loanAmount: 'Number',
    loanIssueDate: 'Date',
    loanStatus: 'String'
});

const Loan = model('Loan', loanSchema);

module.exports = Loan;