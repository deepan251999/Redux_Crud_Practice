import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, updateItem } from '../../itemSlice';

const Home = () => {
    const [formData, setFormData] = useState({ id: '', name: '', age: '', phone: '' });
    const items = useSelector(state => state.items.items);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleAdd = () => {
        if (formData.name.trim() && formData.age && formData.phone) {
            dispatch(
                addItem({
                    id: Date.now(),
                    name: formData.name,
                    age: formData.age,
                    phone: formData.phone,
                })
            );
            setFormData({ id: '', name: '', age: '', phone: '' });
        }
    };

    const handleUpdate = () => {
        if (formData.name.trim() && formData.age && formData.phone && formData.id) {
            dispatch(
                updateItem({
                    id: formData.id,
                    name: formData.name,
                    age: formData.age,
                    phone: formData.phone,
                })
            );
            setFormData({ id: '', name: '', age: '', phone: '' });
        }
    };

    const handleDelete = id => {
        dispatch(deleteItem(id));
    };

    return (
        <div>
            <h2
                style={{
                    textAlign: "center",
                    padding: "20px 0"
                }}
            >
                CRUD Operation
            </h2>
            <form >
                <div>
                    <div>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name='age'
                            placeholder="Enter Age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name='phone'
                            placeholder="Enter Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={formData.id ? handleUpdate : handleAdd}>
                        {formData.id ? 'Update' : 'Add'}
                    </button>
                </div>
            </form>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <div>
                            <strong>Name:</strong> {item.name}, <strong>Age:</strong> {item.age}, <strong>Phone:</strong> {item.phone}
                        </div>
                        <button onClick={() => setFormData(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
