import React, { memo } from 'react';
import { Section } from './types';

interface Props {
    section: Section;
}

export const SectionContent = memo<Props>(({ section }) => (
    <div className="md:w-1/3 text-center flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 whitespace-pre-line">{section.title}</h2>
        <p className="text-xl font-bold text-blue-600 mb-4">{section.subtitle}</p>
        <p className="text-lg leading-relaxed whitespace-pre-line text-gray-700">
            {section.description}
        </p>
    </div>
));

SectionContent.displayName = 'SectionContent';