import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero min-h-screen min-w-[98.5vw]"
            style={{
                backgroundImage:
                    "url(https://wordsrated.com/wp-content/uploads/2022/02/Number-of-Books-Published-Per-Year.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content ">
               
                <div className='text-center'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;