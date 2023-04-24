const catchAsyncError = require('../utils/catchAsyncError');
const User = require("../models/user")

//Creats the user with the Number of seats requested
const createUser = catchAsyncError(async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).send(user);
});

//return an array with Available seats as 1 else 0 for respective seat number
const getAvailableSeats = catchAsyncError(async (req, res) =>{
  const data = await User.find();
  var availableSeats = Array.from({length: 80}, (_, i) => 1);
  for( const userData of data){
    for( const i of userData.seatNumbers){
      availableSeats[i-1]=0
    }
  }
  res.status(200).send(availableSeats);
});

module.exports = {
  createUser,
  getAvailableSeats
};
