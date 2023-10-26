import React, { useEffect, useState } from "react";
import styles from "./EditCars.module.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FiUpload } from "react-icons/fi";
import api from "../../api";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setEditCarSuccess } from "../../store/AddNewCar";

const EditCars = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editCarData, setEditCarData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    createdAt: "",
    updatedAt: "",
  });
  const [selectedCategory, setSelectedCategory] = useState(
    editCarData.category
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const formatDate = (date) => {
    return moment(date).format("DD MMM YYYY");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCarById(id);
        const carData = response.data;
        console.log(response);
        setEditCarData(carData);
        console.log(carData);
      } catch (error) {
        console.log("gagal mengambil data", error);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditCarData({
      ...editCarData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setUploadSuccess(true);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    setEditCarData({
      ...editCarData,
      category: selectedCategory,
    });
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editCarData.name);
      formData.append("price", editCarData.price);
      formData.append("category", selectedCategory);
      formData.append("image", selectedImage);

      const response = await api.putCarById(id, formData);
      console.log("Data Mobil diubah", response);
      dispatch(setEditCarSuccess(true));
      navigate("/cars");
    } catch (error) {
      console.log("Gagal edit data", error);
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case "small":
        return "2-4 ";
      case "medium":
        return "4-6 ";
      case "large":
        return "6-8 ";
      default:
        return "Unknown";
    }
  };

  return (
    <div className={styles.container}>
      <h3 className="fw-bold">Edit Car</h3>
      {uploadSuccess && (
        <div
          className={`${styles.alertEdit} alert alert-success d-flex justify-content-center`}
          role="alert"
        >
          Foto berhasil diupload.
        </div>
      )}
      <Form>
        <div className="d-flex flex-column gap-3 bg-white p-4">
          <div className="row align-items-center">
            <label htmlFor="name" className="w-25">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`${styles.formEdit} w-50 border border-dark border-opacity-25 p-1 rounded`}
              value={editCarData ? editCarData.name : ""}
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
              className={`${styles.formEdit} w-50 border border-dark border-opacity-25 p-1 rounded`}
              value={editCarData ? editCarData.price || "" : ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="row align-items-center">
            <label htmlFor="image" className="w-25">
              Foto
            </label>
            <label
              htmlFor="image"
              className={`${styles.formEdit} d-flex justify-content-between w-50 border border-dark border-opacity-25 p-2 rounded`}
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
              name="category"
              className={`${styles.formEdit} w-50 border border-dark border-opacity-25 p-1 rounded`}
              style={{ color: "gray" }}
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="" hidden>
                {`${getCategoryLabel(editCarData.category)} orang`}
              </option>
              <option value="small">2 - 4 orang</option>
              <option value="medium">4 - 6 orang</option>
              <option value="large">6 - 8 orang</option>
            </select>
          </div>

          <div className="row align-items-center">
            <p className="w-25 ">Created at</p>
            <label htmlFor="created" className="w-25 align-items-center">
              {formatDate(editCarData.createdAt)}
            </label>
          </div>
          <div className="row align-items-center">
            <p className="w-25">Updated at</p>
            <label htmlFor="update" className="w-25 align-items-center">
              {formatDate(editCarData.updatedAt)}
            </label>
          </div>
          <div className="d-flex gap-3" style={{ bottom: "40px" }}>
            <Link to="/cars">
              <Button variant="danger">Cancel</Button>
            </Link>
            <Button variant="success" type="button" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditCars;
