import mongoose from "mongoose";

export interface InquiriesSchemaType extends mongoose.Document {
  name: string;
  email: string;
  contactNumber: string;
  projectDetails: string;
}

const InquiriesSchema = new mongoose.Schema<InquiriesSchemaType>({
  name: {
    type: String,
    required: [true, `field "name" is required`],
  },
  email: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: [true, `field "contact number" is required`],
  },
  projectDetails: {
    type: String,
    required: [true, `field "project details" is required`],
  },
});

export default mongoose.models.Inquiries ||
  mongoose.model<InquiriesSchemaType>("Inquiries", InquiriesSchema);
