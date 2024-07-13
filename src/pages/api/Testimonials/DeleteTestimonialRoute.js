import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import  TestimonialModel from '@/MongoDB/Modals/Schema/Testimonials.Schema';
import fs from 'fs/promises';
import path from 'path'

export default async function(req, resp){
    try {
      const { id } = req.query;
      await MongoDBConnect();
      if (!id) {
        return resp.status(400).send({ success: false, error: 'ID parameter is missing' });
      }
  
      // Fetch the document from MongoDB
      const testimonial = await TestimonialModel.findById(id);
      if (!testimonial) {
        return resp.status(404).send({ success: false, error: 'Real Estate not found' });
      }
  
      // Display Image
      const testimonialProfilePic = testimonial.Profile[0].path;
      try {
        await fs.unlink(path.join(__dirname, '..', '..', '..', testimonialProfilePic));
      } catch (error) {
        console.error("Error Deleting Testimonial Profile Pic:", error);
      }
  
      // Delete the document from MongoDB
      await TestimonialModel.findByIdAndDelete(id);
  
      resp.status(200).send({ success: true, message: 'Real Estate deleted successfully' });
    } catch (error) {
      console.error('Error deleting item:', error);
      resp.status(500).send({ success: false, error: 'Internal server error' });
    }
  }
