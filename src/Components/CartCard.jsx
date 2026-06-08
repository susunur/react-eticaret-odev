const CartCard = ({ item, onRemove }) => {
  const removeFromCart = async () => {
    try {
      await fetch(`http://localhost:5000/cart/${item.id}`, {
        method: "DELETE",
      });
      onRemove(item.id);
    } catch (error) {
      console.error("Ürün silinirken hata oluştu:", error);
    }
  };

  return (
    <div className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover rounded-xl mb-4 bg-gray-200"
      />
      <h3 className="font-bold text-gray-800 text-lg line-clamp-1">
        {item.title}
      </h3>
      <div className="flex justify-between items-center mt-2 mb-4">
        <span className="text-[#1e3a8a] text-sm font-semibold">
          {item.category}
        </span>
        <span className="text-[#1e3a8a] font-bold text-lg">
          {Number(item.price).toFixed(1)} ₺
        </span>
      </div>
      <button
        onClick={removeFromCart}
        className="mt-auto w-full bg-[#1e3a8a] text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
      >
        Sil
      </button>
    </div>
  );
};

export default CartCard;
