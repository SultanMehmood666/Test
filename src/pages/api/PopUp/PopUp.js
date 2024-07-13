import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import multer from 'multer'
import PopUpModel from '@/MongoDB/Modals/PopUp.Model';
import path from 'path'
const filePath = path.join("..", "public", "PopUp").replace(/\\/g, '/');
const id = process.env.PopUpId;



// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     const galleryPath = path.resolve(filePath).replace(/\\/g, '/');
      cb(null, galleryPath); // Save files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
      const uniqueName = Date.now() + '-' + file.originalname;
      cb(null, uniqueName); // Use the original filename
    }
  });
  
  // Set up multer instance with the storage configuration
  const upload = multer({ storage: storage });

export default async function(req, resp){
    try{ 
      await MongoDBConnect();
     upload.any()(req, resp, function (err) {
         if (err) {
           console.error('Error parsing form data:', err);
           return resp.status(500).send('Error parsing form data');
         }
   
         const formData = req.body;
         const files = req.files; // Retrieve files from req.files
         
         // Check if files are present
         if (!Array.isArray(files) || files.length === 0) {
             console.error('No files uploaded');
             return resp.status(400).send('No files uploaded');
         }
   
         // Process form data and files as needed
         // Modify file paths before saving to MongoDB
         const modifiedFiles = files.map(file => ({
             ...file,
             path: path.join('/public/PopUp', path.basename(file.path)).replace(/\\/g, '/')
         }));
         
         // Save form data and modified files to MongoDB using PopUpModel
         PopUpModel(id, formData, modifiedFiles);
   
         resp.send('Form data received successfully');
     });
 } catch(error){
         console.error('Error:', error);
         resp.status(500).send('Internal server error');
     }
 }
 