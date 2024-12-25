import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from './Card';

function View({ product }) {
   
    const { id } = useParams();

    const isFoundProduct = useSelector(state => state.products.items.find(note => note.id === id));

    if (!isFoundProduct) {
        return <p>
            `Продукт ${id} не найден`
        </p>
    }
    return (
        <div className="p-4 flex-1"> 
            <Card
                key={id}
                product={isFoundProduct}
  

            />
        
</div>

    )
}

export default View;