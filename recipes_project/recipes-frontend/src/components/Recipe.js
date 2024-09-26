import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
    const { id } = useParams();  // Получаем id рецепта из URL
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/recipes/${id}/`)
            .then(response => response.json())
            .then(data => {
                setRecipe(data);
                console.log('Fetched recipe:', data);  // Для отладки
            })
            .catch(error => console.error('Error fetching recipe:', error));
    }, [id]);

    if (!recipe) return <div>Loading...</div>;  // Пока данные загружаются

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
    );
}

export default Recipe;
