const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB (replace 'your-db-uri' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://tonikhalifa12334:u3DGfrzaCAYlU84G@cluster0.qvilj9w.mongodb.net/Updated-Juicy-Thirst', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a Contact schema with validation
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// Create a Contact model
const Contact = mongoose.model('Contact', contactSchema);

// API endpoint for handling form submissions
app.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new Contact document
    const contact = new Contact({
      name,
      email,
      message,
    });

    // Save the document to MongoDB
    await contact.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'An error occurred while saving the contact' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});