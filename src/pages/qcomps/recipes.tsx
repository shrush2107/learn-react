export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];


// Recipe component to render a single recipe
function Recipe({ name, ingredients}:{name:string, ingredients: Array<string>}) {
  return (
    <li>
      <h2>{name}</h2>
      <ul>
        {[...ingredients].map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </li>
  );
}

// RecipeList component to render all recipes
export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(({ id, name, ingredients }) => (
          <Recipe key={id} name={name} ingredients={ingredients} />
        ))}
      </ul>
    </div>
  );
}