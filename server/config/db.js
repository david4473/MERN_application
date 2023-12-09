const mongoose = require("mongoose");
const db =
  "mongodb+srv://omotayodavid9:3TrGnL8ZSEHC1XLZ@cluster0.uavfsn9.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
