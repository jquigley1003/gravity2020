import * as functions from 'firebase-functions';
import 'firebase-functions/lib/logger/compat';

import * as sendgridMail from '@sendgrid/mail';

const SGAPI_KEY = functions.config().sendgrid.key;

sendgridMail.setApiKey(SGAPI_KEY);

export const sendContactMessage = functions.firestore
  .document('contactMessages/{messageId}')
  .onCreate(async (snapshot, context) => {
    const messageValue = snapshot.data();
    const msg = {
      to: 'gravityfitnessemail@gmail.com', // Change to your recipient
      from: 'gravityfitnessemail@gmail.com', // Change to your verified sender
      subject: 'Message From '+ messageValue.name + ', Using Gravity Contact Form',
      html: messageValue.html
    }
    sendgridMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  });