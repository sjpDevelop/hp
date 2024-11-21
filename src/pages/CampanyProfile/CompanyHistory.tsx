import React from "react";

const CompanyHistory = () => {
    const history = [
        {
            date: "2014.Oct",
            era: "平成26年",
            description: (
                <>
                    SJP個人事業開業
                    <br />
                    広告代理店事業部・電気工事業部
                </>
            ),
        },
        {
            date: "2016.Oct",
            era: "平成28年",
            description: (
                <>
                    SJP株式会社法人設立
                    <br />
                    大阪市中央区に移転
                </>
            ),
        },
        {
            date: "2017.Aug",
            era: "平成29年",
            description: (
                <>
                    酒販事業部設立（輸出・小売・通販）
                    <br />
                    the craft by SJPとして酒販屋号
                </>
            ),
        },
        {
            date: "2018.Sep",
            era: "平成30年",
            description: "台灣輸出（日本酒）",
        },
        {
            date: "2018.Nov",
            era: "平成30年",
            description: "フランス輸出（日本酒）",
        },
        {
            date: "2019.Jun",
            era: "令和元年",
            description: "G20関連事業（インドネシア国大使館・領事館）",
        },
        {
            date: "2021.Oct",
            era: "令和3年",
            description: (
                <>
                    Roshe オープン
                    <br />
                    まつ毛・まゆ毛専門サロン
                </>
            ),
        },
        {
            date: "2022.Jan",
            era: "令和4年",
            description: (
                <>
                    電気通信事業部設立
                    <br />
                    MVNO許可取得
                </>
            ),
        },
        {
            date: "2023.Dec",
            era: "令和4年",
            description: "エステ・脱毛サロン神戸店オープン",
        },
    ];

    return (
        <>
            <h2 className="text-5xl leading-tight text-center text-blue-400 font-sans font-bold mb-4">
                History
            </h2>
            <p className="text-center text-lg font-bold mb-16">会社沿革</p>

            <div className="max-w-3xl mx-auto px-4 mb-20">
                <table className="w-full border-collapse">
                    <tbody>
                        {history.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200"
                            >
                                <th className="py-4 px-6 text-left w-1/4 font-bold">
                                    {item.date}
                                    <br />
                                    <span className="text-sm text-gray-600">
                                        {item.era}
                                    </span>
                                </th>
                                <td className="py-4 px-6">
                                    {item.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CompanyHistory;
