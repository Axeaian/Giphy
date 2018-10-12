import React from 'react';
import './Content.css';
import Dictionary from './Components/Dictionary'
import Random from './Components/Random';

const Content = ({ giphs, rand, newRand, udDef }) => {

    return (
        <div>
            <div className="wrapper">
                <div className="cont">
                    <h4>Urban Dictionary</h4>
                    <p className="comment">because other dictionaries are too mainstream</p>
                    {{ udDef }.udDef.length === 0 ? <p>No definitions found</p> : <Dictionary udDef={udDef} />}

                </div>
                <div className="cont">
                    <h4>Giphy</h4>
                    <p className="comment">A picture speaks a thousand words...</p>
                    {{ rand }.rand === undefined || { rand }.rand.length === 0 ? <p>No gifs found</p> : <Random gif={rand} newRand={newRand} />}
                </div>
                <div className="cont2">
                    <div>
                        <h4>More gifs from Giphy...</h4>
                        <div className="giphDisp" id="gifs">
                            {{ giphs }.giphs.map((test, i) =>
                                <img src={test.images.fixed_width.url} alt={i} key={i} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
