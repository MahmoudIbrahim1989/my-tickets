import { useEffect, useState, useRef } from 'react';

export const useSubLoad = (containerSelector, handleLoading = false) => {
    const [loaded, setLoaded] = useState(false);
    const elRef = useRef();

    useEffect(() => {
        let observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const { isIntersecting } = entry;

                    if (isIntersecting) {
                        setLoaded(true);
                        if (handleLoading === false) {
                            observer = observer.disconnect();
                        }
                    } else if (handleLoading) {
                        setLoaded(false);
                    }
                });
            },
            {
                root: document.querySelector(containerSelector),
                // rootMargin: "0px 0px 100px 0px" -- for example
            },
        );

        observer.observe(elRef.current);
    }, []);

    return [loaded, elRef];
};