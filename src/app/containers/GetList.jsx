import React from 'react';
// import { selectAllproducts } from '../../features/productsSlice';
import { useSelector } from 'react-redux';

import Card from '../components/Card';

function GetList({product}) {
    // const dispatch = useDispatch();
    // const handleSetCount = (count) => dispatch(setDisplayedCount(count));

    const displayedCount = useSelector(state => state.products.displayedCount);
    // const product = useSelector(selectAllproducts).slice(0, displayedCount);

    return (
        <>
{/*     <div className="mt-4 space-x-4">
        <button onClick={() => handleSetCount(8)}>8</button>
        <button onClick={() => handleSetCount(16)}>16</button>
        <button onClick={() => handleSetCount(product.length)}>All</button>
      </div> */}
 
            {product.map(note => (
                <Card
                    key={note.id}
                    product={note}
                />
            ))}
        </>
    )
}

export default GetList;