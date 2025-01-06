import React from 'react';
import { useLocation, Link/* , useNavigate */ } from 'react-router-dom';

function CardButtons({ product }) {
    const location = useLocation();
    // const navigate = useNavigate();
    // const handleGoBack = () => navigate(-1);

    const isEdit = location.pathname === `/edit/${product.id}`;
    const isView = location.pathname === `/view/${product.id}`;
    const isProducts = location.pathname === `/products`;

    return (
        <div className="flex justify-center items-center mt-4 space-x-2"> {/* Added a margin top for spacing */}
            {/* {!isEdit && <Link
                to={`/edit/${product.id}`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                Edit
            </Link> 
            }
            {!isView && <Link
                to={`/view/${product.id}`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                view
            </Link> 
            } */}

            {/* <Link
                to={`/edit/${product.id}`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                Edit
            </Link>
            <Link
                to={`/view/${product.id}`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                view
            </Link> */}
            {/*  {isProducts && <Link
                to={`/edit/${product.id}`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                Edit
            </Link> && <Link
                to={`/view/${product.id}`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                view
            </Link> 

            }
            {isView && <Link
                to={`/products`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                OK
            </Link>}
            {isEdit &&  <Link
                to={`/view/${product.id}`}
                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                view
            </Link>

            } */}
            {isProducts && (
                <>
                    <Link
                        to={`/edit/${product.id}`}
                        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/view/${product.id}`}
                        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                    >
                        view
                    </Link>
                </>
            )}
            {isEdit && <p>edit</p>}
            {isView && <p>view</p>}
            {isProducts && <p>products</p>}
        </div>
    )
}

export default CardButtons;