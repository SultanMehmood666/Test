import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import Blog from '@/MongoDB/Modals/Schema/Blog.Schema';
import fs from 'fs/promises';
import path from 'path';


export default async function(req, resp) {
  try {
    await MongoDBConnect();
    const { id } = req.query;
    if (!id) {
      return resp.status(400).send({ success: false, error: 'ID parameter is missing' });
    }

    // Fetch the document from MongoDB
    const Blogger = await Blog.findById(id);
    if (!Blogger) {
      return resp.status(404).send({ success: false, error: 'Blog not found' });
    }

    // Display Image
    const DeleteThumbnail = Blogger.thumbnail[0].path;
    
    try {
      await fs.unlink(path.join(process.cwd(), DeleteThumbnail));
    } catch (error) {
      console.error("Error Deleting Display Image:", error);
    }

    // Delete the document from MongoDB
    await Blog.findByIdAndDelete(id);

    resp.status(200).send({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    resp.status(500).send({ success: false, error: 'Internal server error' });
  }
}

