import React, { useEffect, useState } from "react";
import api from "../../api";
import BootstrapTable from "react-bootstrap-table-next";
import moment from "moment";
import styles from "./TableFeature.module.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FaSort } from "react-icons/fa";
// import { Dropdown } from "react-bootstrap";

const TableFeature = () => {
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(5); // Misalnya, ukuran halaman 10

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getOrder({ pageSize: 50 });
        console.log(response);
        if (response.status === 200) {
          // Jika respons sukses
          const orderData = response.data.orders;
          setTableData(orderData); // Mengatur data tabel dengan hasil respons
          console.log(orderData);
        } else {
          console.error("Gagal mengambil data getOrder");
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSizePerPageChange = (newSizePerPage) => {
    setSizePerPage(newSizePerPage);
    setPage(1);
  };

  function formatRupiah(angka) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(angka);
  }

  const formatDate = (date) => {
    return moment(date).format("DD MMMM YYYY");
  };

  const columns = [
    {
      dataField: "index",
      text: "No",
      sort: true,
      formatter: (cell, row, rowIndex) => rowIndex + 1,
    },
    {
      dataField: "User.email",
      text: (
        <span className="d-flex justify-content-between align-items-center">
          User Email
          <FaSort />
        </span>
      ),
      sort: true,
    },
    {
      dataField: "Car",
      text: (
        <span className="d-flex justify-content-between align-items-center">
          Car
          <FaSort />
        </span>
      ),
      sort: true,
      formatter: (cell) => {
        return cell ? cell : "car";
      },
    },
    {
      dataField: "start_rent_at",
      text: (
        <span className="d-flex justify-content-between align-items-center">
          Start Rent
          <FaSort />
        </span>
      ),
      sort: true,
      formatter: (cell) => formatDate(cell),
    },
    {
      dataField: "finish_rent_at",
      text: (
        <span className="d-flex justify-content-between align-items-center">
          Finish Rent
          <FaSort />
        </span>
      ),
      sort: true,
      formatter: (cell) => formatDate(cell),
    },
    {
      dataField: "total_price",
      text: (
        <span className="d-flex justify-content-between align-items-center">
          Price
          <FaSort />
        </span>
      ),
      sort: true,
      formatter: (cell, row) => formatRupiah(cell),
    },
    {
      dataField: "category",
      text: (
        <span className="d-flex justify-content-between align-items-center">
          Category
          <FaSort />
        </span>
      ),
      sort: true,
      formatter: (cell) => {
        return cell ? cell : "Category";
      },
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableDashboard}>Dashboard</div>
      <div className={styles.tablesListOrder}>
        <div className={styles.tablesIcon}></div>
        <div>List Order</div>
      </div>
      <BootstrapTable
        keyField="id"
        data={tableData}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory({
          page,
          sizePerPage,
          onPageChange: handlePageChange,
          onSizePerPageChange: handleSizePerPageChange,
          sizePerPageList: [
            { text: "5", value: 5 },
            { text: "10", value: 10 },
            { text: "15", value: 15 },
          ],
          alwaysShowAllBtns: true,
          // bootstrap4: true,
          // // sizePerPageRenderer: ({
          // //   options,
          // //   currSizePerPage,
          // //   onSizePerPageChange,
          // // }) => (
          // //   <div className="custom-size-per-page">
          // //     <Dropdown>
          // //       <Dropdown.Toggle variant="primary" id="dropdown-basic">
          // //         {currSizePerPage}
          // //       </Dropdown.Toggle>
          // //       <Dropdown.Menu className={styles.dropDownMenu}>
          // //         {options.map((option) => (
          // //           <Dropdown.Item
          // //             key={option.text}
          // //             onClick={() => onSizePerPageChange(option.value)}
          // //           >
          // //             {option.text}
          // //           </Dropdown.Item>
          // //         ))}
          // //       </Dropdown.Menu>
          // //     </Dropdown>
          // //   </div>
          // // ),
        })}
      />
    </div>
  );
};

export default TableFeature;
