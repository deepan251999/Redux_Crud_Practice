import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCustomer, updateCustomer, setFormData } from '../redux/slice.js';

const CustomerAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formData = useSelector((state) => state.customers.formData);
    const iscustomerUpdate = useSelector((state)=> state.customers.iscustomerUpdate)

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        dispatch(setFormData({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() && formData.age && formData.phone) {
            dispatch(addCustomer({ ...formData, id: Date.now() }));
            dispatch(setFormData({ name: '', age: '', phone: '' }));  
            navigate("/view");
        }
    };

    const handleUpdate = () => {
        if (formData.name.trim() && formData.age && formData.phone) {
            dispatch(updateCustomer(formData));
            dispatch(setFormData({ name: '', age: '', phone: '' }));  
            navigate("/view");
        }
    };

    useEffect(() => {
        if (iscustomerUpdate) {
        }
    }, [iscustomerUpdate, dispatch]);

    return (
        <>
            <h1> Redux Crud Operation </h1>
            <div className='container'>
                <div className="form_container">
                    <div className="label_container">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder='Name'
                            name='name'
                            value={formData.name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="label_container">
                        <label htmlFor="">Age</label>
                        <input
                            type="text"
                            placeholder='Age'
                            name='age'
                            value={formData.age}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="label_container">
                        <label htmlFor="">Phone No</label>
                        <input
                            type="text"
                            placeholder='Phone No'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="label_container">
                        {
                            iscustomerUpdate ?
                                <button onClick={handleUpdate}>Update</button>
                                :
                                <button onClick={handleSubmit}>Submit</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerAdd;
