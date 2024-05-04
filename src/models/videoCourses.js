import mongoose from "mongoose";

const AddVideoCourseSchema = new mongoose.Schema({
  courseTitle: {
    id: number,
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  courseOrder: {
    type: number,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignmentQuestion1: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  assignmentQuestion2: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  assignmentQuestion3: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  tablature: {
    type: image,
    required: true,
  },
  videoThumbnail: {
    type: String,
    required: true,
  },
  audio: {
    type: audio,
    required: true,
  },
  loop: {
    type: audio,
    required: true,
  },
  package: {
    type: string,
    required: true,
    default: 'free',
  },
});

export default mongoose.model("addVideoCourse", AddVideoCourseSchema);
