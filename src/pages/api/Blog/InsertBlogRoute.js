import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import BlogModel from '@/MongoDB/Modals/Blog.Model';

const filePath = path.join(process.cwd(), "public", "Blog").replace(/\\/g, '/');

// Function to ensure directory exists
const ensureDirectoryExistence = (filePath) => {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
  }
};

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const galleryPath = path.resolve(filePath, 'Gallery').replace(/\\/g, '/');
    ensureDirectoryExistence(galleryPath); // Ensure the directory exists
    cb(null, galleryPath); // Save files to the 'Gallery' directory
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName); // Use the original filename
  }
});

// Set up multer instance with the storage configuration
const upload = multer({ storage: storage });

export const config = {
  api: {
    bodyParser: false // Disabling the built-in body parser for file uploads
  }
};

export default async function (req, resp) {
  try {
    await MongoDBConnect(); // Ensure MongoDB connection is established

    // Use multer middleware to parse form data
    upload.any()(req, resp, async function (err) {
      if (err) {
        console.error('Error parsing form data:', err);
        return resp.status(500).send('Error parsing form data');
      }

      // Access form data from req.body
      const formData = req.body;
      const files = req.files;

      // Modify file paths before saving to MongoDB
      const modifiedFiles = files.map(file => ({
        ...file,
        path: path.join('/Blog/Gallery/', path.basename(file.path)).replace(/\\/g, '/')
      }));

      try {
        // Save formData and modifiedFiles to MongoDB using BlogModel
        await BlogModel(formData, modifiedFiles);

        // Send success response after saving data and files
        resp.send("Received Successfully");
      } catch (error) {
        console.error(`Error Inserting Blog: ${error}`);
        resp.status(500).json({ error: 'There was an error' });
      }
    });
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    resp.status(500).json({ error: 'Database connection error' });
  }
}
