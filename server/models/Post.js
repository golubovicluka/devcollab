import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: 'string',
      required: true
    },
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    location: {
      type: 'string',
      required: true
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: []
    }
  },
  { timestamp: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
