import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="hero min-h-[80vh] min-w-[98.5vw]"
            style={{
                backgroundImage:
                    "url(https://wordsrated.com/wp-content/uploads/2022/02/Number-of-Books-Published-Per-Year.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content ">
               
                <div className='text-center'>
                    <h1 className="text-5xl font-bold text-white">Start Your Amazing Reading Experience</h1>
                    <p className="py-6 text-[#eee4e4]">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to="/books" className="btn btn-primary">Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;