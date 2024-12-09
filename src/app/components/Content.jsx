import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllproducts, statusFetching } from '../../features/productsSlice';
import GetList from '../containers/GetList';

function Content() {
  const dispatch = useDispatch();

  const products = useSelector(selectAllproducts);  /** выбрали данные  */
  const status = useSelector(statusFetching);       /** и статусы */


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
      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <GetList />
      </div>
    </main>
  );
}

export default Content;