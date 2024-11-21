import React from "react";

const ManagementPolicy = () => {
    return (
        <div className="flex items-center justify-between max-w-6xl mx-auto mb-20 px-4">
            <div className="w-1/2 pr-8">
                <img
                    src="/IMG_1695.png"
                    alt="Management Policy Image"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>

            <div className="w-1/2">
                <h2 className="text-5xl leading-tight text-center text-blue-400 font-sans font-bold mb-4">
                    Management Policy
                </h2>
                <p className="text-center text-lg font-bold mb-8">経営方針</p>

                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        早く行きたければ一人で行け
                        <br />
                        遠くまで行きたければみんなで行け
                    </h3>
                    <p className="text-lg italic mb-8">
                        if you want to go fast, go alone
                        <br />
                        if you want to go far, go together
                    </p>
                    <p className="text-lg leading-relaxed">
                        小さいことを一緒にやっていって
                        <br />
                        大きいことができるような仲間でありたい。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ManagementPolicy;
