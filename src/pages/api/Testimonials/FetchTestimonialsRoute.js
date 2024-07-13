import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import TestimonialModel from '@/MongoDB/Modals/Schema/Testimonials.Schema';

export default async function(req, resp){
    try{
        await MongoDBConnect();
        const Testimonials = await TestimonialModel.find();
        return resp.send(Testimonials);
    }
    catch(error){
        console.error(`Error fetching Testimonials: ${error}`);
        resp.status(500).json({error: 'Internal Error'});
    }
} 
