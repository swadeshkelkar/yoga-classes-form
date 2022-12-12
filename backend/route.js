const express = require("express");
const router = express.Router();
const cors = require("cors");
const User = require("./model/User");

const validateContact = (contact) => {
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(contact);
};
const validateAge = (dateOfBirth) => {
  var dob = new Date(parseInt(dateOfBirth));
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);

  if (age >= 18 && age <= 65) {
    return true;
  }

  return false;
};

// Post request
router.post("/user", cors(), (req, res) => {

  const {
    firstName,
    lastName,
    email,
    contact,
    gender,
    dateOfBirth,
    batch,
    address,
    paymentMode,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !contact ||
    !gender ||
    !dateOfBirth ||
    !batch ||
    !address ||
    !paymentMode
  ) {
    return res.status(400).json({ message: "Some fields are missing" });
  }

  //age
  let isValidAge = validateAge(dateOfBirth);

  if (!isValidAge) {
    return res.status(400).json({ message: "Age limit - 18 to 65" });
  }
  // contact
  if (!validateContact(contact)) {
    return res.status(400).json({ message: "Contact is not valid" });
  }
  //Check for existing user
  User.findOne({
    email: email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        message: "user exists",
      });
    }
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      contact: contact,
      gender: gender,
      dateOfBirth: dateOfBirth,
      batch: batch,
      address: address,
      paymentMode: paymentMode,
    });

    // create new user
    newUser
      .save()
      .then((user) => {
        res.json({ User: user });
      })
      .catch(() => {
        return res
          .status(400)
          .json({ message: "Age should be between 18 to 65" });
      });
  });
});

module.exports = router;
