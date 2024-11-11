import React from "react";
import Header from "../../components/layout/Header";
import Top from "./Top";
import { SectionList } from "./SectionList";
import { sections } from "./data";

const Home: React.FC = () => (
    <>
        <Header />
        <Top />
        <main className="container mx-auto px-4 py-8">
            <SectionList sections={sections} />
        </main>
    </>
);

export default Home;
