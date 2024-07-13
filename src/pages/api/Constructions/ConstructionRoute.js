import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import Construction from '@/MongoDB/Modals/Schema/Const.Schema';

export default async function(req, resp){
    try{
        await MongoDBConnect();
        const constructions = await Construction.find();
        return resp.send(constructions);
    }
    catch(error){
        console.error(`Error fetching Constructions: ${error}`);
        resp.status(500).json({error: 'Internal Error'})
    }
} 