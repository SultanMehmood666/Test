import mongoose, {Schema} from 'mongoose';

const PopUpSchema = new mongoose.Schema([
    {
        PopUp: Boolean,
        Image: [],
        Content: String,
    }
])

const PopUpModelSchema = mongoose.models.PopUp || mongoose.model("PopUp", PopUpSchema);
export default PopUpModelSchema;