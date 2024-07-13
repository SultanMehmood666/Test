import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import construction from '@/MongoDB/Modals/Schema/Const.Schema'
import { ObjectId } from 'mongodb';

export default async function(req, resp){
    try{
        const {id} = req.query;
        await MongoDBConnect();
        console.log(id)
        const specifiConst = await construction.findOne({_id: new ObjectId(id)})
        if(!specifiConst){
            console.log("Collection Not found")
        }
        resp.send(specifiConst);
    }
    catch(error){
        console.log(error);
    }
    
}
