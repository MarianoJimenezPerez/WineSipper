import { connectDB } from "../db.js";
import { decryptPassword, hashPassword } from "../libs/hashPassword.js";
import { createAccessToken } from "../libs/jwt.js";

export const registry = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const connection = await connectDB();

    const checkUserQuery =
      "SELECT COUNT(*) AS count FROM users WHERE username = ?";
    const [rows] = await connection.execute(checkUserQuery, [username]);

    if (rows[0].count > 0) {
      connection.end();
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    const hashedPassword = await hashPassword(password);

    const insertUserQuery =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

    const [result] = await connection.execute(insertUserQuery, [
      username,
      email,
      hashedPassword,
    ]);

    connection.end();

    const userId = result.insertId;

    const token = await createAccessToken({ id: userId });

    res.cookie("authToken", token);
    res.status(201).json({
      message: "Usuario registrado con éxito",
      user: { id: userId, username, email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const connection = await connectDB();
    const loginUserQuery = "SELECT * FROM users WHERE email = ?";
    const [rows] = await connection.execute(loginUserQuery, [email]);

    connection.end();

    if (rows.length === 0) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const hashedPassword = rows[0].password;
    const isPasswordValid = await decryptPassword(password, hashedPassword);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const user = {
      id: rows[0].id,
      username: rows[0].username,
      email: rows[0].email,
    };

    const token = await createAccessToken({ id: user.id });
    res.cookie("authToken", token);
    res.status(200).json({
      message: "Inicio de sesión exitoso",
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("authToken");

    res.status(200).json({ message: "Cierre de sesión exitoso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al cerrar sesión" });
  }
};

export const profile = async (req, res) => {
  try {
    const userId = req.user.id;

    const connection = await connectDB();
    const getUserQuery = "SELECT id FROM users WHERE id = ?";
    const [rows] = await connection.execute(getUserQuery, [userId]);
    connection.end();

    if (rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const user = {
      id: rows[0].id,
      username: rows[0].username,
      email: rows[0].email,
    };

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener profile" });
  }
};
