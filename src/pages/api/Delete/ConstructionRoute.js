import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import Construction from '@/MongoDB/Modals/Schema/Const.Schema';
import fs from 'fs/promises';
import path from 'path';
import { ObjectId } from 'mongodb';

export default async function handler(req, resp) {
  try {
    const { id } = req.query;
    await MongoDBConnect();

    if (!id) {
      return resp.status(400).send({ success: false, error: 'ID parameter is missing' });
    }

    // Fetch the document from MongoDB
    const construction = await Construction.findOne({ _id: new ObjectId(id) });

    if (!construction) {
      return resp.status(404).send({ success: false, error: 'Construction not found' });
    }

    // Define paths for deletion
    const DeleteDisplayImg = construction.DisplayImage.img[0]?.path;
    const DeleteGalleryImg1 = construction.gallery.img1[0]?.path;
    const DeleteGalleryImg2 = construction.gallery.img2[0]?.path;
    const DeleteGalleryImg3 = construction.gallery.img3[0]?.path;
    const firstFloorImg = construction.firstFloor.image[0]?.path;
    const SecondFloorImg = construction.secondFloor.image[0]?.path;
    const ThirdFloorImg = construction.thirdFloor.image[0]?.path;
    const CarousalOne = construction.carousel[0].img[0]?.path;
    const CarousalTwo = construction.carousel[1].img[0]?.path;
    const CarousalThree = construction.carousel[2].img[0]?.path;
    const CarousalFour = construction.carousel[3].img[0]?.path;
    const CarousalFive = construction.carousel[4].img[0]?.path;
    const CarousalSix = construction.carousel[5].img[0]?.path;
    const CarousalSeven = construction.carousel[6].img[0]?.path;

    const imagePaths = [
      `public/${DeleteDisplayImg}`,
      `public/${DeleteGalleryImg1}`,
      `public/${DeleteGalleryImg2}`,
      `public/${DeleteGalleryImg3}`,
      `public/${firstFloorImg}`,
      `public/${SecondFloorImg}`,
      `public/${ThirdFloorImg}`,
      `public/${CarousalOne}`,
      `public/${CarousalTwo}`,
      `public/${CarousalThree}`,
      `public/${CarousalFour}`,
      `public/${CarousalFive}`,
      `public/${CarousalSix}`,
      `public/${CarousalSeven}`
    ];

    // Delete images
    for (const imgPath of imagePaths) {
      if (imgPath) {
        try {
          await fs.unlink(path.join(process.cwd(), imgPath));
        } catch (error) {
          console.log(`Error Deleting Image (${imgPath}):`, error);
        }
      }
    }

    // Delete the document from MongoDB
    await Construction.findByIdAndDelete(id);

    resp.status(200).send({ success: true, message: 'Construction deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    resp.status(500).send({ success: false, error: 'Internal server error' });
  }
}
