const mongoose = require("mongoose"); 

// Connect to MongoDB: 
mongoose.connect("mongodb://localhost:27019/netomation", function(err) {
    console.log("We're connected to MongoDB.");
})

module.exports={
    mongoose
}
