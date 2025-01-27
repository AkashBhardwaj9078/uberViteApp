const mongoose = require('mongoose');

function db_connection() {
    mongoose.connect(process.env.DB_CONNECT, {



      

        
       

        
        


    }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.error("Database connection error:", err);
    });
}

module.exports = db_connection;
