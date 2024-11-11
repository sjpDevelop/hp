export interface Section {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
    badge: 'Marketing' | 'Event' | 'Operation';
    index?: number;
}

export type SectionPosition = 'left' | 'right';

export interface ImageGridProps {
    section: Pick<Section, 'images' | 'title' | 'badge'>;
    index: number;
}
