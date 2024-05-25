import CategoryCard from "../../Components/CategoryCard/CategoryCard";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Trimmers, Groomers",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 2,
      name: "Wardrobe Organisers",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 3,
      name: "Chino",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 4,
      name: "Washing Powder",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 5,
      name: "T-Shirts",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 6,
      name: "Sports Sandals",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 7,
      name: "Modelling & Sculpting",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 8,
      name: "Fairy Lights",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 9,
      name: "Lip Gloss",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 10,
      name: "In-Ear Headphones",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 11,
      name: "Rings",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 12,
      name: "Fashion",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 13,
      name: "Skin & Decal Stickers",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 14,
      name: "Door hardware",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 15,
      name: "IP Security Cameras",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
    {
      id: 16,
      name: "Helicopters",
      image: "https://i.ibb.co/MV9vS7V/65eeaf6d2b967b45faa9faffc11d146c.jpg",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8 ">
      <h1 className="text-xl font-semibold">Categories</h1>
      <div className="bg-white grid grid-cols-3 lg:grid-cols-8 mt-5">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
