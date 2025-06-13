    'use client';
    import { useEffect, useRef, useState, ReactNode, ElementType, CSSProperties, FC } from 'react';

    // Define the props type for the component
    interface ScrollAnimatorProps {
    as?: ElementType;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    }

    const ScrollAnimator: FC<ScrollAnimatorProps> = ({ as: Component = 'div', children, className = '', style = {} }) => {
    const [isVisible, setIsVisible] = useState(false);
    // Type the ref to be a generic HTMLElement. It can be any element type passed via the 'as' prop.
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // The IntersectionObserver constructor is a built-in browser API
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Once visible, we can stop observing
                observer.unobserve(entry.target);
            }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        const currentElement = elementRef.current;
        if (currentElement) {
        observer.observe(currentElement);
        }

        // Cleanup function to unobserve the element when the component unmounts
        return () => {
        if (currentElement) {
            observer.unobserve(currentElement);
        }
        };
    }, []);
    
    // Define CSS classes for the animation states
    const baseClasses = 'opacity-0 transform transition-opacity duration-1000 ease-out';
    const visibleClasses = 'opacity-100 translate-y-0';
    const hiddenClasses = 'translate-y-8';

    return (
        <Component
        ref={elementRef}
        className={`${className} ${baseClasses} ${isVisible ? visibleClasses : hiddenClasses}`}
        style={style}
        >
        {children}
        </Component>
    );
    }

    export default ScrollAnimator;
    // Usage example: