'use client';

import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<Product> = ({ id, title, price, image }) => {
  const handleRemoveClick = () => {
    const isConfirmed = window.confirm(`Are you sure to delete ${title}?`);
    // if (isConfirmed) {
    //
    // }
  };

  return (
    <div className="bg-slate-700 rounded-lg p-3 min-h-[20rem] relative">
      <figure className="block h-[10rem] bg-slate-100 rounded-lg ">
        <Image
          className="w-full h-full object-contain aspect-auto"
          src={image}
          alt={title}
          width={100}
          height={100}
        />
      </figure>
      <div className="py-2">
        <h3 className="text-lg">{title}</h3>
        <h4 className="text-sm">Rp. {price}</h4>
      </div>
      <div className="absolute bottom-0 left-0 p-3 w-full">
        <div className="flex space-x-3 justify-between align-items-center">
          <button
            type="button"
            className="border border-red-600 bg-white text-red-600 block w-full px-5 py-2 hover:bg-red-600 hover:text-white rounded-lg text-sm"
            //data-fdprocessedid={`remove-${id}`}
            onClick={handleRemoveClick}
          >
            Remove
          </button>
          <a
            // href={`/Products/Edit/${id}`}
            href={'/Products/Edit'}
            className="border text-center border-emerald-600 bg-white text-emerald-600 block w-full px-5 py-2 hover:bg-emerald-600 hover:text-white rounded-lg text-sm"
            //data-fdprocessedid={`edit-${id}`}
          >
            Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
