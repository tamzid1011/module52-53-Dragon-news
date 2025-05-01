import React, { use } from 'react';
import { NavLink } from 'react-router';
const CategoriesPromise = fetch("/categories.json").then(res => res.json())

const Categories = () => {
    const categories = use(CategoriesPromise);
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
            <div className="mt-5 grid grid-cols-1 gap-3">
                {
                    categories.map(category => <NavLink
                        className="pl-5"
                        key={category.id}
                        to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;