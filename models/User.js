const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: false },
    isAdmin: { type: Boolean, default: true },
    isAgent: { type: Boolean, default: false },
    skills: { type: Array, default: false },
    profile: {
        type: String,
        required: true,
        default: "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png"
    }


}, { timestamps: true }

);
module.exports = mongoose.model("User", UserSchema);
