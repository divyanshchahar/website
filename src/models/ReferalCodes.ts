import mongoose from "mongoose";

export interface ReferalCodeSchemaType extends mongoose.Document {
  code: string;
  createdAt: Date;
  assignedTo: string;
}

const ReferalCodeSchema = new mongoose.Schema<ReferalCodeSchemaType>({
  code: {
    type: String,
    unique: [true, "Referral Code must be unique"],
    required: [true, `fieled "code" is required to create this entry`],
  },

  createdAt: { type: Date, default: () => Date.now(), immutable: true },

  assignedTo: {
    type: String,
    default: "",
  },
});

export default mongoose.models.ReferalCodes ||
  mongoose.model<ReferalCodeSchemaType>("ReferalCodes", ReferalCodeSchema);
