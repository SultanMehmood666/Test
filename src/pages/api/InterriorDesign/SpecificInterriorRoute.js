import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import Interrior from '@/MongoDB/Modals/Schema/Interrior.Schema';
import {ObjectId} from 'mongodb';

export default async function(req, resp){
    try{
        const {id} = req.query;
        await MongoDBConnect()
        console.log(id)
        const specificInterrior = await Interrior.findOne({_id: new ObjectId(id)})
        if(!specificInterrior){
            console.log("Collection Not found")
        }
        resp.send(specificInterrior);
    }
    catch(error){
        console.log(error);
    }
}
