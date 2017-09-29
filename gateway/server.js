const express = require('express')
const app = express()

const contentTypes = {
  "root" : "root"
}

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'nunox5hgwyml',
  accessToken: '909c9e1bad809e2b0f424ec773038b2df9c54fe74fabeb933db76ed8a49042c6'
})

app.get('/', function (req, res) {
    console.log("req received");
    client.getEntries(
      {
        content_type: contentTypes.root
      }
    )
    .then(function (entries) {
              var root = entries.items[0];
              res.send("Retrieved from Contenful: " + root.fields.uid);

      })
    .catch(console.error)})
   
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);