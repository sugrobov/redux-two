import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { deleteProduct } from '../../features/productsSlice';

function Delete() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();

  const product = useSelector(state => state.products.items.find(note => note.id === id));

  const [title, setTitle] = useState(product.title ? product.title : '');
  const [published, setPublished] = useState(product.published);
  const [description, setDescription] = useState(product.description ? product.description : '');
  const [price, setPrice] = useState(product.price ? product.price : '');

  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteProduct(id));
    // console.log(`Продукт ${id} удален`);
    navigate(`/products`)
  }

  const handleCancel = () => {
    navigate(`/products`)
  }

  return (

    <div className="p-4 max-w-sm mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[200px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Delete Product</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="price"
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            <span className="ml-2 text-gray-700 text-sm">Published</span>
          </label>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Delete
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

}

export default Delete;