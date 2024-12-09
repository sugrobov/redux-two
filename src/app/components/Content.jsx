import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setDisplayedCount } from '../../features/productsSlice';

function Content() {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);
  const display = useSelector(state => state.products.status);

  const ref = useRef(false);

  useEffect(() => {
      if (ref.current) return;  /** устранение дублирования */
      ref.current = true;

      dispatch(fetchProducts())
  }, [status, dispatch]);


  return (
    <main className="p-4 flex-1"> 
      <h2>Основной контент</h2>
 
      <p>Здесь будет основное содержимое страницы.</p>
    </main>
  );
}

export default Content;