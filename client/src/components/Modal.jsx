import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useMeasurement } from "../context/MeasurementsContext";
import { useAuth } from "../context/AuthContext";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  const { createMeasurement } = useMeasurement();

  const { user } = useAuth();

  const onSubmit = handleSubmit((data) => {
    createMeasurement({ ...data, userId: user.id });
    onClose();
  });

  return ReactDOM.createPortal(
    <div className="modal__overlay">
      <div className="modal">
        <button onClick={onClose} className="modal__close">
          X
        </button>
        <div className="modal__content">
          <form onSubmit={onSubmit}>
            <caption>Create a new measurement</caption>
            <input
              type="number"
              name="year"
              placeholder="Year"
              {...register("year", { required: true })}
              autoFocus
            />
            {errors.year && <p className="input__error">Year is required</p>}
            <select
              name="variety"
              id="variety"
              {...register("variety", { required: true })}
            >
              <option value="malbec">Malbec</option>
              <option value="merlot">Merlot</option>
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="rose">Rose</option>
            </select>
            {errors.variety && (
              <p className="input__error">Variety is required</p>
            )}
            <select
              name="type"
              id="type"
              {...register("type", { required: true })}
            >
              <option value="dry">Dry</option>
              <option value="sweet">Sweet</option>
              <option value="medium-dry">Medium-Dry</option>
              <option value="medium-sweet">Medium-Sweet</option>
            </select>
            {errors.type && <p className="input__error">Type is required</p>}
            <input
              type="text"
              name="color"
              placeholder="Color"
              {...register("color", { required: true })}
            />
            {errors.color && <p className="input__error">Color is required</p>}
            <input
              type="number"
              name="temperature"
              placeholder="Temperature"
              {...register("temperature", { required: true })}
            />
            {errors.temperature && (
              <p className="input__error">Temperature is required</p>
            )}
            <input
              type="number"
              name="graduation"
              placeholder="Graduation"
              {...register("graduation", { required: true })}
            />
            {errors.graduation && (
              <p className="input__error">Graduation is required</p>
            )}
            <input
              type="number"
              name="ph"
              placeholder="PH"
              {...register("ph", { required: true })}
            />
            {errors.ph && <p className="input__error">PH is required</p>}
            <textarea
              name="observation"
              id="observation"
              cols="30"
              rows="10"
              placeholder="Any observation"
              {...register("observation")}
            ></textarea>
            <button type="submit" className="btn btn__primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
