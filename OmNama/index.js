//require third party modules
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');

//require internal files
const smtp = require('./server/handler/smtp');
const config = require('./server/config/app').myConfig;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'dist/OmNama')));
app.post('/sendMail', (req, res) => {
  return Promise.resolve()
    .then(() => {
      return smtp.sendMail(req.body)
        .then(() => {
          res.send({
            message: "success"
          })
        })
    })
    .catch((error) => {
      res.send({
        message: "Mail has not sent",
        code: 500
      })
    })
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/OmNama/index.html'));
});

app.listen(config.server.port, () => {
  console.log(`server connected with http://localhost:4600`);
});
