const express = require('express');
const path = require('path'); // Require the 'path' module
const app = express();
const port = 3006;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set the directory for your templates
app.set('views', path.join(__dirname, 'views')); // Set the 'views' directory

// Define your values array or principles
const values = [
  {
    "Value Companion": "Create from User's Perspective"
  },
  {
    "Value Companion": "Cultivate a growth mindset"
  },
  {
    "Value Companion": "Demonstrate with 'Why'"
  },
  {
    "Value Companion": "Do it as a team"
  },
  {
    "Value Companion": "Empathy begins at home"
  },
  {
    "Value Companion": "Err on the side of over-communication"
  },
  {
    "Value Companion": "Execution is the metric"
  },
  {
    "Value Companion": "Frugal but not cheap"
  },
  {
    "Value Companion": "Own your work"
  },
  {
    "Value Companion": "Speak your mind"
  }
];

// Serve HTML template for values using EJS
app.get('/value/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (id >= 0 && id < values.length) {
    const value = values[id];
    res.render('value', { value });
  } else {
    res.status(404).send('Value not found');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});