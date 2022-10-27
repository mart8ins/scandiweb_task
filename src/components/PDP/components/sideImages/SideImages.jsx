import React, { Component } from "react";
import "./sideImages.css";

class SideImages extends Component {
    render() {
        const { images } = this.props;
        return (
            <div className="side__images__container">
                {images &&
                    images.map((image, i) => {
                        return <img key={`image-${i}`} className="side__image" src={image} alt="Product" />;
                    })}
            </div>
        );
    }
}

export default SideImages;
