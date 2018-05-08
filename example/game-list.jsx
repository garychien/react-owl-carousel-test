'use strict';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "./styles/bootstrap.min.css";
import "./styles/game.css";

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                loop: true,
                nav: true,
                dots: false,
                navText: ['<', '>'],
                responsive:{
                    0:{
                        nav: false,
                        items: 2
                    },
                    576:{
                        nav: false,
                        items: 3
                    },
                    768:{
                        stagePadding: 15,
                        items: 4
                    },
                    992:{
                        stagePadding: 39,
                        items: 4
                    },
                    1200:{
                        items: 8
                    }
                }
            },

            items: [
                <div className="owl-box" key={1}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="./example/img/dash.jpg"></img>
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
                            <img className="item" src="./example/img/bluesea.jpg"></img>
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
                            <img className="item" src="./example/img/bikini.jpg"></img>
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
                            <img className="item" src="./example/img/zombie.jpg"></img>
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
                            <img className="item" src="./example/img/huga5x9.jpg"></img>
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
                            <img className="item" src="./example/img/kof.jpg"></img>
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
                            <img className="item" src="./example/img/kof5x9.jpg"></img>
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
                            <img className="item" src="./example/img/legend5x25.jpg"></img>
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
                            <img className="item" src="./example/img/naruto.jpg"></img>
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
                            <img className="item" src="./example/img/onepiece3x1.jpg"></img>
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
            <div className="game-list">
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