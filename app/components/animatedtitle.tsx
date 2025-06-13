    'use client';
    import { useEffect, useRef, FC, ReactNode } from 'react';

    // Define the type for the component's props
    interface AnimatedTitleProps {
    children: ReactNode;
    }

    const AnimatedTitle: FC<AnimatedTitleProps> = ({ children }) => {
    // Specify the ref type as HTMLHeadingElement
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const title = titleRef.current;
        // Check if title exists and hasn't been animated yet
        if (title && !title.hasAttribute('data-animated')) {
            // Store the original innerHTML to preserve nested elements like <span>
            const originalHTML = title.innerHTML;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = originalHTML;

            // Clear the title element to rebuild it with animated characters
            title.innerHTML = '';
            title.setAttribute('data-animated', 'true');

            let charCount = 0;
            // Iterate over child nodes to handle both text and element nodes correctly
            Array.from(tempDiv.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent) { // Handle text nodes
                    node.textContent.split('').forEach(char => {
                        const span = document.createElement('span');
                        span.className = 'char';
                        // Use innerHTML for non-breaking space to prevent collapse
                        span.innerHTML = char === ' ' ? '&nbsp;' : char;
                        span.style.animationDelay = `${charCount * 25}ms`;
                        title.appendChild(span);
                        charCount++;
                    });
                } else if (node.nodeType === Node.ELEMENT_NODE) { // Handle element nodes (e.g., the accent color span)
                    const elementNode = node as HTMLElement;
                    const wrapper = elementNode.cloneNode(false) as HTMLElement;
                    if (elementNode.textContent) {
                        elementNode.textContent.split('').forEach(char => {
                            const span = document.createElement('span');
                            span.className = 'char';
                            span.innerHTML = char === ' ' ? '&nbsp;' : char;
                            span.style.animationDelay = `${charCount * 25}ms`;
                            wrapper.appendChild(span);
                            charCount++;
                        });
                    }
                    title.appendChild(wrapper);
                }
            });
        }
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <h2 ref={titleRef} className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight font-semibold">
        {children}
        </h2>
    );
    }

    export default AnimatedTitle;
