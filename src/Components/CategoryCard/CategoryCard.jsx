/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    const { thumbnail, name } = category || {};
    return (
        <div className="p-5 text-center border hover:shadow-lg">
            <Link to='/category'>
            
            <img className="w-20 inline" src={`https://ecommerce.ionicerp.xyz/${thumbnail}`} alt="" />
            <p className="text-sm">{name}</p>
            </Link>
        </div>
    );
};

export default CategoryCard;