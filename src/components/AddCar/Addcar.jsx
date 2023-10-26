import React from "react";
import styles from "./Addcar.module.css";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import api from "../../api";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setAddCarSuccess } from "../../store/AddNewCar";

const Addcar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addNewCarData, setaddNewCarData] = useState({
    name: "",
    category: "",
    price: 0,
    image: "",
    createdAt: moment().format("YYYY-MM-DDTHH:mm:ss"),
    updateAt: moment().format("YYYY-MM-DDTHH:mm:ss"),
  });
  const [selectedCategory, setSelectedCategory] = useState(
    addNewCarData.category
  );
  const [selectedImage, setSelectedImage] = useState();
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleSaveData = async (e) => {
    try {
      const formData = new FormData();
      formData.append("name", addNewCarData.name);
      formData.append("price", addNewCarData.price);
      formData.append("category", selectedCategory);
      formData.append("image", selectedImage);

      const response = await api.addNewCar(formData);
      console.log("Data Mobil ditambahkan", response);
      dispatch(setAddCarSuccess(true));
      navigate("/cars");
    } catch (error) {
      console.log("Gagal menambahkan data", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setaddNewCarData({
      ...addNewCarData,
      [name]: name === "price" ? parseFloat(value) : value,
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setUploadSuccess(true);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    setaddNewCarData({
      ...addNewCarData,
      category: selectedCategory,
    });
  };

  return (
    <div className={styles.container}>
      <div className="d-flex flex-column p-4 gap-4">
        <h3 className="fw-bold">Add New Car</h3>
        {uploadSuccess && (
          <div
            className="alert alert-success d-flex justify-content-center"
            role="alert"
          >
            Foto berhasil diupload.
          </div>
        )}
        <Form>
          <div className="d-flex flex-column gap-3 bg-white p-4">
            <div className="row align-items-center">
              <label htmlFor="name" className="w-25">
                Nama/Tipe Mobil
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Input Nama/Tipe Mobil"
                className={`${styles.formAdd} w-50 border border-dark border-opacity-25 p-1 rounded`}
                onChange={handleInputChange}
              />
            </div>
            <div className="row align-items-center">
              <label htmlFor="price" className="w-25">
                Harga
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Input Harga Sewa Mobil"
                className={`${styles.formAdd} w-50 border border-dark border-opacity-25 p-1 rounded`}
                onChange={handleInputChange}
              />
            </div>
            <div className="row align-items-center">
              <label htmlFor="image" className="w-25">
                Foto
              </label>
              <label
                htmlFor="image"
                className={`${styles.formAdd} d-flex justify-content-between w-50 border border-dark border-opacity-25 p-1 rounded`}
              >
                Upload Foto Mobil <FiUpload />
                <input
                  type="file"
                  id="image"
                  className="d-none"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="row align-items-center">
              <label htmlFor="category" className="w-25">
                Kategori
              </label>
              <select
                id="category"
                className={`${styles.formAdd} w-50 border border-dark border-opacity-25 p-1 rounded`}
                style={{ color: "gray" }}
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="" hidden>
                  Pilih Kategori Mobil
                </option>
                <option value="small">2 - 4 orang</option>
                <option value="medium">4 - 6 orang</option>
                <option value="large">6 - 8 orang</option>
              </select>
            </div>
            <div className="row">
              <p className="w-25">Created at</p>
              <label
                htmlFor="created"
                className="w-25 align-items-center"
              ></label>
            </div>
            <div className="row">
              <p className="w-25">Updated at</p>
              <label
                htmlFor="update"
                className="w-25 align-items-center"
              ></label>
            </div>
            <div className="d-flex gap-3" style={{ bottom: "40px" }}>
              <Link to="/cars">
                <Button variant="danger">Cancel</Button>
              </Link>
              <Button variant="success" type="button" onClick={handleSaveData}>
                Save
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Addcar;
