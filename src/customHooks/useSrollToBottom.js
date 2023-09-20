import { useEffect, useState } from "react";

const useSrollToBottom = () => {
    const [scrolledToBottom, setScrolledToBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 100
            ) {
                if (!scrolledToBottom) {
                    setScrolledToBottom(true);
                }
            } else {
                if (scrolledToBottom) {
                    setScrolledToBottom(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolledToBottom]);

    return scrolledToBottom;
};

export default useSrollToBottom;
