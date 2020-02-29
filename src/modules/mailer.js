const path = require('path');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

// transport.sendMail({
//   from: 'Ricardo <ricardodreamsites@gmail.com>',
//   to: 'Eu mesmo <ricardodreamsites@gmail.com>',
//   subject: 'Testando Mailhog',
//   html: '<h1>Funcionou!</h1>'
// })

const viewPath = path.resolve(__dirname, '..', 'resources', 'mail');

transport.use(
  'compile',
  hbs({
    viewEngine: exphbs.create({
      layoutsDir: path.resolve(viewPath),
      partialsDir: path.resolve(viewPath),
      defaultLayout: 'forgot_password',
      extname: '.html',
    }),
    viewPath,
    extName: '.html',
  })
);

module.exports = transport;