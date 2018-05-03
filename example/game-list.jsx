'use strict';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "./game.css";
import "./bootstrap.min.css";

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                loop: true,
                nav: true,
                dots: false,
                // center: true,
                items: 8,
                navText: ['<', '>']
            },

            items: [
                <div className="owl-box" key={1}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-1.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title1</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★</div>
                        </div>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={2}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-2.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title2</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★ ★</div>
                        </div>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={3}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-3.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title3</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★ ★ ★</div>
                        </div>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={4}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-4.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title4</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★ ★ ★ ★</div>
                        </div>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={5}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-1.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title5</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★ ★ ★ ★ ★</div>
                        </div>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={6}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-2.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title6</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★ ★ ★ ★</div>
                        </div>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={7}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-3.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title7</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★ ★ ★</div>
                        </div>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={8}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-4.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title8</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★ ★</div>
                        </div>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={9}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-1.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title9</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★</div>
                        </div>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={10}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="http://s.amazeui.org/media/i/demos/bing-2.jpg"></img>
                        </div>
                        <div className="col-12">
                            <div className="row direction no-gutters">
                            <div className="col-12 d-flex justify-content-center align-items-end">Game Title10</div>
                            <div className="col-12 d-flex justify-content-center align-items-start game-star">★ ★</div>
                        </div>
                        </div>
                    </div>
                </div>
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
            </div>
        );
    }
}

export default Demo;