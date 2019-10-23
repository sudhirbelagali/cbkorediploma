const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<html><head><title>Simple Web Application Using NodeJS</title></head><body><h1>C B Kore Polytechnic Chikodi</h1><h3>Hello World</h3><div>A sample of workshop outcome</div></body></html>')
})
console.log('Server is up at 3000');
console.log('open localhost:3000');


app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

