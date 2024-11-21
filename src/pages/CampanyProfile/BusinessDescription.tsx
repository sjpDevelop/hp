import React from "react";

const BusinessDescription = () => {
    const businesses = [
        {
            image: "/sjp_logo_004_20211006.png",
            title: "広告代理店事業",
            objectFit: "cover",
        },
        {
            image: "/sake.png",
            title: "酒販事業",
            objectFit: "contain",
        },
        {
            image: "/biyou.png",
            title: "美容事業",
            objectFit: "cover",
        },
        {
            image: "/denki.png",
            title: "電気事業",
            objectFit: "contain",
        },
    ];

    return (
        <>
            <h2 className="text-5xl leading-tight text-center text-blue-400 font-sans font-bold mb-4">
                Description of Business
            </h2>
            <p className="text-center text-lg font-bold mb-16">事業内容</p>

            <div className="flex flex-wrap justify-center gap-6 px-4 mb-20 max-w-7xl mx-auto">
                {businesses.map((business, index) => (
                    <div
                        key={index}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                    >
                        <img
                            className={`rounded-t-lg w-64 h-48 ${
                                business.objectFit === 'contain' ? 'object-contain' : 'object-cover'
                            }`}
                            src={business.image}
                            alt={business.title}
                        />
                        <div className="p-5">
                            <p className="text-center text-lg font-bold">
                                {business.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BusinessDescription;
