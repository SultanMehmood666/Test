import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import multer from 'multer';
import path from 'path'


const filePath = path.join(process.cwd(), "public", "Blog").replace(/\\/g, '/')

const stroage = multer.diskStorage({
    destination: function(req, file, cb){
        const GalleryPath = path.resolve(filePath).replace(/\\/g, '/');
        cb(null, GalleryPath)
    },
    filename: function (req, file, cb){
        const uniqueSuffix = Date.now() + file.originalname;
        cb(null, uniqueSuffix)
    }
})

const upload = multer({storage: stroage})

export const config = {
    api: {
      bodyParser: false // Disabling the built-in body parser for file uploads
    }
  };


export default async function(req, resp){
try{
    await MongoDBConnect();
    upload.any()(req, resp, function(error){
        if(error instanceof multer.MulterError){
            console.log("There's an error:", error.error);
            resp.status(500).send("multer error:" + error.message);
        }
        else if(error){
            console.log("unKnown Error:", error)
            return resp.status(500).send("unKnown Error:" + error.message);
        }
        const formData = req.body;
        const files = req.files;
        if(files.length > 0){
            const uploadedFile = files[0];
            const filePath = "/Blog/" +path.basename(uploadedFile.path).replace(/\\/g, '/');
            // const modifiedFiles = files.map(file=>({...files, path:path.join('/public/Blog', path.basename(file.path).replace(/\\/g, '/')), }))
        console.log("filePath:",filePath)
        // Concatenate strings properly before sending response
        resp.json({data: filePath});
           
    }else{
        resp.status(404).send("No File Uploaded")
    }
})
}catch(error){  
    console.log("Catch: Error", error);
    resp.status(500).send("Internal Server Error: " + error.message);
}
}
