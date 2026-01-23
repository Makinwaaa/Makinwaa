import React, { useRef, useEffect, ReactNode } from 'react';

// Define component props interface
interface AutoScrollWrapperProps {
    children: ReactNode;
    speed?: 'slow' | 'medium' | 'fast';
    className?: string;
}

const AutoScrollWrapper: React.FC<AutoScrollWrapperProps> = ({ 
    children, 
    speed = 'medium', 
    className = '' 
}) => {
    // Use HTMLDivElement for the ref type
    const scrollRef = useRef<HTMLDivElement>(null); 
    const animationFrameRef = useRef<number | null>(null);

    // Define scroll speed in pixels per frame
    const getScrollRate = (): number => {
        switch (speed) {
            case 'slow':
                return 0.25; 
            case 'fast':
                return 1.5;
            case 'medium':
            default:
                return 0.75;
        }
    };

    const animateScroll = (): void => {
        const scrollContainer = scrollRef.current;
        const scrollRate = getScrollRate();

        if (scrollContainer) {
            // 1. Move the scroll position
            scrollContainer.scrollLeft += scrollRate;

            // 2. Check for end condition
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            // Use a tolerance value (e.g., 1px) because scrollLeft can sometimes exceed maxScrollLeft slightly
            if (scrollContainer.scrollLeft >= maxScrollLeft - 1) { 
                // Instantly jump back to the beginning (0)
                scrollContainer.scrollLeft = 0;
            }
        }

        // Request the next frame
        animationFrameRef.current = requestAnimationFrame(animateScroll);
    };

    useEffect(() => {
        // Start the animation loop
        animationFrameRef.current = requestAnimationFrame(animateScroll);

        // Cleanup function: stop the animation when the component unmounts
        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [speed]); // Re-run effect if speed changes

    const outerClasses = `w-full overflow-hidden ${className}`;

    return (
        <div className={outerClasses}>
            {/* The inner container: Only uses the original content */}
            <div 
                ref={scrollRef}
                // We keep overflow-x-scroll active but hide the scrollbar with 'no-scrollbar'
                className="flex flex-row flex-nowrap space-x-8 overflow-x-scroll no-scrollbar" 
                style={{ scrollBehavior: 'auto' }} // Crucial for immediate reset
            >
                {children}
            </div>
        </div>
    );
};

export default AutoScrollWrapper;