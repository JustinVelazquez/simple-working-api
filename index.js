const express = require('express');
const cors = require('cors');
const { response } = require('express');

const PORT = 8000;

const app = express();
app.use(cors());

let rappers = {
  '21 savage': {
    age: 28,
    birthName: 'Sheyaa Bin Abraham-Joesph',
    birthLocation: 'London, England',
  },
  'chance the rapper': {
    age: 27,
    birthName: 'Chancelor Jonathan Bennett',
    birthLocation: 'Chicago, Illinois',
  },
  unknown: {
    age: 28,
    birthName: 'unknown',
    birthLocation: 'unknown',
  },
};

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/rappers/:rapperName', (req, res, next) => {
  const rapName = req.params.rapperName.toLowerCase();

  if (rappers[rapName]) {
    res.json(rappers[rapName]);
  } else {
    res.json(rappers['unknown']);
  }
});

app.listen(PORT, () => {
  console.log(`Listening in on port ${PORT} `);
});
