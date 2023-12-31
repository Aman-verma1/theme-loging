const mongoose = require("mongoose");
const url = url

const Connection = {
  useNewUrlParser: true,
};

mongoose
  .connect(url, Connection)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("error in database connection");
  });
  

module.exports = Connection;

// const mysql = require('mysql');


// // Connecting to database
// connection.connect(function (err) {
//   if (err) {
//       console.log("Error in the connection")
//       console.log(err)
//   }
//   else {
//       console.log(`Database Connected`)
//       connection.query(`SHOW DATABASES`,
//           function (err, result) {
//               if (err)
//                   console.log(`Error executing the query - ${err}`)
//               else
//                   console.log("Result: ", result)
//           });
//         }
// })

// module.exports = connection;
