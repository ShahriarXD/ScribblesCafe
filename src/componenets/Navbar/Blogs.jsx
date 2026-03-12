import { useEffect, useState } from "react";
const Blogs = ({ handleAddToCart }) => {
  const [reci, setReci] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      // Access the "recipes" array from the JSON object
      .then((data) => setReci(data.recipes));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reci.map((recipe) => (
          <div
            key={recipe.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-start">
                <h2 className="card-title text-lg">{recipe.name}</h2>
                <div className="badge badge-secondary">{recipe.difficulty}</div>
              </div>

              <p className="text-sm text-gray-500 line-clamp-2">
                {recipe.instructions[0]}{" "}
                {/* Showing the first step as a preview */}
              </p>

              <div className="flex gap-2 my-2">
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                  🔥 {recipe.caloriesPerServing} Cal
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  ⏱️ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                </span>
              </div>
              <div className="card-actions justify-center gap-2 mt-4">
                <button className="btn btn-primary" onClick={() => handleAddToCart(recipe)}>Buy Now</button>
                <button
                  className="btn btn-outline btn-secondary"
                  onClick={() => {
                    setSelectedRecipe(recipe);
                    document.getElementById('recipe_modal').showModal();
                  }}
                >
                  Details
                </button>
              </div>

              <div className="card-actions justify-end mt-2">
                {recipe.tags.slice(0, 2).map((tag, i) => (
                  <div key={i} className="badge badge-outline text-xs">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      <dialog id="recipe_modal" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box">
          {selectedRecipe && (
            <>
              <h3 className="font-bold text-2xl">{selectedRecipe.name}</h3>
              <img src={selectedRecipe.image} alt={selectedRecipe.name} className="w-full h-48 object-cover rounded-xl my-4 shadow-md" />
              <div className="flex gap-2 mb-4">
                <span className="badge badge-primary">{selectedRecipe.cuisine}</span>
                <span className="badge badge-secondary shadow-sm">{selectedRecipe.difficulty}</span>
              </div>
              <p className="py-2 text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Prep Time:</span> {selectedRecipe.prepTimeMinutes} mins | <span className="font-semibold text-gray-800">Cook Time:</span> {selectedRecipe.cookTimeMinutes} mins
              </p>

              <h4 className="font-semibold mt-4 mb-2 text-lg border-b pb-1">Ingredients</h4>
              <ul className="list-disc list-inside text-sm mb-4 space-y-1 text-gray-700">
                {selectedRecipe.ingredients?.map((ing, i) => <li key={i}>{ing}</li>)}
              </ul>

              <h4 className="font-semibold mb-2 text-lg border-b pb-1">Instructions</h4>
              <ol className="list-decimal list-inside text-sm space-y-2 text-gray-700">
                {selectedRecipe.instructions?.map((inst, i) => <li key={i}>{inst}</li>)}
              </ol>
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Blogs;
