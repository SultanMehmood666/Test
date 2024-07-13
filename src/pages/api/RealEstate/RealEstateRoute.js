import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import RealEstateModel from '@/MongoDB/Modals/Schema/RealEstate.Schema';

export default async function(req, resp){
    try{
        await MongoDBConnect();
        const realEstates = await RealEstateModel.find();
        return resp.send(realEstates);
    }
    catch(error){
        console.error(`Error fetching Real Estate: ${error}`);
        resp.status(500).json({error: 'Internal Error'});
    }
} 