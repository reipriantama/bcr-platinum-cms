import React from "react";
import { FaSearch } from "react-icons/fa";

const TableFeature = () => {
  return (
    <div>
      <div className="mb-3">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FaSearch />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Ketik nama/tipe mobil"
            style={{
              width: "175px",
              height: "36px",
              fontFamily: "rubik",
              fontSize: "12px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TableFeature;
