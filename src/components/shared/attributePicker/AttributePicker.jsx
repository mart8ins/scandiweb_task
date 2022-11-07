import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./attributePicker.css";
import SwatchType from "./components/swatchType/SwatchType";
import TextType from "./components/textType/TextType";

class AttributePicker extends Component {
    render() {
        const { attributes, selectedAttributes, forType } = this.props;
        return (
            <div className={`attribute__picker__container ${forType && "attribute__picker__container__" + forType}`}>
                {attributes &&
                    attributes.map((attribute, i) => {
                        if (attribute.type === "text") {
                            return (
                                <div key={uuidv4()} className={`attribute__picker ${forType && "attribute__picker__" + forType}`}>
                                    <TextType attribute={attribute} selectedAttributes={selectedAttributes} forType={forType} />
                                </div>
                            );
                        }
                        if (attribute.type === "swatch") {
                            return (
                                <div
                                    key={uuidv4()}
                                    className={`attribute__picker ${forType && forType === "overlay" && "attribute__picker__overlay"}`}>
                                    <SwatchType attribute={attribute} selectedAttributes={selectedAttributes} forType={forType} />
                                </div>
                            );
                        }
                    })}
            </div>
        );
    }
}

export default AttributePicker;
