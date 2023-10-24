import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CarList.module.css";
import { FiUsers, FiEdit, FiPlus } from "react-icons/fi";
import { AiOutlineClockCircle, AiOutlineDelete } from "react-icons/ai";
import api from "../../api";
import moment from "moment";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

const CarList = ({ search }) => {
  const [cars, setCars] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State untuk menampilkan modal
  // const [selectedCarToDelete, setSelectedCarToDelete] = useState(null); // State untuk mobil yang akan dihapus
  const [carToDeleteId, setCarToDeleteId] = useState(null);
  const [deleteSuccess, setdeleteSuccess] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCars({
          name: search,
          category: selectedCategory,
        });
        console.log(search);
        if (response.status === 200) {
          const carsData = response.data.cars;
          console.log(response.data);
          setCars(carsData);
          console.log(carsData);
        } else {
          console.error("Gagal mengambil data getCars");
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };
    fetchData();
  }, [search, selectedCategory]);

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

  const formatDate = (date) => {
    return moment(date).format("DD MMM YYYY");
  };

  function formatRupiah(angka) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(angka);
  }

  const handleShowDeleteModal = (carId) => {
    setCarToDeleteId(carId);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setCarToDeleteId(null);
    setShowDeleteModal(false);
  };

  const handleClickEdit = (e, car) => {
    e.preventDefault();
    navigate(`/edit/${car.id}`);
    console.log(car);
  };

<<<<<<< HEAD
  const handleDeleteCar = async () => {
    try {
      if (carToDeleteId) {
        const response = await api.deleteCarById(carToDeleteId);
        console.log("Data Mobil dihapus", response);
        // Tutup modal setelah penghapusan berhasil
        handleCloseDeleteModal();
        setdeleteSuccess(true);
      }
    } catch (error) {
      console.error("Gagal menghapus data", error);
    }
  };

=======
>>>>>>> 828cc69b6d54fb622c5dae895469d9f742d5088d
  return (
    <div className={styles.container}>
      {deleteSuccess && (
        <div className="alert alert-success" role="alert">
          Data berhasil dihapus!
        </div>
      )}
      <div className={styles.titleWrap}>
        <div className={styles.listCarTitle}>List Car</div>
        <Button variant="primary">
          <FiPlus /> Add New Car
        </Button>
      </div>
      <div className={styles.listCarButton}>
        <Button
          variant={!selectedCategory ? "primary" : "outline-primary"}
          onClick={() => {
            setSelectedCategory(null);
          }}
        >
          All
        </Button>
        <Button
          variant={selectedCategory === "small" ? "primary" : "outline-primary"}
          onClick={() => {
            setSelectedCategory("small");
          }}
        >
          2-4 Orang
        </Button>
        <Button
          variant={
            selectedCategory === "medium" ? "primary" : "outline-primary"
          }
          onClick={() => {
            setSelectedCategory("medium");
          }}
        >
          4-6 Orang
        </Button>
        <Button
          variant={selectedCategory === "large" ? "primary" : "outline-primary"}
          onClick={() => {
            setSelectedCategory("large");
          }}
        >
          6-8 Orang
        </Button>
      </div>
      <div className={`${styles.cardWrap} row`}>
        {cars.map((car) => (
          <Card
            key={car.id}
            style={{
              width: "20rem",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
              padding: "24px",
            }}
          >
            <div style={{ height: "222px" }}>
              <Card.Img variant="top" src={car.image} style={{}} />
            </div>
            <Card.Body>
              <Card.Text>{car.name}</Card.Text>
              <Card.Title>{`${formatRupiah(car.price)} / hari`}</Card.Title>
              <Card.Text>
                {" "}
                <FiUsers /> {`${getCategoryLabel(car.category)} people`}
              </Card.Text>
              <Card.Text>
                {" "}
                <AiOutlineClockCircle />{" "}
                {`Updated at ${formatDate(car.updatedAt)}`}
              </Card.Text>
              <div className={styles.cardButtonContainer}>
                <Button
                  variant="outline-danger"
                  className={styles.cardButton}
                  onClick={() => handleShowDeleteModal(car.id)}
                >
                  <AiOutlineDelete /> Delete
                </Button>
                <Button
                  onClick={(e) => handleClickEdit(e, car)}
                  variant="outline-success"
                  className={styles.cardButton}
                >
                  <FiEdit /> Edit
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Modal
        show={showDeleteModal}
        onHide={handleCloseDeleteModal}
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="justify-content-center"
          style={{ padding: "24px 32px" }}
        >
          <Modal.Title>
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/Assets/CarsPage/img-BeepBeep.png`}
              alt="imageCar"
              style={{ marginLeft: "50px" }}
            />
            <div>
              Menghapus Data Mobil{""} {carToDeleteId && carToDeleteId.name}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontFamily: "Arial", fontSize: "14px" }}>
          Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
          menghapus?
        </Modal.Body>
        <Modal.Footer className="justify-content-md-center">
          <Button variant="danger" onClick={handleDeleteCar}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CarList;
