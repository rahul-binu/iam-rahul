import React, { useState, useEffect } from 'react';

const Message = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500); // 3000 milliseconds (3 seconds)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`load-message ${isVisible ? 'visible' : 'hidden'}`}>
           Please switch to desktop for an optimal browsing experience. Domain setup coming soon!
           </div>
    );
};

export default Message;
