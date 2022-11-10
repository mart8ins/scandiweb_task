import React, { Component } from "react";
import "./imageSlide.css";

import arrow_left from "../../../../../icons/Vector-arrow-left.svg";
import arrow_right from "../../../../../icons/Vector-arrow-right.svg";

class ImageSlide extends Component {
    state = {
        activeImage: this.props.gallery[0],
        activeIndex: 0,
        gallery: this.props.gallery,
        length: this.props.gallery.length - 1,
    };

    componentDidMount() {
        this.setState({
            activeImage: this.props.gallery[0],
            activeIndex: 0,
            gallery: this.props.gallery,
            length: this.props.gallery.length - 1,
        });
    }

    slideRight = () => {
        let newIndex;
        if (this.state.activeIndex < this.state.length) {
            newIndex = this.state.activeIndex + 1;
            this.setState({
                ...this.state,
                activeImage: this.props.gallery[newIndex],
                activeIndex: newIndex,
            });
        }
    };

    slideLeft = () => {
        let newIndex;
        if (this.state.activeIndex > 0) {
            newIndex = this.state.activeIndex - 1;
            this.setState({
                ...this.state,
                activeImage: this.props.gallery[newIndex],
                activeIndex: newIndex,
            });
        }
    };
    render() {
        return (
            <div className="item__image__container">
                <img src={this.state.activeImage} />
                {this.state.gallery && this.state.gallery.length > 1 && (
                    <div className="change__image">
                        <div className="image__to__left" onClick={this.slideLeft}>
                            <div className="vector__container" onClick={this.slideLeft}>
                                <img className="arrow" src={arrow_left} alt="Change image" />
                            </div>
                        </div>
                        <div className="image__to__right" onClick={this.slideRight}>
                            <div className="vector__container">
                                <img className="arrow" src={arrow_right} alt="Change image" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ImageSlide;
