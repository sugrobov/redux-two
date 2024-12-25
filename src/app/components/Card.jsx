import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ButtonBack from './ButtonBack';

function Card({ product }) {

    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);

    return (
        <div className="flex flex-wrap justify-center gap-4 pt-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

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
            <div className="flex justify-center items-center mt-4"> {/* Added a margin top for spacing */}
                 <Link
                    to={`/edit/${product.id}`}
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                >
                    Edit
                </Link>
                
            </div>

        </div>
</div>
    )
}

export default Card;