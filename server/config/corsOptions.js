const allawedCors = require("./allowedCors");

const corsOptions = {
  origin: (origin, cb) => {
    if (allawedCors.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error("Not allowed by cors"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
