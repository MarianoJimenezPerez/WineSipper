import { connectDB } from "./../db.js";

export const getAllMeasurements = async (req, res) => {
  try {
    const connection = await connectDB();
    const selectAllQuery = "SELECT * FROM measurements";
    const [rows] = await connection.execute(selectAllQuery);

    connection.end();

    res.status(200).json({ measurements: rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener las measurements" });
  }
};
export const createMeasurement = async (req, res) => {
  const {
    year,
    variety,
    type,
    color,
    temperature,
    graduation,
    ph,
    observation,
    userId,
  } = req.body;

  try {
    const connection = await connectDB();

    const insertMeasurementQuery =
      "INSERT INTO measurements (year, variety, type, color, temperature, graduation, ph, observation, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const [result] = await connection.execute(insertMeasurementQuery, [
      year,
      variety,
      type,
      color,
      temperature,
      graduation,
      ph,
      observation,
      userId,
    ]);

    connection.end();

    res.status(201).json({
      message: "Measurement registrada con éxito",
      measurement: { result },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al registrar la measurement" });
  }
};
