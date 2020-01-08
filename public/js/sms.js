
$(document).ready(() => {
  $('.modal').modal();
  $('select').formSelect();
  const $sendSmsButton = $('#sendSms');

  const TWAPI = {
    callTwilio(number, message) {
      return $.ajax({
        url: '/api/sms',
        type: 'GET',
        data: {
          pNumber: number,
          tMessage: message,
        },
      });
    },
  };

  const sendMessage = (number, message) => {
    TWAPI.callTwilio(number, message).then((data) => {
      console.log('This the promise for Calling Twilio API', data);
    });
  };

  $sendSmsButton.on('click', () => {
    const message = $('#textarea1').val();
    const number = $('#name').val();
    sendMessage(number, message);
    // console.log(message, number);
    // console.log($(this));
  });
});

// Uncomment the below code and comment out the above code.
// For testing you can change the to phone number in the dotenv file to your own
// and run `node public/js/sms.js`
//
// const twilio = require('twilio');
// require('dotenv').config();
//
// const getResources = () => {
//   const messages = 'Hello Jason this is a test again';
//   const { accountSID } = process.env;
//   const { authToken } = process.env;
//   const client = new twilio(accountSID, authToken);
//
//   client.messages.create({
//     body: messages,
//     to: process.env.myNumber,
//     from: process.env.twilioNumber,
//   }).then((message) => console.log(message.sid));
// };
//
// getResources();
//
