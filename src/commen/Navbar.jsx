import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Assets/logo.png";

const Navbar = () => {

    const navData = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "About", path: "/about" },
        { id: 3, title: "Service", path: "/service" },
        { id: 4, title: "Contact", path: "/contact" }
    ];

    return (
        <>
            <div
                style={{
                    display: "flex",
                    padding: "0 20px",
                    background:"#eee"
                }}
            >
                <div
                    style={{
                        width: "60%"
                    }}
                >
                    <img src={Logo} alt="logo" width={80} />
                </div>
                <div
                    style={{
                        width: "40%"
                    }}
                >
                    <ul
                        style={{
                            display: "flex"
                        }}
                    >
                        {
                            navData.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    style={{
                                        listStyleType: "none",
                                        textDecoration: "none",
                                        color:"black",
                                        padding:"35px 20px",
                                        fontSize:"16px"
                                    }}
                                >
                                    <li>{item.title}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;