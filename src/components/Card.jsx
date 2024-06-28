import React from 'react';
import backgroundImage from '../asserts/Banner_Gradient.jpg';
import overlayImage from '../asserts/Banner_Background.png';
const Card = () => {
    return (
        <div
            className="relative rounded overflow-hidden shadow-lg bg-white"
            style={{
                width: '867.15px',
                height: 'auto',
            }}
        >
            
             <img
                src={backgroundImage}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                    zIndex: 2,
                    pointerEvents: 'none', 
                }}        
            />
            
            <div className="relative flex flex-col gap-3.74px bg-white bg-opacity-75 backdrop-blur-md h-full px-6 py-4" style={{ zIndex: 2,   justifyContent:'center', 
                        alignItems:'center'  }}>
                <img
                    src={overlayImage}
                    alt="Overlay"
                    className="relative w-full h-full object-cover"
                    style={{
                        zIndex: 2, 
                        pointerEvents: 'none',
                    }}
                />
                <div className="absolute" >
                    <div className="font-bold text-xl mb-2">Card Title</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
