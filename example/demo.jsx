'use strict';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "./bootstrap.min.css";
import "./style.css";

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                loop: true,
                nav: false,
                dots: false,
                center: true,
                navText: ['<', '>'],
                items:1,
                stagePadding: 0,
                responsive:{
                    768:{
                        stagePadding: 100,
                        nav: true,
                    },
                    992:{
                        stagePadding: 150,
                        nav: true,
                    },
                    1200:{
                        stagePadding: 400,
                        nav: true,
                    }
                }
            },


            items: [
                <div className="owl-box" key={1}>
                    <img className="item" src="./example/img/top-game1.jpg"></img>
                    <div className="row no-gutters direction">
                        <div className="col-12 col-md-8">
                            <p className="content1">League of Legends</p>
                            <p className="content3">in the leagends of you play a full-fledged character,samming more intense sparks in the battle,nervous and exciting play!</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-center align-items-center">
                            <button type="button" className="btn play-button">PLAY NOW</button>
                        </div>
                    </div>

                </div>,
                <div className="owl-box" key={2}>
                    <img className="item" src="./example/img/top-game1.jpg"></img>
                    <div className="row no-gutters direction">
                        <div className="col-12 col-md-8">
                            <p className="content1">League of Legends</p>
                            <p className="content3">in the leagends of you play a full-fledged character,samming more intense sparks in the battle,nervous and exciting play!</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-center align-items-center">
                            <button type="button" className="btn play-button">PLAY NOW</button>
                        </div>
                    </div>

                </div>,
                <div className="owl-box" key={3}>
                    <img className="item" src="./example/img/top-game1.jpg"></img>
                    <div className="row no-gutters direction">
                        <div className="col-12 col-md-8">
                            <p className="content1">League of Legends</p>
                            <p className="content3">in the leagends of you play a full-fledged character,samming more intense sparks in the battle,nervous and exciting play!</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-center align-items-center">
                            <button type="button" className="btn play-button">PLAY NOW</button>
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

                <div className="box-area">
                    <div className="box-title">
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="content1">TOP GAMES</div>
                            </div>
                            <div className="col-12">
                                <div className="content2">The most exciting and fun game are here,so you can nerver stop!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-border-test1"></div>
                <div className="box-border-test2"></div>
                <div className="box-border-test3"></div>
                <div className="box-shadow-top"></div>
                <div className="box-shadow-bottom"></div>
            </div>
        );
    }
}

export default Demo;