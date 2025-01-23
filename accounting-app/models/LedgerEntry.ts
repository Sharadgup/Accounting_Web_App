import mongoose from "mongoose"

const LedgerEntrySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  debit: {
    type: Number,
    default: 0,
  },
  credit: {
    type: Number,
    default: 0,
  },
})

export default mongoose.models.LedgerEntry || mongoose.model("LedgerEntry", LedgerEntrySchema)

