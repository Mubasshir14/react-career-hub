// import React from 'react';

const CategoryCard = ({ c }) => {
    const { logo, category_name, availability } = c;
    return (
        <div>
            <div className=" p-5 rounded-xl bg-gradient-to-r from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)] w-[311px] h-[243ox]">
                <figure className="flex justify-start items-start">
                    <img src={logo}  className="w-[70px] h-[70px] "/>
                </figure>
                <div className="">
                    <h2 className=" text-[#474747] font-extrabold text-xl mt-3">
                   { category_name}
                    </h2>
                    <h2 className=" text-[#A3A3A3] font-medium text-lg mt-3">
                     {availability}
                    </h2>
                    
                    </div>
                </div>
            </div>

    );
};

export default CategoryCard;