import mongoose from "mongoose";

const connect = async () => {
  try {
    // Check if there is an existing connection
    if (mongoose.connection.readyState !== 0) {
      console.log("MongoDB connection is already established.");
      return;
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if the connection is successfully established
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

