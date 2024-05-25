/* eslint-disable react/prop-types */

const CategoryCard = ({ category }) => {
    const {image, name } = category || {};
    return (
        <div className="p-5 text-center border hover:shadow-lg">
            <img className="w-20 inline" src={image} alt="" />
            <p className="text-sm">{name}</p>
        </div>
    );
};

export default CategoryCard;