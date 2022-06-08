import React, { useState } from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function SearchProduct() {
    const [data, setData] = useState([]);
    async function search(key){
        console.warn(key);
        let result = await fetch("http://127.0.0.1:8000/api/search/"+key);
        result = await result.json();
        setData(result);
    }

  return (
    <div>
        <Header/>
        <div className='col-sm-6 offset-sm-3'>
        <h1>Search Product</h1>
        <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Product" ></input>
        <br/>
        <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            

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
                                   

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
        </div>
    </div>
  )
}

export default SearchProduct