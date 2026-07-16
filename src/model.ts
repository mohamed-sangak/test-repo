import mongoose, { Document, Schema } from "mongoose";

export interface IField extends Document {
  name: string;
  label: string;
}

const mainSchema = new Schema<IField>(
  {
    name: { type: String, required: true, unique: true },
    label: { type: String, required: true },
  },
  { timestamps: true },
);

// Exporting as a named export
export const Field = mongoose.model<IField>("mainTable", mainSchema);
