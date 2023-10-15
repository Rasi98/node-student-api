import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required!"],
    },
    city: {
      type: String,
      require: false,
    },
    phone: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const studentModel = mongoose.model("Student", studentSchema);
export default studentModel;
