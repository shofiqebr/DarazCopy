/* eslint-disable react/prop-types */

const CategoryCard = ({ category }) => {
    const { thumbnail, name } = category || {};
    return (
        <div className="p-5 text-center border hover:shadow-lg">
            <img className="w-20 inline" src={`https://ecommerce.ionicerp.xyz/${thumbnail}`} alt="" />
            <p className="text-sm">{name}</p>
        </div>
    );
};

export default CategoryCard;