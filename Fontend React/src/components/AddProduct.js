import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  // useEffect(() => {
  //   if (localStorage.getItem('user-key'))
  //     navigate('/add');
  // }, []);
  //const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");


 async function addProduct() {
    let items = { name, description, price, file }
    console.warn(items)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    let result = await fetch("http://127.0.0.1:8000/api/products",{
      method: "POST",
      body: formData,
    });

    alert("Data saved");
    
  }
  return (
    <>
      <Header />
      <div className='col-sm-6 offset-sm-3'>
        <h1>Add Product</h1>
        <input className='form-control' type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} ></input>
        <br />
        <input className='form-control' type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
        <br />
        <input className='form-control' type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}></input>
        <br />
        <input className='form-control' type="file" value={file} onChange={(e) => setFile(e.target.value)}></input>
        <br />
        <button className='form-control btn btn-primary' onClick={addProduct}>Add Product</button>
      </div>
    </>
  )
}

export default AddProduct