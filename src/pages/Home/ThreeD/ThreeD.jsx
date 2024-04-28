import React, { useEffect } from 'react';
import TagCloud from 'TagCloud'; // Assuming TagCloud is a valid package or component

const ThreeD = () => {
    useEffect(() => {
        // Your TagCloud initialization code
        const container = '.tagcloud';
        const texts = [
            '3D', 'TagCloud', 'JavaScript',
            'CSS3', 'Animation', 'Interactive',
            'Mouse', 'Rolling', 'Sphere',
            '6KB', 'v2.x',
        ];
        const options = {};
        
        TagCloud(container, texts, options);
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="flex justify-center">
            
            <div className="tagcloud">
                {/* TagCloud content will be generated here */}
            </div>
           
        </div>
    );
};

export default ThreeD;
