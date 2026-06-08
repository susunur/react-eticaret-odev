import { useEffect, useState } from "react";
import CartCard from "../Components/CartCard";
import { FaBasketballBall } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:5000/cart");
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Sepet verileri çekilemedi:", error);
      }
    };
    fetchCart();
  }, []);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <FaBasketballBall className="text-6xl text-[#1e3a8a] mb-4" />
          <h2 className="text-2xl font-bold text-black">Sepetiniz boş!!!</h2>
        </div>
      ) : (
        <>
          <h2 className="text-gray-700 mb-6 font-medium">
            Sepetteki toplam ürün sayısı:{" "}
            <span className="font-bold text-[#1e3a8a]">{cartItems.length}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} onRemove={handleRemoveItem} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
