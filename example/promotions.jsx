'use strict';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "./styles/bootstrap.min.css";
import "./styles/promotions.css";

class Promotions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                loop: true,
                nav: true,
                dots: false,
                navText: ['<', '>'],
                center: true,
                margin: 10,
                items: 1,
                responsive:{
                    0:{
                        nav: false,
                        stagePadding: 50,
                    },
                    576:{
                        nav: false,
                        stagePadding: 100,
                    },
                    768:{
                        margin: 30,
                        items: 3
                    },
                    992:{
                        margin: 30,
                        items: 3
                    },
                    1200:{
                        margin: 30,
                        items: 3
                    }
                }
            },

            items: [
                <div className="owl-box" key={1}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="./example/img/promotions/promotions-1.jpg"></img>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={2}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="./example/img/promotions/promotions-2.jpg"></img>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={3}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="./example/img/promotions/promotions-3.jpg"></img>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={4}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="./example/img/promotions/promotions-1.jpg"></img>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={5}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="./example/img/promotions/promotions-2.jpg"></img>
                        </div>
                    </div>
                </div>,
                <div className="owl-box" key={6}>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img className="item" src="./example/img/promotions/promotions-3.jpg"></img>
                        </div>
                    </div>
                </div>
            ],

        };
    }

    render() {
        return (
            <div className="promotions">
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

export default Promotions;