import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomer, setFormData, setIscustomerUpdate } from '../redux/slice.js';

const CustomerView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const customerListData = useSelector((state) => state.customers.customers);

    const handleCustomerEdit = (customer) => {
        dispatch(setFormData(customer));
        dispatch(setIscustomerUpdate(true));
        navigate("/");
    };

    const handleCustomerDelete = (id) => {
        dispatch(deleteCustomer(id));
    };

    return (
        <>
            <table border="1" style={{ width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone No</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerListData.length === 0 ? (
                            <tr>
                                <td colSpan="4" style={{ textAlign: "center" }}>No Customers</td>
                            </tr>
                        ) : (
                            customerListData.map((customer) => (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.age}</td>
                                    <td>{customer.phone}</td>
                                    <td><button onClick={() => handleCustomerEdit(customer)}>Edit</button></td>
                                    <td><button onClick={() => handleCustomerDelete(customer.id)}>Delete</button></td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </>
    );
};

export default CustomerView;
