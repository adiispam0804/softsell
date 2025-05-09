const Navbar = ({ toggleDark, dark }) => (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">SoftSell</h1>
      <button
        onClick={toggleDark}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        {dark ? "🌙" : "☀️"}
      </button>
    </nav>
  );
  
  export default Navbar;
  