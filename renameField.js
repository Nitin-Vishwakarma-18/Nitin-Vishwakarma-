const mongoose = require("mongoose");
const Listing = require("./models/listing");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log("Connected to DB");
    await Listing.updateMany({}, { $rename: { "review": "reviews" } });
    console.log("Field renamed successfully!");
    mongoose.connection.close(); // Close the connection after updating
}).catch(err => {
    console.error("Error:", err);
});
