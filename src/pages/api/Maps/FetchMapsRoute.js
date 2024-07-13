import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import MapsData from '@/MongoDB/Modals/Schema/Maps.Schema';

export default async function(req, resp){
        try{
            await MongoDBConnect();
            const Maps = await MapsData.find();
            return resp.send(Maps);
        }catch(error){
            console.log(error)
        }
}
