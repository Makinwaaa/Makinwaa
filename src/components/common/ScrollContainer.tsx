import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface ScrollContainerProps {
    children: React.ReactNode;
    className?: string; // Optional className for styling
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children, className }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname]);

    return (
        <div ref={scrollRef} className={`overflow-auto h-full ${className}`}>
            {children}
        </div>
    );
};

export default ScrollContainer;
