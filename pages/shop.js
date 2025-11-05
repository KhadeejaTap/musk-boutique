export default function Shop() {
  const products = [
    { id: 1, name: 'Dress 1', price: '$45' },
    { id: 2, name: 'Dress 2', price: '$55' },
    { id: 3, name: 'Dress 3', price: '$40' },
  ]

  return (
    <main>
      <h1>Shop</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  )
}