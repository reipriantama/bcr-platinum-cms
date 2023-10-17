import React from "react";
import styles from "./EditCars.module.css"
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const EditCars = () => {
  return (
    <div className={styles.container}>
      <h3 className="fw-bold">Edit Car</h3>
      <Form>
        <div className="d-flex flex-column gap-3 bg-white p-4">
          <div className="row align-items-center">
            <label htmlFor="name" className="w-25">
              Nama
            </label>
            <input
              type="text"
              id="name"
              placeholder="Input Nama/Tipe Mobil"
              className="w-50 border border-dark border-opacity-25 p-1 rounded"              
            />
          </div>
          <div className="row align-items-center">
            <label htmlFor="price" className="w-25">
              Harga
            </label>
            <input
              type="text"
              id="price"                  
              placeholder="Input Harga Sewa Mobil"
              className="w-50 border border-dark border-opacity-25 p-1 rounded"                 
            />
          </div>
          <div className="row align-items-center">
            <label htmlFor="image" className="w-25">
              Foto
            </label>
            <label
              htmlFor="image"
              className="d-flex justify-content-between w-50 border border-dark border-opacity-25 p-2 rounded"
            >
              <input
                type="file"
                id="image"
                className="d-none"
              />
            </label>
          </div>
          <div className="row align-items-center">
            <label htmlFor="category" className="w-25">
              Kategori
            </label>
              <select
                id="category"
                className="w-50 border border-dark border-opacity-25 p-1 rounded"
                style={{ color: "gray" }}
              >
                <option value="" hidden>
                  Pilih Kategori Mobil
                </option>
                <option value="small">2 - 4 orang</option>
                <option value="medium">4 - 6 orang</option>
                <option value="large">6 - 8 orang</option>
                </select>
          </div>
          <div className="row align-items-center">
            <p className="w-25">Created at</p>
          </div>
          <div className="row align-items-center">
            <p className="w-25">Updated at</p>
          </div>
        </div>

        <div
          className="d-flex position-absolute gap-3"
          style={{ bottom: "40px" }}
        >
          <Link>
            <Button variant="danger">
              Cancel
            </Button>
          </Link>
          <Button
            variant="success"
            type="submit"
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditCars;
