const asyncHandler = require("express-async-handler");
const DataVal = require("../Models/DataModel");

const sendData = asyncHandler(async (req, res) => {
     console.log("Send data is called")
    const { username, email, data } = req.body;
  
    if (!username || !email || !data) {
      res.status(400);
      throw new Error("Please Enter all the Feilds");
    }
    
    const user = await DataVal.create({
      username,
      email,
      data,
    });   

    
    console.log("data is succesfully get")
   res.send(user);
  
  });

  module.exports = { sendData };