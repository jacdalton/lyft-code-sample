const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json({ type: 'application/json' }));

app.post('/test', (req, res) => {
  if(req.body.string_to_cut) {
    res.send(cutString(req.body.string_to_cut));
  } else {
    res.status(400).send('Invalid input, please use { "string_to_cut": "YOUR_STRING_HERE" } format');
  }
});

const cutString = string => {
  let thirdLetterStr = '';
  if(string.length > 2) {
    for(let i = 2; i < string.length; i += 3) {
        thirdLetterStr += string[i];
    }
  }
  return {
    return_string: thirdLetterStr
  };
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));