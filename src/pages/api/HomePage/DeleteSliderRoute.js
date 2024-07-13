import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import HomePageSliderModel  from '@/MongoDB/Modals/Schema/HomePageSlider.Schema';
import fs from 'fs'
import path from 'path';

// Function to delete files from server
const deleteFile = async (filePath) => {
    try {
        await fs.unlink(filePath,(err)=>{
                if(err){
                    console.log("There is an",err);
                }
                    else{
                        console.log('file deleted Successfully!');
                    }
        });
        console.log(`Deleted file: ${filePath}`);
    } catch (error) {
        console.error(`Error deleting file: ${filePath}`, error);
    }
};

export default async function (req, res) {
    try {
        await MongoDBConnect();
        // Fetch all slider documents to get paths
        const sliders = await HomePageSliderModel.find({});
        
        // Delete each file from server
        for(const slider of sliders){
            if (slider.sliderImage && slider.sliderImage.path) {
                const filePath = path.join(process.cwd(), "public", `${slider.sliderImage.path}`);
                await deleteFile(filePath);
            }
        };

        // Delete all slider documents from MongoDB
        const result = await HomePageSliderModel.deleteMany({});
        res.json({ message: `${result.deletedCount} documents deleted successfully.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

