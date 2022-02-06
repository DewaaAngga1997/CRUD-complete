import React from 'react';

const AddProduct = () => {
  return (
    <div className="max-w-lg mx-auto m-[50px]">
      <form>
        <div className="mb-6">
          <label className="text-xl font-medium text-gray-900 block mb-2">Title</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="masukan judul"></input>
        </div>
        <div className="mb-6">
          <label className="text-xl font-medium text-gray-900 block mb-2">Price</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="masukan price"></input>
        </div>
        <div>
          <button className="text-black hover:text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
