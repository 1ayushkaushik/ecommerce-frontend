// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user'));

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link to="/" className="text-xl font-bold text-indigo-600">
//                 E-Commerce
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center">
//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 to="/login"
//                 className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-indigo-600">
                E-Commerce
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden sm:flex sm:space-x-4">
              <Link
                to="/products"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </Link>
              
              {/* Show Add Product link only if user is logged in */}
{user && (
  <>
    <Link
      to="/add-product"
      className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      Add Product
    </Link>
    <Link
      to="/add-category"
      className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      Add Category
    </Link>
  </>
)}
            </div>
          </div>

          <div className="flex items-center">
            {user ? (
              <>
                <span className="text-gray-700 mr-4">Welcome, {user.email}</span>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;