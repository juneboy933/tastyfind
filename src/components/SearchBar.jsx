import { useEffect, useState } from 'react';
import './searchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    setRecipes(data.meals || []);
  };

  useEffect(() => {
    if (query.trim() !== '') {
      fetchData();
    }
  }, [query]);

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
    setShowModal(false);
  };

  return (
    <>
      <div className='search-bar'>
        <input
          type='text'
          value={query}
          placeholder='Search recipes...'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>🔍</button>
      </div>

      <div className='recipe-list'>
        {recipes.map((recipe) => (
          <div className='item' key={recipe.idMeal}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{width: '100%', borderRadius: '8px'}} />
            <p>{recipe.strCategory}</p>
            <button onClick={() => handleViewDetails(recipe)}>View details</button>
          </div>
        ))}
      </div>

      {showModal && selectedRecipe && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2>{selectedRecipe.strMeal}</h2>
            <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
            <p><strong>Category:</strong> {selectedRecipe.strCategory}</p>
            <p><strong>Area:</strong> {selectedRecipe.strArea}</p>
            <p><strong>Instructions:</strong> {selectedRecipe.strInstructions}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;