import mongoose from "mongoose";

const connect = async () => {
  try {
    if (mongoose.connection.readyState !== 0) {
      console.log("MongoDB connection is already established.");
      return;
    }
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check the connection status after connecting
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB connection successfully established.");
    } else {
      throw new Error("Failed to establish MongoDB connection.");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

export default connect;
