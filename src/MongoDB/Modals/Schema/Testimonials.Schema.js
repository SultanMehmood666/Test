import mongoose, {Schema} from "mongoose";

const TestimonialsSchema = new mongoose.Schema([
        {
            Title: String,
            Designation: String,
            Profile: [],
            Description: []

        }
])
const TestimonialModel = mongoose.models.Testimonials || mongoose.model("Testimonials", TestimonialsSchema);

export default TestimonialModel;