import React from 'react';
import { NavLink } from 'react-router-dom';

function Side({ isMenuOpen }) {

    const style = ({ isActive }) => {
        return `flex items-center justify-center text-slate-700 p-2 border-b border-b-slate-200
     hover:text-slate-900 hover:bg-slate-200
     ${isActive ? 'bg-slate-300 text-slate-900 font-semibold' : ''}`;
    };

    return (
        <aside
            className={`bg-slate-100 p-4 w-36 md:block  ${isMenuOpen ? 'block' : 'hidden'
                }`}
        >
            <div className='flex flex-col p-4 space-y-2'>
                <NavLink className={style} to={'/'}>Главная</NavLink>
                <NavLink className={style} to={'/products'}>Список</NavLink>
                <NavLink className={style} to={'/add'}>Добавить</NavLink></div>
        </aside>
    );
}

export default Side;