import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Bar.module.css';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";


const Bar = () => {
  return (
    <div className={styles.sideNav}>
        <div>
            <div className="d-flex w-100 flex-column align-items-center justify-content-center mt-3">
                <NavLink
                    to="/dashboard"
                    className="w-100 py-1"
                    style={({ isActive }) =>
                    isActive
                        ? { backgroundColor: "rgba(255,255,255,0.3)" }
                        : undefined}
                    >
                    <button className="border-0 p-2 bg-transparent w-100">
                        <AiIcons.AiFillHome color='white'/>
                        <p className="text-white" style={{ fontSize: "0.75rem" }}>
                            Dashboard
                        </p>
                    </button>
                </NavLink>
            </div>
            <div className="d-flex w-100 flex-column align-items-center justify-content-center">
                <NavLink
                    to="/cars"
                    className="w-100 py-1"
                    style={({ isActive }) =>
                    isActive
                        ? { backgroundColor: "rgba(255,255,255,0.3)" }
                        : undefined}>
                    <button className="border-0 p-2 bg-transparent w-100">
                        <FaIcons.FaTruck color='white'/>
                        <p className="text-white " style={{ fontSize: "0.75rem" }}>
                            Cars
                        </p>
                    </button>
                </NavLink>
            </div>
        </div> 
    </div>
  )
}

export default Bar
