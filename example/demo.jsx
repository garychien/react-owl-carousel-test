'use strict';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "./style.css";
import "./bootstrap.min.css";

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                loop: true,
                // margin:5,
                nav: true,
                dots: false,
                // autoplay: true,
                items: 3,
                // center: true,
                // navClass: ['prev', 'next'],
                navText: ['<', '>']
            },


            items: [
                <div className="owl-box" key={1}>
                    <img className="item" src="http://s.amazeui.org/media/i/demos/bing-1.jpg"></img>
                    <div className="direction row">
                        <div className="col-8 direction-word">
                            <p>League of Legends</p>
                            <p>in the leagends of you play a full-fledged character,samming more intense sparks in the battle,nervous and exciting play!</p>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <button type="button" className="btn play-button">PLAY NOW</button>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={2}>
                    <img className="item" src="http://s.amazeui.org/media/i/demos/bing-2.jpg"></img>
                    <div className="direction row">
                        <div className="col-8 direction-word">
                            <p>League of Legends</p>
                            <p>samming more intense sparks in the battle!</p>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <button type="button" className="btn play-button">PLAY NOW</button>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={3}>
                    <img className="item" src="http://s.amazeui.org/media/i/demos/bing-3.jpg"></img>
                    <div className="direction row">
                        <div className="col-8 direction-word">
                            <p>I'm Legends</p>
                            <p>nervous and exciting play,come and enjoy the game!</p>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <button type="button" className="btn play-button">PLAY NOW</button>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={4}>
                    <img className="item" src="http://s.amazeui.org/media/i/demos/bing-4.jpg"></img>
                    <div className="direction row">
                        <div className="col-8 direction-word">
                            <p>League of Legends</p>
                            <p>in the leagends of you play a full-fledged character!</p>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <button type="button" className="btn play-button">PLAY NOW</button>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={5}>
                    <img className="item" src="http://s.amazeui.org/media/i/demos/bing-4.jpg"></img>
                    <div className="direction row">
                        <div className="col-8 direction-word">
                            <p>League of Legends</p>
                            <p>enjoy the game!</p>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <button type="button" className="btn play-button">PLAY NOW</button>
                        </div>
                    </div>
                </div>,

            ],

        };
    }

    render() {
        return (
            <div className="slider-img">
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>

                <div className="box-area">
                    <div className="box-title">
                        <h3 className="content1">TOP GAMES</h3>
                        <h5 className="content2">The most exciting and fun game are here!</h5>
                    </div>
                    <div className="box-border-test1"></div>
                    <div className="box-border-test2"></div>
                    <div className="box-border-test3"></div>
                </div>
            </div>
        );
    }
}

export default Demo;