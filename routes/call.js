var express = require('express');
var router = express.Router();
var twilio = require('twilio');
var VoiceResponse = twilio.twiml.VoiceResponse;

// POST /calls/connect
router.post('/connect', twilio.webhook({validate: false}), function(req, res, next) {

  var phoneNumber = req.body.phoneNumber || '+44 7934 766102' //'+447738708915';
  var callerId = process.env.TWILIO_PHONE_NUMBER;
  var twiml = new VoiceResponse();

  // twiml.dial({callerId : process.env.TWILIO_PHONE_NUMBER}, phoneNumber);


  var dial = twiml.dial({callerId : callerId});

  dial.number(phoneNumber);

  res.send(twiml.toString());
});

module.exports = router;
