import { ProductCard } from "../../../components/Elements/ProductCard";
import React, { useEffect } from "react";
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {
  const [product, setProduct] = React.useState([]);

  useEffect(() => {
    async function fetchtheproduct() {
      try {
        const data = await getFeaturedList();
        setProduct(data);
      } catch (error) {
        toast.error("🦄 Wow so easy!", {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }

    fetchtheproduct();
  }, []);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
