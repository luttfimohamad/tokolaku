const Navbar = () => {
  return (
    // fixed
    <nav className="bg-slate-700 text-white fixed w-full z-50">
      <div className="mx-auto max-w-6xl py-6 flex justify-between items-center">
        <a href="/products" className="block">
          <h1 className="text-emerald-500 font-bold text-2xl">TokoLaku</h1>
        </a>
        <div className="flex justify-start items-center space-x-3">
          <button
            role="link"
            type="button"
            className="block bg-white px-4 py-2 hover:bg-slate-100 text-sm rounded-lg text-slate-600"
          >
            Profile
          </button>
          {/* <button
            role="link"
            type="button"
            className="block bg-red-500 px-4 py-2 hover:bg-red-600 text-sm rounded-lg"
          >
            <a href="/Login"></a>
            Logout
          </button> */}
          <a
            href="/login"
            className="block bg-red-500 px-4 py-2 hover:bg-red-600 text-sm rounded-lg"
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
