import React from 'react';
import { selectAllproducts } from '../../features/productsSlice';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function GetList() {
    const product = useSelector(selectAllproducts);

    return (
        <>
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