import React from 'react';
import categories from '../components/Categories';

const CategoryFilter = () => {
    return (
        <select >
            <option value='ALL'>ALL</option>
            {categories.map( category => <option value={category} key={category}>{category}</option>)}
        </select>
    );
}

export default CategoryFilter;