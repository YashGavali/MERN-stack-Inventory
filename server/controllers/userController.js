const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncError');
const User = require('../models/UserModel');
const sendToken = require('../utils/jwtToken');

//Register User

const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'Sample_ID',
      url: 'profile_PIC',
    },
  });

  //JWT TOKEN

  sendToken(user, 201, res);
});

// Login User

const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler('Please enter Email and Password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }

  sendToken(user, 201, res);
});

// Logout User

const logoutUser = catchAsyncErrors((req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    sucess: true,
    message: 'Logged out succesfully',
  });
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
