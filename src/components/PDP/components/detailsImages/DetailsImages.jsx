import React, { Component } from "react";
import "./detailsImages.css";

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
        if (this.state.images.length == 0) {
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
                                    key={`image-${i}`}
                                    className="side__image"
                                    src={image}
                                    alt="Product image option"
                                />
                            );
                        })}
                </div>
                <img className="main__image__view" src={this.state.mainImage} alt="Product main image" />
            </div>
        );
    }
}

export default DetailsImages;
