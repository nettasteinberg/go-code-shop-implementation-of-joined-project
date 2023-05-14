import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useParams, useRoutes } from 'react-router-dom'
import "./SingleProductPage.css";
import { MyContext } from '../../MyContext';

const SingleProductPage = () => {
  const params = useParams();
  // const [singleProduct, setSingleProduct] = useState({});
  // const [currentId, setCurrentId] = useState(-1);

  // useEffect(() => {
  //   fetchSingleProduct(params.id);
  // }, [])

  // const [location, setLocation] = useState(useLocation());
  const location = useLocation();
  // const [prevLocation, setPrevLocation] = useState("");
  // const location = useLocation();
  console.log("location", location)
  // const [previousRoute, setPreviousRoute] = useState(null);
  // const [currentRoute, setCurrentRoute] = useState(null);

  

  // const fetchSingleProduct = async (id) => {
  //   const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  //   const data = await response.json();
  //   console.log(data.id, data.price);
  //   setSingleProduct(data);
  //   setCurrentId(data.id);
  // }

  const {products} = useContext(MyContext);
  // const productsCopy = useRef(products);
  // console.log("productsCopy", productsCopy);
  console.log("location", location);
  console.log("products", products);

  let singleProduct = products.find(p => {console.log(p.id, p.id === parseInt(params.id)); return p.id === parseInt(params.id)});



  // useEffect(() => {
  //   console.log("the location changed")
  //   console.log(productsCopy.current, products)
  //   singleProduct = productsCopy.current.find(p => {/*console.log("p.id",p.id, "p.id === parseInt(params.id)", p.id === parseInt(params.id));*/ return p.id === parseInt(params.id)});
  // }, [location, useLocation, params]);


  // console.log("productsCopy", productsCopy);

  useEffect(() => {
    console.log("params changed");
    singleProduct = products/*Copy.current*/.find(p => {/*console.log("p.id",p.id, "p.id === parseInt(params.id)", p.id === parseInt(params.id));*/ return p.id === parseInt(params.id)});
  }, [params]);

  return (
    <div>
      {/* {console.log(singleProduct, productsCopy)} */}
      {singleProduct && <div className="product-card">
        <div className="product-image">
          <img src={singleProduct.image} alt={singleProduct.title}/>
        </div>
        <div className="product-info">
          <h5>{singleProduct.title}</h5>
          {/*singleProduct.id === currentId  && */<h6>{singleProduct.price}$</h6>}
        </div>
      </div>}
    </div>
  )
}

export default SingleProductPage