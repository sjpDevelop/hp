import React from "react";
import { Section as SectionType } from "./types";
import { Section } from "./Section";

interface Props {
    sections: SectionType[];
}

export const SectionList: React.FC<Props> = ({ sections }) => (
    <div className="grid gap-24">
        {sections.map((section, index) => (
            <Section key={section.title} section={{ ...section, index }} />
        ))}
    </div>
);
