import React from 'react';

const ProductLis = () => {
  return (
    <div className="flex justify-center">
      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell text-left ">NO</div>
            <div className="table-cell text-left ">Title</div>
            <div className="table-cell text-left ">Price</div>
            <div className="table-cell text-left ">Action</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell ">1</div>
            <div className="table-cell ">Title</div>
            <div className="table-cell ">10000</div>
            <div className="table-cell ">
              <button className="transition ease-in-out bg-blue-300  hover:bg-blue-500  text-black hover:text-white  px-5 py-2  rounded-[12px]">Edit</button>
              <button className="ml-[5px] transition ease-in-out bg-red-300  hover:bg-red-500  text-black hover:text-white px-3 py-2 rounded-[12px]">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLis;
