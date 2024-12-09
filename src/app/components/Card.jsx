import React from 'react';
import { Link } from 'react-router-dom';

function Card({ product }) {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <span className="text-gray-600">{product.published ? 'Published' : 'Not Published'}</span>
            </div> */}
            <img
                className="w-full h-48 object-cover rounded mb-4"
                src={product.image}
                alt={product.title}
            />
             <div className="flex justify-center items-center mb-4">
                <h2 className="text-xl font-bold">{product.title}</h2>
                {/* <h4 className="text-gray-600">{product.published ? 'Published' : 'Not Published'}</h4> */}
            </div>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg text-gray-900">Price: ${product.price}</p>
        </div>
        // <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border p-4 rounded shadow">
        //     <img src={product.image} alt={product.title} />

        //     <div className="pb-2 pr-16">
        //         <h3>{product.title}</h3>
        //         <p>Описание: {product.description}</p>
        //         <p>Цена: {product.price}</p>
        //         <p>Опубликован: {product.published ? 'Yes' : 'No'}</p>
        //         <Link to={`/edit/${product.id}`}>Редактировать</Link>
        //     </div>
        // </div>
    )
}

export default Card;