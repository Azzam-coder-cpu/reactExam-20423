import { useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
};

    return(
        <nav className="flex items-center justify-between bg-gray-800 px-6 py-3 text-white shadow">
      <div className="flex items-center space-x-2">
        <img
          src="https://baitussalam.org/images/logo-2.svg"
          alt="Logo"
          className="h-10 w-auto"
        />
        <span className="text-xl font-semibold">My Store</span>
      </div>
      <div className="hidden space-x-6 md:flex">
        <a href="#" className="hover:text-blue-400">
          Docs
          </a>
        <a href="#" className="hover:text-blue-400">
          Example
        </a>
        <a href="#" className="hover:text-blue-400">
          Blog
        </a>
      </div>

      <button
        className="rounded border border-gray-400 px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
       onClick={handleLogout}>
        Logout
        </button>
      
    </nav>

    )
}

export default Navbar