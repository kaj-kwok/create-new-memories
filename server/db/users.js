import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    require: true
  },
  name: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

export default User;