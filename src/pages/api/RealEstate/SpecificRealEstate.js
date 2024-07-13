import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import RealEstateModel from '@/MongoDB/Modals/Schema/RealEstate.Schema';
import {ObjectId} from 'mongodb';

export default async function(req, resp){
    try{
        const {id} = req.query;
        await MongoDBConnect();
        console.log(id)
        const specificRealEstate = await RealEstateModel.findOne({_id: new ObjectId(id)})
        if(!specificRealEstate){
            console.log("Collection Not found")
        }
        resp.send(specificRealEstate);
    }
    catch(error){
        console.log(error);
    }
    
}
