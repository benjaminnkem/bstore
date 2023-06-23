import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="flex items-center justify-center py-20 space-x-8 select-none text-slate-900">
          <li className="relative duration-100 hover:text-green-800 n-links">Home</li>
          <li className="relative duration-100 hover:text-green-800 n-links">Shop</li>
          <li className="relative duration-100 hover:text-green-800 n-links">About</li>
          <li className="relative duration-100 hover:text-green-800 n-links">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
