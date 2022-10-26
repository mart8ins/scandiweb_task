import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { AppContext } from "../../../context.js";

class Navigation extends Component {
    render() {
        const { data, active } = this.context.categories;
        const { setActiveCategory } = this.context;

        return (
            <div className="navigation">
                <div className="header__navigation">
                    {data &&
                        data.map((category) => {
                            return (
                                <div key={category.name} className="navigation__element">
                                    <div className="label__container">
                                        <Link
                                            to="/"
                                            onClick={() => {
                                                this.setState({ active: category.name });
                                                setActiveCategory(category);
                                            }}
                                            className="label"
                                            style={{ color: active.name === category.name && "#5ece7b" }}>
                                            {category.name}
                                        </Link>
                                        {active.name === category.name && <div className="border"></div>}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
Navigation.contextType = AppContext;

export default Navigation;
