import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  description: String,
  dueDate: Date,
  completed: Boolean,
  repeatFrequency: String,
  userId: mongoose.Schema.Types.ObjectId,
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
