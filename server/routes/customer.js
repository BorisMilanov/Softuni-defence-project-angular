var express = require('express');
var router = express.Router();

const customerModel = require('../models/Customer');
/* GET users listing. */
router.get('/add', function (req, res, next) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  let department = req.body.department;

  let customerObj = new customerModel({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    department: department
  })

  customerObj.save(function (err, customerObj) {
    if (err) {
      res.send({ status: 500, message: 'Unable to add customer' });
    } else {
      res.send({ status: 200, message: 'User added customer', customerDetails: customerObj }); //be carfull for customerDetails
    }

  })
});

router.get('/list', function (req, res, next) {
  customerModel.find(function (err, customerListResponse) {
    if (err) {
      res.send({ status: 500, message: 'Unable to find customers' });
    }
    else {
      const recordCount = customerListResponse.length;
      res.send({ status: 200, recordCount: recordCount, results: customerListResponse });
    }
  })
});

router.get('/view', function (req, res, next) {
  const userId = req.query.userId;
  customerModel.findById(userId, function (err, customerResponse) {
    if (err) {
      res.send({ status: 500, message: 'Unable to find customers' });
    }
    else {

      res.send({ status: 200, results: customerResponse });
    }
  })
});

router.put('/update', function (req, res, next) {
  const userId = req.body.userId;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  let department = req.body.department;
  let customerObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    department: department
  }
  //need to add up obj
  customerModel.findByIdAndUpdate(userId, customerObj, function (err, customerResponse) {
    if (err) {
      res.send({ status: 500, message: 'Unable to update customers' });
    }
    else {

      res.send({ status: 200, results: customerResponse });
    }
  })
});

router.delete('/delete', function (req, res, next) {
  customerModel.findByIdAndDelete(userId, function (err, customerResponse) {
    if (err) {
      res.send({ status: 500, message: 'Unable to delete customer' });
    }
    else {

      res.send({ status: 200, results: customerResponse });
    }
  })
});


module.exports = router;
