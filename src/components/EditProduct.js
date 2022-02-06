import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
//use param untuk menangkap element id
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  //membuat var berfungsi menangkap parameter
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/products/${id}`, {
      title: title,
      price: price,
    });
    navigate('/');
  };

  useEffect(() => {
    getProductById();
  }, []);

  //untuk menangkap elemen id yang akan di edit
  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  return (
    <div className="max-w-lg mx-auto m-[50px]">
      <form onSubmit={updateProduct}>
        <div className="mb-6">
          <label className="text-xl font-medium text-gray-900 block mb-2">Title</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="masukan judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="mb-6">
          <label className="text-xl font-medium text-gray-900 block mb-2">Price</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="masukan price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div>
          <button className="text-black hover:text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center">Update</button>
          <Link to="/" className="ml-2 text-black hover:text-white bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
