import React from "react";
const Footer = () => {
    return (
        <footer className="bg-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-8">
                    {/* ロゴ部分 */}
                    <div>
                        <img src="/sjp logo_004_20211006 1.png" alt="SJP&Co. Logo" className="h-12 w-auto" />
                    </div>

                    {/* 住所・連絡先情報 */}
                    <div className="text-gray-600 text-sm">
                        <p>〒541-0059</p>
                        <p>大阪市中央区博労町4-6-17 第三丸米ビル207</p>
                        <p>06-4708-6829</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
