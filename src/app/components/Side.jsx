import React from 'react';
import { NavLink } from 'react-router-dom';

function Side({ isMenuOpen, onClose }) {

    const style = ({ isActive }) => {
        return `flex items-center justify-center text-slate-700 p-2 border-b border-b-slate-200
     hover:text-slate-900 hover:bg-slate-200
     ${isActive ? 'bg-slate-300 text-slate-900 font-semibold' : ''}`;
    };

    return (
        <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-100 text-black p-4 transform transition-transform duration-300 z-50 sm:relative sm:translate-x-0 sm:w-auto sm:h-auto ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
>
    {isMenuOpen && <button onClick={onClose} className="text-slate-900 text-2xl focus:outline-none hover:text-slate-800 absolute top-4 right-4 sm:hidden"> &#x2715; </button>}
    <h2 className="text-lg font-bold mb-4">Боковая панель</h2>

    <div className='flex flex-col p-4 space-y-2'>
        <NavLink className={style} to={'/'}>Главная</NavLink>
        <NavLink className={style} to={`/products`}>Список товаров</NavLink>
        <NavLink className={style} to={'/add'}>Добавить</NavLink>
        
    </div>
      </aside>
    );
}

export default Side;