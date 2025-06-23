import mongoose from "mongoose";

export interface UsersSchemaType extends mongoose.Document {
  name: string;
  email: string;
  pan: string;
  refCode: string;
  createdAt: Date;
  updatedAt: Date;
}

const UsersSchema = new mongoose.Schema<UsersSchemaType>({
  name: {
    type: String,
    required: [true, "Please provide a name for the user"],
  },

  email: {
    type: String,
    required: [
      true,
      "Please providen an email address, user cannot be created without an email address",
    ],
    unique: [
      true,
      "Sorry cannot be registered because this email is already in use",
    ],
  },

  pan: {
    type: String,
    unique: [
      true,
      "This PAN Number is already regitered, please provide another pan number",
    ],
  },

  refCode: {
    type: String,
    unique: [
      true,
      "The referal code assigned to this user is already assigned to another user",
    ],
  },

  createdAt: {
    type: Date,
    default: () => Date.now(),
    required: [true, "User cannot be created without date(createdAt field)"],
    immutable: true,
  },

  updatedAt: {
    type: Date,
    default: () => Date.now(),
    required: [true, "updatedAt is required "],
  },
});

export default mongoose.models.Users ||
  mongoose.model<UsersSchemaType>("Users", UsersSchema);
