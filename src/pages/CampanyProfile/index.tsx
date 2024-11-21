import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Top from "./Top";
import { Link } from "react-router-dom";

function CompanyProfile() {
    return (
        <>
            <Header />
            <Top />
            <main>
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

                <h2 className="text-5xl leading-tight text-center text-blue-400 font-sans font-bold mb-4">
                    Description of Business
                </h2>
                <p className="text-center text-lg font-bold mb-16">事業内容</p>

                <div className="flex flex-wrap justify-center gap-6 px-4 mb-20 max-w-7xl mx-auto">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <img
                            className="rounded-t-lg w-64 h-48 object-cover"
                            src="/sjp_logo_004_20211006.png"
                            alt=""
                        />
                        <div className="p-5">
                            <p className="text-center text-lg font-bold">
                                広告代理店事業
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <img
                            className="rounded-t-lg w-64 h-48 object-contain"
                            src="/sake.png"
                            alt=""
                        />
                        <div className="p-5">
                            <p className="text-center text-lg font-bold">
                                酒販事業
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <img
                            className="rounded-t-lg w-64 h-48 object-cover"
                            src="/biyou.png"
                            alt=""
                        />
                        <div className="p-5">
                            <p className="text-center text-lg font-bold">
                                美容事業
                            </p>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <img
                            className="rounded-t-lg w-64 h-48 object-contain"
                            src="/denki.png"
                            alt=""
                        />
                        <div className="p-5">
                            <p className="text-center text-lg font-bold">
                                電気事業
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-5xl leading-tight text-center text-blue-400 font-sans font-bold mb-4">
                    Company Profile
                </h2>
                <p className="text-center text-lg font-bold mb-16">会社概要</p>

                <div className="max-w-3xl mx-auto px-4 mb-20">
                    <table className="w-full border-collapse">
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left w-1/4 font-bold">
                                    社名
                                </th>
                                <td className="py-4 px-6">
                                    SJP株式会社
                                    <br />
                                    <span className="text-gray-600">
                                        -Sharky Japan Promotion-
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    所在地
                                </th>
                                <td className="py-4 px-6">
                                    〒541-0059
                                    <br />
                                    大阪府大阪市中央区博労町4-6-17
                                    <br />
                                    第三丸米ビル207
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    代表者
                                </th>
                                <td className="py-4 px-6">
                                    鮫島永都（代表取締役）
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    資本金
                                </th>
                                <td className="py-4 px-6">100万円</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    創業
                                </th>
                                <td className="py-4 px-6">2014年10月1日</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    設立
                                </th>
                                <td className="py-4 px-6">2016年10月18日</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    従業員数
                                </th>
                                <td className="py-4 px-6">3名</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    事業内容
                                </th>
                                <td className="py-4 px-6">
                                    広告代理店業
                                    <br />
                                    酒類取扱業
                                    <br />
                                    酒類輸出入業
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    自主開催事業
                                </th>
                                <td className="py-4 px-6">
                                    Craft Beer Picnic
                                    <br />
                                    OSAKA SAKE FLEA など
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-5xl leading-tight text-center text-blue-400 font-sans font-bold mb-4">
                    History
                </h2>
                <p className="text-center text-lg font-bold mb-16">会社沿革</p>

                <div className="max-w-3xl mx-auto px-4 mb-20">
                    <table className="w-full border-collapse">
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left w-1/4 font-bold">
                                    2014.Oct
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        平成26年
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    SJP個人事業開業
                                    <br />
                                    広告代理店事業部・電気工事業部
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    2016.Oct
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        平成28年
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    SJP株式会社法人設立
                                    <br />
                                    大阪市中央区に移転
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    2017.Aug
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        平成29年
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    酒販事業部設立（輸出・小売・通販）
                                    <br />
                                    the craft by SJPとして酒販屋号
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    2018.Sep
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        平成30年
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    台灣輸出（日本酒）
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    2018.Nov
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        平成30年
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    フランス輸出（日本酒）
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    2019.Jun
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        令和元年
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    G20関連事業（インドネシア国大使館・領事館）
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    2021.Oct
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        令��3年
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    Roshe オープン
                                    <br />
                                    まつ毛・まゆ毛専門サロン
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    2022.Jan
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        令和4年
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    電気通信事業部設立
                                    <br />
                                    MVNO許可取得
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 px-6 text-left font-bold">
                                    2023.Dec
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        令和4年
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    エステ・脱毛サロン神戸店オープン
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default CompanyProfile;
