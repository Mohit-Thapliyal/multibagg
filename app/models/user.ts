import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  date: Number,
  profilePic: String,
  bio: String,
});

const User = models.User || model("User", UserSchema);

export default User;
