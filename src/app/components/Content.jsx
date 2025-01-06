import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllproducts, statusFetching, setDisplayedCount } from '../../features/productsSlice';
import GetList from '../containers/GetList';

function Content() {

  const dispatch = useDispatch();

  const products = useSelector(selectAllproducts);  /** выбрали данные  */
  const status = useSelector(statusFetching);       /** и статусы */

  const handleSetCount = (count) => dispatch(setDisplayedCount(count)); /** установить количество отображаемых записей */
  const style = "px-2 py-1 bg-slate-500 text-white rounded hover:bg-slate-700 transition-colors duration-200"; /** стили для кнопок отображения */

  /** табы */
  const [activeTab, setActiveTab] = useState('published'); 
  const filteredProducts = products.filter((product) => {
    if (activeTab === 'published') {
         return product.published === true;
   } else if (activeTab === 'unpublished') {
         return product.published === false;
   }
     return true
 });
 /** табы */
  

  /** fetch */
  const ref = useRef(false);
  useEffect(() => {
      if (ref.current) return;  /** устранение дублирования */
      ref.current = true;

      if (products.length === 0 && status === 'idle') dispatch(fetchProducts())
  }, [status, dispatch, products]);


  return (
    <main className="p-4 flex-1"> 

      <h2>Основной контент</h2>
      <div className="border-b border-gray-200">
          {/* <div className="flex justify-center mt-1 sm:flex-col"> */}
          <div className="text-center mt-1 sm:flex-col">
             <button
                onClick={() => setActiveTab('published')}
                className={`px-4 py-2 font-bold ${activeTab === 'published'
                  ? 'bg-blue-500 text-white border-b-blue-500'
                  : 'bg-gray-200 text-gray-700 border-b-gray-200 hover:bg-gray-300'
                  } border-b-4 transition-all`}
                style={{ transition: 'all 0.3s ease' }}
              >
                  Опубликованные
             </button>
             <button
                  onClick={() => setActiveTab('unpublished')}
                  className={`px-4 py-2 font-bold ${activeTab === 'unpublished'
                    ? 'bg-blue-500 text-white border-b-blue-500'
                    : 'bg-gray-200 text-gray-700 border-b-gray-200 hover:bg-gray-300'
                    } border-b-4 transition-all`}
                  style={{ transition: 'all 0.3s ease' }}
                >
                    Не опубликованные
                </button>
          </div>
          </div>
      <p>Отобразить на странице записей:</p>
      <div className="mt-4 space-x-4">
        <button className={style} onClick={() => handleSetCount(8)}>8</button>
        <button className={style} onClick={() => handleSetCount(16)}>16</button>
        <button className={style}  onClick={() => handleSetCount(products.length)}>All</button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <GetList 
        product={filteredProducts}
        />
      </div>
    </main>
  );
}

export default Content;