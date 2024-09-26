import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Category.css';  // стили

function Category() {
    const { id } = useParams();  // Получаем id категории из URL
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/categories/${id}/recipes/`)    //  fetch(`http://127.0.0.1:8000/api/categories/${id}/recipes/`)
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
                console.log('Fetched recipes:', data);  // Для отладки
            })
            .catch(error => console.error('Error fetching recipes:', error));
    }, [id]);

    return (
        <div>
            <h1>Recipes in Category</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;
