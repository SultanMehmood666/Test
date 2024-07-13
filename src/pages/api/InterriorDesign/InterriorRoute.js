import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import Interrior from '@/MongoDB/Modals/Schema/Interrior.Schema';

export default async function(req, resp){
    try{
        await MongoDBConnect();
        const InterriorDesign = await Interrior.find();
        return resp.send(InterriorDesign);
    }
    catch(error){
        console.error(`Error fetching Real Estate: ${error}`);
        resp.status(500).json({error: 'Internal Error'});
    }
} 
