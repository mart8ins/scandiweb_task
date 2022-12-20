import React, { Component } from "react";
import "./detailsImages.css";
import { v4 as uuidv4 } from "uuid";

class DetailsImages extends Component {
    state = {
        images: [],
        mainImage: "",
    };

    componentDidMount() {
        const { images } = this.props;
        if (images) {
            if (images.length > 1) {
                const sliced = images.slice(1);
                return this.setState({
                    images: sliced,
                    mainImage: images[0],
                });
            }
            this.setState({
                images: images,
                mainImage: images[0],
            });
        }
    }

    componentDidUpdate() {
        if (this.state.images.length === 0) {
            const { images } = this.props;
            if (images.length > 1) {
                const sliced = images.slice(1);
                return this.setState({
                    images: sliced,
                    mainImage: images[0],
                });
            }
            this.setState({
                images: images,
                mainImage: images[0],
            });
        }
    }

    changeMainImage(i) {
        const indexOfClickedImage = i;
        const newMain = this.state.images[indexOfClickedImage];
        const newImages = this.state.images;
        newImages[i] = this.state.mainImage;
        this.setState({
            mainImage: newMain,
            images: newImages,
        });
    }

    render() {
        return (
            <div className="images__container">
                <div className="side__images__container">
                    {this.state.images &&
                        this.state.images.length > 1 &&
                        this.state.images.map((image, i) => {
                            return (
                                <img
                                    onClick={() => this.changeMainImage(i)}
                                    key={uuidv4()}
                                    className="side__image"
                                    src={image}
                                    alt={`Product - ${image}`}
                                />
                            );
                        })}
                </div>
                <div className="main__image__view">
                    <img className="main__image" src={this.state.mainImage} alt={`Product- ${this.state.mainImage}`} />
                </div>
            </div>
        );
    }
}

export default DetailsImages;
