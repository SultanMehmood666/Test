import MapsData from '@/MongoDB/Modals/Schema/Maps.Schema';
import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import fs from 'fs/promises';
import path from 'path';

export default async function (req, resp){
    try {
      await MongoDBConnect();
        const { id } = req.query;
        if (!id) {
          return resp.status(400).send({ success: false, error: 'ID parameter is missing' });
        }
    
        // Fetch the document from MongoDB
        const PDF = await MapsData.findById(id);
        if (!PDF) {
          return resp.status(404).send({ success: false, error: 'Map not found' });
        }
    
        // Display Image
        const DeletePDF = PDF.pdf[0].path;
        const DeleteLogo = PDF.Logo[0].path;
        const DeleteThumbnail = PDF.Thumbnail[0].path;
        
        //Delete DeletePdf
        try {
          await fs.unlink(path.join(process.cwd(), "public",DeletePDF));
        } catch (error) {
          console.error("Error Deleting Display Image:", error);
        }

        //Delete DeleteLogo
        try {
            await fs.unlink(path.join(process.cwd(), "public",DeleteLogo));
          } catch (error) {
            console.error("Error Deleting Display Image:", error);
          }
    
          //Delete DeleteThumbnail
        try {
            await fs.unlink(path.join(process.cwd(),"public", DeleteThumbnail));
          } catch (error) {
            console.error("Error Deleting Display Image:", error);
          }
        // Delete the document from MongoDB
        await MapsData.findByIdAndDelete(id);
    
        resp.status(200).send({ success: true, message: 'Map deleted successfully' });
      }catch(error){
    console.log(error)
  }
}
