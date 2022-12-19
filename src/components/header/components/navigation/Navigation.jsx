import React, { Component } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { categoryAction } from "../../../../redux/actions/categories";

class Navigation extends Component {
    render() {
        const { data, active, dispatch } = this.props;
        return (
            <div className="navigation">
                <div className="header__navigation">
                    {data &&
                        data.map((category) => {
                            return (
                                <div
                                    key={uuidv4()}
                                    className={`navigation__element ${active.name === category.name && "active__category__bottomBorder"}`}>
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            dispatch({
                                                type: categoryAction.SET__ACTIVE__CATEGORY,
                                                payload: category,
                                            });
                                        }}
                                        className={`label ${active.name === category.name && "active__category__name"}`}>
                                        {category.name}
                                    </Link>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.categoryReducer;
};
export default connect(mapStateToProps)(Navigation);
