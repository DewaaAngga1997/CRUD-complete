import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductLis = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setProduct(response.data);
  };

  return (
    <div className="m-[50px]">
      <Link to="/add" className="text-black hover:text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center">
        Add Product
      </Link>
      <table className="mt-5 table-auto w-full border-2 to-black">
        <thead className="text-xl font-semibold uppercase bg-blue-50">
          <tr>
            <th className="p-2 whitespace-nowrap">No</th>
            <th className="p-2 whitespace-nowrap">Title</th>
            <th className="p-2 whitespace-nowrap">Price</th>
            <th className="p-2 whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={product.id}>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">{index + 1}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">{product.title}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">{product.price}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">
                  <button className=" bg-blue-300  hover:bg-blue-500  text-black hover:text-white  p-2 px-5 rounded-full">Edit</button>
                  <button className=" bg-red-300  hover:bg-red-500  text-black hover:text-white p-2 px-5 rounded-full">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductLis;
