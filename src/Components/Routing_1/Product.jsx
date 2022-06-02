import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const {id} = useParams();
  const [product,setProduct] =useState({});
  const [totalProduct, setTotalProduct] = useState([]);
  let flag = false;

  console.log(id);
  useEffect(()=>{
    let url = `http://localhost:8080/products/${id}`
  const getData = async(url)=>{
      try {
        let res = await axios.get(url);
        let data = res.data;
            // console.log(data)
        setProduct(data);
      } catch (error) {
        console.log(error)
      }
      
  }
  getData(url);

  fetch("http://localhost:8080/products")
  .then((r)=> r.json())
  .then((d)=> setTotalProduct(d));
  
  
  },[id]);

  for(let i=0; i<totalProduct.length; i++){
    if(id==totalProduct[i].id){
      flag = true;
    }
}

  

  return (
    
    <div>
      
      {flag ? (<> <h1>{product.name}</h1>
      <h2>{product.price}</h2> </>) : 
      
      (<h1>ERROR 404</h1>)}
     
    </div>
  )
   

  
}

export default Product