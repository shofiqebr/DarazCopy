import { useEffect, useState } from "react";
import JustForYouCard from "../../Components/JustForYouCard/JustForYouCard";

const JustForYou = () => {
  const [datas, setGroups] = useState([]);

  // const cards = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 19.99,
  //     percentage: 10,
  //     rating: 4.5,
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 29.99,
  //     percentage: 15,
  //     rating: 4.0,
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 9.99,
  //     percentage: 5,
  //     rating: 3.5,
  //   },
  //   {
  //     id: 4,
  //     name: "Product 4",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 49.99,
  //     percentage: 20,
  //     rating: 5.0,
  //   },
  //   {
  //     id: 5,
  //     name: "Product 5",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 39.99,
  //     percentage: 25,
  //     rating: 4.8,
  //   },
  //   {
  //     id: 6,
  //     name: "Product 6",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 24.99,
  //     percentage: 30,
  //     rating: 4.2,
  //   },
  //   {
  //     id: 7,
  //     name: "Product 7",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 59.99,
  //     percentage: 35,
  //     rating: 3.8,
  //   },
  //   {
  //     id: 8,
  //     name: "Product 8",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 89.99,
  //     percentage: 40,
  //     rating: 4.7,
  //   },
  //   {
  //     id: 9,
  //     name: "Product 9",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 99.99,
  //     percentage: 45,
  //     rating: 4.6,
  //   },
  //   {
  //     id: 10,
  //     name: "Product 10",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 19.99,
  //     percentage: 10,
  //     rating: 3.9,
  //   },
  //   {
  //     id: 11,
  //     name: "Product 11",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 29.99,
  //     percentage: 15,
  //     rating: 4.1,
  //   },
  //   {
  //     id: 12,
  //     name: "Product 12",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 34.99,
  //     percentage: 12,
  //     rating: 3.7,
  //   },
  //   {
  //     id: 13,
  //     name: "Product 13",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 44.99,
  //     percentage: 22,
  //     rating: 4.9,
  //   },
  //   {
  //     id: 14,
  //     name: "Product 14",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 54.99,
  //     percentage: 18,
  //     rating: 4.3,
  //   },
  //   {
  //     id: 15,
  //     name: "Product 15",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 64.99,
  //     percentage: 28,
  //     rating: 4.4,
  //   },
  //   {
  //     id: 16,
  //     name: "Product 16",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 74.99,
  //     percentage: 32,
  //     rating: 4.2,
  //   },
  //   {
  //     id: 17,
  //     name: "Product 17",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 84.99,
  //     percentage: 36,
  //     rating: 4.0,
  //   },
  //   {
  //     id: 18,
  //     name: "Product 18",
  //     image:
  //       "https://i.ibb.co/rGPG8zj/6d8ac83b249fff1e460413fa8199fc70-jpg-400x400q75-product-jpg.webp",
  //     price: 94.99,
  //     percentage: 40,
  //     rating: 3.6,
  //   },
  // ];

  useEffect(() => {
    fetch(
      `https://erpmethods.vercel.app/gets/Item Group?filters=[["show_in_website", "=", 1]]&fields=["idx","route","name", "image"]`,
      {
        headers: {
          url: "https://ecommerce.ionicerp.xyz/",
          api_secret: "f4393c419474a1b",
          api_key: "84859bedced40f4",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);


  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12">
      <h1 className="text-xl font-semibold">Just For You</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-4 ">
        {datas?.map((card, ids) => (
          <JustForYouCard key={ids} card={card}></JustForYouCard>
        ))}
      </div>
    </div>
  );
};

export default JustForYou;
