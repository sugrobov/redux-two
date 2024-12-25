import React from 'react';
import { Link } from 'react-router-dom';

function Side({ isMenuOpen }) {
    const style = 'bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200';

    return (
        <aside
            className={`bg-slate-100 p-4 w-36 md:block  ${isMenuOpen ? 'block' : 'hidden'
                }`}
        >
            <div className='flex flex-col p-4 space-y-2'><Link className={style} to={'/'}>Главная</Link>
                <Link className={style} to={'/products'}>Список</Link>
                <Link className={style} to={'/add'}>Добавить</Link></div>



        </aside>
    );
}

export default Side;