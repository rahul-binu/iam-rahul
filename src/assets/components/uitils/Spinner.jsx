import React, { useState, useEffect } from 'react';
// import { Spinner } from './Spinner'; // Replace 'Spinner' with your spinner component

const Page = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Set loading time to 2 seconds

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Set isLoading to true every time the component mounts
        setIsLoading(true);

        // Simulate loading delay with a timeout
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Set loading time to 2 seconds

        // Clean up the timer
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this effect runs only on mount

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <div>
                    hello world
                </div>
            )}
        </div>
    );
};

export default Page;
