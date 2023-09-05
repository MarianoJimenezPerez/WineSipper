import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
  const { authToken } = req.cookies;
  if (!authToken)
    return res
      .status(401)
      .json({ message: "No se ha provisto de token. Autorización denegada" });

  jwt.verify(authToken, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token invalido" });

    req.user = decoded;
    next();
  });
};
