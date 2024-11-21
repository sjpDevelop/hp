import React from "react";

const CompanyPolicy = () => {
    return (
        <div className="flex items-center justify-between max-w-6xl mx-auto mb-20 px-4">
            <div className="w-1/2">
                <h2 className="text-5xl leading-tight text-center text-blue-400 font-sans font-bold mb-4">
                    Company Policy
                </h2>
                <p className="text-center text-lg font-bold mb-8">社是</p>

                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4">その先へ</h3>
                    <p className="text-xl italic mb-8">
                        beyond the now, go ahead
                    </p>
                    <p className="text-lg leading-relaxed">
                        目の前のヒト・モノ(想い、時間、出来事、情報)・お金に
                        <br />
                        対してどれだけの「笑顔」が作れるかを考える
                    </p>
                </div>
            </div>

            <div className="w-1/2 pl-8">
                <img
                    src="/CBP2017_170920_0008.jpg"
                    alt="Company Policy Image"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default CompanyPolicy;
