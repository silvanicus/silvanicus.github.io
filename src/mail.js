const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'silvana.ramirez85@gmail.com',
    pass: '&nodeMaster'
  },
  tls:{
    rejectUnauthorized: false
  }
});

let helperOptions = {
  from: '"ME" <silvana.ramirez85@gmail.com>',
  to: 'silvana.ramirez85@gmail.com',
  subject: 'Hello ✔',
  text: 'Hello world?',
  html: '<b>New Contact from</b>'
}
transporter.sendMail(helperOptions,(error,info) =>{
  if(error){
    console.log(error);
  } else {
    console.log(`Has been send
      ${info}`)
  }
});
