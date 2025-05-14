import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //
import './MedicineOrdering.css';

const medicinesData = [
  { name: 'Paracetamol', price: 20 },
  { name: 'Ibuprofen', price: 30 },
  { name: 'Amoxicillin', price: 50 },
  { name: 'Cetirizine', price: 15 },
  { name: 'Metformin', price: 40 },
  { name: 'Atorvastatin', price: 35 },
  { name: 'Omeprazole', price: 25 },
  { name: 'Aspirin', price: 18 }
];

const MedicineOrdering = () => {
  const navigate = useNavigate(); //
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const filteredMedicines = medicinesData.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (medicine) => {
    const existing = cart.find(item => item.name === medicine.name);
    if (existing) {
      const updatedCart = cart.map(item =>
        item.name === medicine.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };

  const removeFromCart = (medicineName) => {
    const updatedCart = cart
      .map(item =>
        item.name === medicineName
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const placeOrder = () => {
    alert('Order placed successfully!');
    setCart([]);
  };

  const handleExit = () => { //
    navigate('/');
  };

  return (
    <div className="med-container" style={{ position: 'relative' }}>
      <button
        onClick={() => navigate('/delivery-animation')}
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '30px',
          padding: '8px 16px',
          background: '#0077b6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Previous
      </button>

      <button
        onClick={handleExit}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '30px',
          padding: '8px 16px',
          background: '#0077b6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Exit
      </button>
      <h1>Medicine Store</h1>
      <input
        type="text"
        placeholder="Search medicine..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="medicine-list">
        {filteredMedicines.map((med, index) => (
          <div key={index} className="medicine-item">
            <div>{med.name}</div>
            <div>₹{med.price}</div>
            <button onClick={() => addToCart(med)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <ul>
              {cart.map((item, i) => (
                <li key={i}>
                  {item.name} × {item.quantity} = ₹{item.quantity * item.price}
                  <button
                    style={{
                      marginLeft: '10px',
                      background: '#ff4d4d',
                      border: 'none',
                      padding: '4px 8px',
                      color: 'white',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                    onClick={() => removeFromCart(item.name)}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>
            <h3>Total: ₹{getTotal()}</h3>
            <button className="order-btn" onClick={placeOrder}>
              Place Order
            </button>
             
          </>
        )}
      </div>
       
    </div>
  );
};

export default MedicineOrdering; 