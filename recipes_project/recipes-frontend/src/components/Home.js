import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/categories/')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                console.log('Fetched categories:', data);  // Для отладки
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
