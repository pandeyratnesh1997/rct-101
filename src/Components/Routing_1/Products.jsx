import axios from 'axios'
import React, {useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    const [prodData,setprodData] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
        let res = await axios.get("http://localhost:8080/products");
        let data = res.data;
        // console.log(data)
        setprodData(data);
    }
    getData();

  },[])
  
    return (
    <div>Products :
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Sl.no</td>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>More Details</td>
                    </tr>
                </thead>
                <tbody>
                    {prodData.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><Link to={`/products/${item.id}`}>More details</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Products