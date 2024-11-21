import React from "react";

const CompanyOverview = () => {
    const companyDetails = [
        {
            label: "社名",
            value: (
                <>
                    SJP株式会社
                    <br />
                    <span className="text-gray-600">
                        -Sharky Japan Promotion-
                    </span>
                </>
            ),
        },
        {
            label: "所在地",
            value: (
                <>
                    〒541-0059
                    <br />
                    大阪府大阪市中央区博労町4-6-17
                    <br />
                    第三丸米ビル207
                </>
            ),
        },
        { label: "代表者", value: "鮫島永都（代表取締役）" },
        { label: "資本金", value: "100万円" },
        { label: "創業", value: "2014年10月1日" },
        { label: "設立", value: "2016年10月18日" },
        { label: "従業員数", value: "3名" },
        {
            label: "事業内容",
            value: (
                <>
                    広告代理店業
                    <br />
                    酒類取扱業
                    <br />
                    酒類輸出入業
                </>
            ),
        },
        {
            label: "自主開催事業",
            value: (
                <>
                    Craft Beer Picnic
                    <br />
                    OSAKA SAKE FLEA など
                </>
            ),
        },
    ];

    return (
        <>
            <h2 className="text-5xl leading-tight text-center text-blue-400 font-sans font-bold mb-4">
                Company Profile
            </h2>
            <p className="text-center text-lg font-bold mb-16">会社概要</p>

            <div className="max-w-3xl mx-auto px-4 mb-20">
                <table className="w-full border-collapse">
                    <tbody>
                        {companyDetails.map((detail, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200"
                            >
                                <th className="py-4 px-6 text-left font-bold">
                                    {detail.label}
                                </th>
                                <td className="py-4 px-6">{detail.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CompanyOverview;
