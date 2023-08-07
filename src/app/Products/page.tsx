import Navbar from '@/components/navbar';
import ProductCard from '@/components/productCard';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'iPhone 9',
      price: '549',
      image: '/iphone9.jpg',
    },
    {
      id: 2,
      title: 'iPhone X',
      price: '899',
      image: '/iphonex.jpg',
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      price: '1249',
      image: '/samsung-universe9.jpg',
    },
    {
      id: 4,
      title: 'OPPO F19',
      price: '280',
      image: '/oppof19.jpg',
    },
    {
      id: 5,
      title: 'Huawei P30',
      price: '499',
      image: '/huawaip30.jpg',
    },
    {
      id: 6,
      title: 'MacBook Pro',
      price: '1749',
      image: '/macbookpro.png',
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      price: '1499',
      image: '/samsunggalaxybook.jpg',
    },
    {
      id: 8,
      title: 'Microsoft Surface Laptop 4',
      price: '1499',
      image: '/microsoft4.jpg',
    },
    {
      id: 9,
      title: 'Infinix INBOOK',
      price: '1099',
      image: '/infinixbox.jpg',
    },
    {
      id: 10,
      title: 'HP Pavilion 15-DK1056WM',
      price: '1099',
      image: '/hppavilion.jpeg',
    },
  ];

  return (
    <div className="bg-slate-500">
      <Navbar />
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-3 px-3 lg:px-0 pt-28">
          <h1 className="font-bold text-4xl mb-6">Products</h1>
          <a href="/Products/Add">
            <span
              role="button"
              className="inline-block bg-blue-500 text-white rounded-lg px-5 py-2 hover:bg-blue-600"
            >
              Add new product
            </span>
          </a>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 px-3 lg:px-0 pb-6">
          {products.map((product) => (
            // <ProductCard key={product.id} {...product} />
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image || ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
