import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../lib/productSlice";
import { useEffect } from "react";
import Image from "next/image";
export default function App() {
  const store = useSelector((state) => state.product);
  const products = store.products;
  return (
    <div className="bg-white">
      <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Health 360 Front End Task
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            This web app is for the task disscussed earlier with
            <i className="font-bold"> Dr. Sajjad Hasanain</i>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            it is really nice to see doctors and more non technical people
            adopting technology
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers Favorites
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product, idx) => (
            <Link href={`${product.id}`} key={idx}>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    fill
                    style={{ objectFit: "cover" }}
                    src={product.images[2].imageSrc}
                    alt={product.images[0].imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <div href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </div>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
