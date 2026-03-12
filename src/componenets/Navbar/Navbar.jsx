const Navbar = ({ cart = [], handleRemoveFromCart }) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">KM CookBook</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{cart.length} Items</span>
                <div className="max-h-60 overflow-y-auto w-full">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 my-2 p-2 hover:bg-base-200 rounded-lg transition-colors duration-200 group"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div className="flex-1 text-sm overflow-hidden">
                        <p className="font-semibold truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          {item.caloriesPerServing} Cal
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className="btn btn-ghost btn-xs text-error opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove from cart"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
