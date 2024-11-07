// import React from 'react'
// import { useAuth } from '../features/Usercontext'
// const Home = () => {
//   const[auth,setAuth]=useAuth()
//   return (
//     <div>
//     <h1> Home page</h1>
//     welcome {auth?.email}
//     </div>
//   )
// }

// export default Home


// import React from 'react';
// import { useAuth } from '../features/Usercontext';

// const Home = () => {
//     const [auth] = useAuth(); // Access auth context
// console.log(auth?.user[1]?.name)
//     return (
//         <div>
//             <h1>Home Page</h1>
//             {auth?.user ? (
//                 <>
//                     <p>Welcome, {auth.user[3].name}!</p>
//                     <p>Your email: {auth.user[3].email}</p>
//                 </>
//             ) : (
//                 <p>Please log in to see your details.</p>
//             )}
//         </div>
//     );
// };

// export default Home;

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve and parse user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user")) || [];
    setUsers(userData);
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left border-b">Name</th>
            <th className="py-3 px-6 text-left border-b">Email</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {users.map((user, index) => (
            <tr key={index} className="border-b border-gray-300 even:bg-gray-100">
              <td className="py-3 px-6 text-left">{user.name}</td>
              <td className="py-3 px-6 text-left">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

