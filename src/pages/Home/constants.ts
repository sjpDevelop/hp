export const ANIMATION_CONFIG = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
} as const;

export const INTERSECTION_OPTIONS = {
    triggerOnce: true,
    threshold: 0.1
} as const;
