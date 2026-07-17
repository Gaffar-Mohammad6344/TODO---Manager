import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // Security: hide by default
  sector: { type: String, default: "Engineering" },
  rank: { type: String, default: "Alpha Node" },
  avatar: { type: String, default: "" }
}, { timestamps: true });

// --- FIXED PRE-SAVE HOOK ---
userSchema.pre("save", async function () {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return;

  // Hash with cost factor of 12
  this.password = await bcrypt.hash(this.password, 12);
});

// --- PASSWORD VERIFICATION METHOD ---
userSchema.methods.comparePassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export default mongoose.model("User", userSchema);