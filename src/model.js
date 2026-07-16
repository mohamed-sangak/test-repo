import mongoose from 'mongoose'

const mainSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    label: { type: String, required: true },
  },
  { timestamps: true },
)


export const Field = mongoose.model('mainTable', mainSchema)
