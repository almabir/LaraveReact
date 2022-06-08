import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ProductList() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        let result = await fetch("http://127.0.0.1:8000/api/products");
        setData(await result.json());
    }
    useEffect(() => {
        fetchData();
    }, []);
    async function deleteItem(id){
        let result = await fetch("http://127.0.0.1:8000/api/products/"+id,{
            method: "DELETE"
        });
        result = await result.json();
        fetchData();
    }
    return (
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3'>

                <h1>Product List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Operation</th>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            data.map((item) =>
                                <tr>
                                    <th>{item.id}</th>
                                    <th>{item.name}</th>
                                    <th>{item.description}</th>
                                    <th>{item.price}</th>
                                    <th>
                                        <span onClick={()=>deleteItem(item.id)} className='btn btn-danger'> Delete </span>
                                        <Link to={"update/"+item.id}>
                                        <span  className='btn btn-primary' style={{marginLeft: "5px"}}> Update </span>
                                        </Link>
                                    </th>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ProductList