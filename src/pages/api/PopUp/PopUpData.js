import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import PopUpModelSchema from '@/MongoDB/Modals/Schema/PopUp.Schema';

export default async function(req, resp) {
    try {
        await MongoDBConnect();
        const popUpData = await PopUpModelSchema.find({});
        return resp.send(popUpData);
    } catch (error) {
        console.error(`Error fetching PopUps: ${error}`);
        resp.status(500).json({ error: 'Internal Error' });
    }
}
