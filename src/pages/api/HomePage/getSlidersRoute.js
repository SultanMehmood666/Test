import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import HomePageSliderModel from '@/MongoDB/Modals/Schema/HomePageSlider.Schema'

export default async function (req, resp){
       try{
            await MongoDBConnect();
            const getSliders = await HomePageSliderModel.find();
            return resp.send(getSliders);
        }
        catch(error){
            console.error(`Error fetching Real Estate: ${error}`);
            resp.status(500).json({error: 'Internal Error'});
        }
    } 
