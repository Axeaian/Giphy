import React from 'react';
import './Random.css'

const Random = ({ gif, newRand }) => {
    return (
        <div>
            {/* {console.log(gif)} */}
            {gif !== undefined &&
                <div className="rand">
                    <h6>~{gif.title}</h6>
                    < img src={gif.images.original.url} alt="" onClick={newRand} />

                </div>
            }
        </div>
    );
}

export default Random;
