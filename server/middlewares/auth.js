import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {

  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: `${error.message} .Token is most likely invalid` });
  }
};