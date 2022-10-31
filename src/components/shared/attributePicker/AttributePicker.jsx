import React, { Component } from "react";
import "./attributePicker.css";
import SwatchType from "./components/swatchType/SwatchType";
import TextType from "./components/textType/TextType";

class AttributePicker extends Component {
    render() {
        const { attributes, forType } = this.props;
        return (
            <div className={`attribute__picker__container ${forType && forType === "overlay" && "attribute__picker__container__overlay"}`}>
                {attributes &&
                    attributes.map((attribute, i) => {
                        if (attribute.type === "text") {
                            return (
                                <div
                                    key={"attr-text-" + i}
                                    className={`attribute__picker ${forType && forType === "overlay" && "attribute__picker__overlay"}`}>
                                    <TextType attribute={attribute} forType={forType} />
                                </div>
                            );
                        }
                        if (attribute.type === "swatch") {
                            return (
                                <div
                                    key={"attr-swatch-" + i}
                                    className={`attribute__picker ${forType && forType === "overlay" && "attribute__picker__overlay"}`}>
                                    <SwatchType attribute={attribute} forType={forType} />
                                </div>
                            );
                        }
                    })}
            </div>
        );
    }
}

export default AttributePicker;
