const express = require("express");
const multer = require("multer");
const bfhlRoutes = require('./routes/bfhlRoutes.js');

const app = express();
const port = process.env.PORT || 8800;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Use bfhl routes
app.use('/api', upload.single("file_b64"), bfhlRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
