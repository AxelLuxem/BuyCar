import jwt from "jsonwebtoken";

export const generateToken = (email) => {
  return jwt.sign({ data: email }, process.env.SECRET_KEY, {
    expiresIn: "10m",
  });
};

export const checkAuth = (req, res, next) => {
  const token = req.headers.authorization.replace(
    "Bearer ",
    ""
  );

  try {
    const response = jwt.verify(
      token,
      process.env.SECRET_KEY
    );

    if (response?.data) {
      const data = jwt.decode(token);
      res.locals.email = data.data;
      next();
    } else if (response?.message) {
      res.status(403).send({ message: response?.message });
    } else {
      res.status(403).send({ message: "Error" });
    }
  } catch (error) {
    res.status(403).send({ message: "invalid token" });
  }
};
