import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section as SectionType } from './types';
import { SectionContent } from './SectionContent';
import { ImageGrid } from './ImageGrid';
import { ANIMATION_CONFIG, INTERSECTION_OPTIONS } from './constants';

interface Props {
    section: SectionType;
}

export const Section = memo<Props>(({ section }) => {
    const [ref, inView] = useInView(INTERSECTION_OPTIONS);
    const isOdd = (section.index ?? 0) % 2 === 1;

    return (
        <motion.section
            ref={ref}
            initial={ANIMATION_CONFIG.initial}
            animate={inView ? ANIMATION_CONFIG.animate : {}}
            transition={ANIMATION_CONFIG.transition}
            className="relative"
        >
            <div className="flex flex-col md:flex-row gap-8">
                {isOdd ? (
                    <>
                        <ImageGrid 
                            section={{
                                images: section.images,
                                title: section.title,
                                badge: section.badge
                            }}
                            index={section.index ?? 0}
                        />
                        <SectionContent section={section} />
                    </>
                ) : (
                    <>
                        <SectionContent section={section} />
                        <ImageGrid 
                            section={{
                                images: section.images,
                                title: section.title,
                                badge: section.badge
                            }}
                            index={section.index ?? 0}
                        />
                    </>
                )}
            </div>
        </motion.section>
    );
});

Section.displayName = 'Section';