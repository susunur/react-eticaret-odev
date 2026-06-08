const ProductCard = ({ product }) => {
  const addToCart = async () => {
    const cartItem = { ...product };
    delete cartItem.id;
    cartItem.productId = product.id;

    try {
      await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItem),
      });
      alert(`${product.title} sepete eklendi!`);
    } catch (error) {
      console.error("Sepete eklenirken hata oluştu:", error);
    }
  };

  return (
    <div className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded-xl mb-4 bg-gray-200"
      />
      <h3 className="font-bold text-gray-800 text-lg line-clamp-1">
        {product.title}
      </h3>
      <div className="flex justify-between items-center mt-2 mb-4">
        <span className="text-[#1e3a8a] text-sm font-semibold">
          {product.category}
        </span>
        <span className="text-[#1e3a8a] font-bold text-lg">
          {Number(product.price).toFixed(1)} ₺
        </span>
      </div>
      <button
        onClick={addToCart}
        className="mt-auto w-full bg-[#1e3a8a] text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
      >
        Ekle
      </button>
    </div>
  );
};

export default ProductCard;
