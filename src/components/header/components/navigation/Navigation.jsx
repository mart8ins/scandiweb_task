import React, { Component } from "react";
import { connect } from "react-redux";
import { categoryAction } from "../../../../redux/actions/categories";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./navigation.css";

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
                                    className="navigation__element"
                                    style={{
                                        borderBottom: active.name === category.name && "2px solid #5ece7b",
                                    }}>
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            dispatch({
                                                type: categoryAction.SET__ACTIVE__CATEGORY,
                                                payload: category,
                                            });
                                        }}
                                        className="label"
                                        style={{
                                            color: active.name === category.name && "#5ece7b",
                                        }}>
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
