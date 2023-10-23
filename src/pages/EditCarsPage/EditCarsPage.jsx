import React from "react";
import EditCars from "../../components/EditCars/EditCars";
import { useParams } from "react-router";

const EditCarsPage = () => {
  const { carId } = useParams();
  console.log(carId);
  return (
    <div>
      <EditCars id={carId} />
    </div>
  );
};

export default EditCarsPage;
