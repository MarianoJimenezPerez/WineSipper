import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useMeasurement } from "../context/MeasurementsContext";

const Measurements = () => {
  const { measurements, getMeasurements, addingMeasurement } = useMeasurement();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!addingMeasurement) {
      getMeasurements();
    }
  }, [addingMeasurement]);

  return (
    <>
      <Header />
      <main className="measurements">
        <div className="container">
          <section className="measurements__wrapper">
            <h1>Some feedbacks</h1>
            <div className="create">
              <button
                className="btn btn__primary"
                onClick={openModal}
                disabled={addingMeasurement}
              >
                Create
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Year</th>
                  <th>Variety</th>
                  <th>Type</th>
                  <th>Color</th>
                  <th>Temperature</th>
                  <th>Graduation</th>
                  <th>PH</th>
                  <th>Observation</th>
                </tr>
              </thead>
              <tbody>
                {measurements &&
                  measurements.length > 0 &&
                  measurements.map((measurement) => (
                    <tr>
                      <td>{measurement.userId}</td>
                      <td>{measurement.year}</td>
                      <td>{measurement.variety}</td>
                      <td>{measurement.type}</td>
                      <td>{measurement.color}</td>
                      <td>{measurement.temperature}</td>
                      <td>{measurement.graduation}</td>
                      <td>{measurement.ph}</td>
                      <td>{measurement.observation || "-"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Measurements;
