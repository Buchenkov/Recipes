import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`/api/recipes/${id}/`)
            .then(response => response.json())
            .then(data => setRecipe(data));
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
    );
}

export default Recipe;
