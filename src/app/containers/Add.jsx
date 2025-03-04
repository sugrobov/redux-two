import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../features/productsSlice';
import { nanoid } from '@reduxjs/toolkit';

function Add() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [published, setPublished] = useState(false);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!title) {
      errors.title = `Поле 'Title' не должно быть пустым`;
    }
    if (!description) {
      errors.description = `Поле 'Description' не должно быть пустым`;
    }
    if (!price) {
      errors.price = `Поле 'Price' не должно быть пустым`;
    }
    if (isNaN(price)) {
      errors.price = `Поле 'Price' должно быть числовым`
    }
    return errors;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // return;
    } else {
      setErrors({});
      const newProduct = {
        id: nanoid(),
        title,
        published,
        description,
        price: parseFloat(price),
        date_added: new Date().toISOString(),
      };
  
      dispatch(addProduct(newProduct));
  
      setTitle('');
      setPublished(false);
      setDescription('');
      setPrice('');
  
    }

    // const newProduct = {
    //   id: nanoid(),
    //   title,
    //   published,
    //   description,
    //   price: parseFloat(price),
    // };

    // dispatch(addProduct(newProduct));

    // setTitle('');
    // setPublished(false);
    // setDescription('');
    // setPrice('');


  };
{/* <div className="p-4">  */}
{/* <div className="p-4 flex-1"></div> */}
  return (


<div className="p-4 max-w-sm mx-auto">
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[200px]"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
          id="title"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (<p className="text-red-500 text-xs italic">{errors.title}</p>)}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''}`}
          id="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && (<p className="text-red-500 text-xs italic">{errors.description}</p>)}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.price ? 'border-red-500' : ''}`}
          id="price"
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && (<p className="text-red-500 text-xs italic">{errors.price}</p>)}
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
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Product
        </button>
      </div>
    </form>
</div>
  );

  
}

export default Add;