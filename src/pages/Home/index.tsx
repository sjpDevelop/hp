import React from "react";
import Header from "../../components/layout/Header";
import Top from "./Top";

function Home() {
  const sections = [
    {
      title: "展示会マーケティング",
      subtitle: "Exhibition Marketing",
      description:
        "主要な分野や特長など、\n展示会の実績紹介と\nマーケティング支援",
      images: [
        "/images/exhibition1.jpg",
        "/images/exhibition2.jpg",
        "/images/exhibition3.jpg",
        "/images/exhibition4.jpg",
      ],
    },
    {
      title: "焼酎/日本酒 クラフトビール フェス",
      subtitle: "Shochu & SAKE Craft Beer Fes",
      description:
        "全国の酒蔵さんが勢揃い！\n地元とは異なる\n新たな日本酒と\n各フェスを開催！",
      images: [
        "/images/sake1.jpg",
        "/images/sake2.jpg",
        "/images/sake3.jpg",
        "/images/sake4.jpg",
      ],
    },
    {
      title: "展示会/フェス 仮設・電気工事",
      subtitle: "Event Operation & electric work",
      description: "スポーツ・イベント会場\n仮設・舞台・照明・音響",
      images: [
        "/images/event1.jpg",
        "/images/event2.jpg",
        "/images/event3.jpg",
        "/images/event4.jpg",
      ],
    },
  ];

  return (
    <>
      <Header />
      <Top />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-16">
          {sections.map((section, index) => (
            <section key={index} className="relative">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <p className="text-lg text-blue-600 mb-2">{section.subtitle}</p>
                <p className="whitespace-pre-line text-gray-600">
                  {section.description}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {section.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="aspect-square overflow-hidden">
                    <img
                      src={image}
                      alt={`${section.title} ${imgIndex + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
