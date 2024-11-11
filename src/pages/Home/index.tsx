import React from "react";
import { SectionList } from "./SectionList";
import { sections } from "./data";

const Home: React.FC = () => (
    <>
        <main className="container mx-auto px-4 py-8">
            <SectionList sections={sections} />
        </main>
    </>
);

export default Home;
