// import React from 'react';
// import BurgerItem from './BurgerItem';

// const BurgerList = () => {
//   const burgers = [
//     {
//       id: 1,
//       name: 'Classic Burger',
//       price: 9.99,
//       description: 'A delicious classic burger with all the fixings.',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//       id: 2,
//       name: 'Veggie Burger',
//       price: 8.99,
//       description: 'A plant-based burger patty topped with fresh veggies.',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//       id: 3,
//       name: 'BBQ Bacon Burger',
//       price: 11.99,
//       description: 'A mouthwatering burger with BBQ sauce and crispy bacon.',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//       id: 4,
//       name: 'Classic Burger',
//       price: 9.99,
//       description: 'A delicious classic burger with all the fixings.',
//       image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//       id: 5,
//       name: 'Veggie Burger',
//       price: 8.99,
//       description: 'A plant-based burger patty topped with fresh veggies.',
//       image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
//     },
//     {
//       id: 6,
//       name: 'BBQ Bacon Burger',
//       price: 11.99,
//       description: 'A mouthwatering burger with BBQ sauce and crispy bacon.',
//       image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
//     }
//     // Add more burger objects as needed
//   ];

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Burger List</h2>
//       <div className="row row-cols-1 row-cols-md-3">
//         {burgers.map(burger => (
//           <div key={burger.id} className="col mb-4">
//             <BurgerItem burger={burger} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BurgerList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BurgerItem from './BurgerItem';

const BurgerList = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    // Fetch burger data from the API
    axios.get('http://localhost:8080/api/all')
      .then(response => {
        setBurgers(response.data);
      })
      .catch(error => {
        console.log('Error fetching burgers:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Burger List</h2>
      <div className="row row-cols-1 row-cols-md-3">
        {burgers.map(burger => (
          <div key={burger.Id} className="col mb-4">
            <BurgerItem burger={burger} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerList;

