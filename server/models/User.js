const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const walletSchema = new mongoose.Schema(
  {
    walletAddress: {
      type: String,
      default: "",
      validate: {
        validator: (v) => v === "" || /^0x[a-fA-F0-9]{40}$/.test(v),
        message: "Invalid Ethereum wallet address",
      },
    },
    chainId: {
      type: String,
      default: "",
    },
    networkName: {
      type: String,
      default: "",
    },
    balance: {
      type: String,
      default: "0",
    },
    signature: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nationality: {
    type: String,
    default: "",
  },
  dateOfBirth: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  fullName: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Prefer not to say"],
    required: true,
  },
  wallet: {
    type: walletSchema,
    default: () => ({}),
  },
  walletChangeTimestamp: {
    type: Date,
    default: Date.now,
  },
  profilePic: {
    type: String,
    default: "",
  },
  kycSignature: {
    type: String,
    unique: true,
    sparse: true,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

module.exports = mongoose.model("User", userSchema);
