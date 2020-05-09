import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: { type: String, default: '' },
  x: { type: Number, default: 150 },
  y: { type: Number, default: 100 },
  zIndex: { type: Number, default: 0 },
  text: { type: String, default: '' },
}, { toJSON: { virtuals: true } });

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
