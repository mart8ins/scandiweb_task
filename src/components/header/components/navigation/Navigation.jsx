import React, { Component } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { categoryAction } from "../../../../redux/actions/categories";
import { categoryProductsQuery } from "../../../queries";

class Navigation extends Component {
    componentDidMount() {
        this.fetchActiveCategoryData();
    }

    async fetchActiveCategoryData() {
        const { activeCategoryName, dispatch } = this.props;
        const data = await categoryProductsQuery(activeCategoryName);
        dispatch({
            type: categoryAction.SET__ACTIVE__CATEGORY,
            payload: {
                activeCategoryProducts: data.data.category.products,
                activeCategoryName,
            },
        });
    }

    render() {
        const { categoryNames, activeCategoryName, dispatch } = this.props;

        return (
            <div className="navigation">
                <div className="header__navigation">
                    {categoryNames &&
                        categoryNames.map((category) => {
                            return (
                                <div
                                    key={uuidv4()}
                                    className={`navigation__element ${
                                        activeCategoryName === category.name && "active__category__bottomBorder"
                                    }`}>
                                    <Link
                                        to={`/${category.name}`}
                                        onClick={async () => {
                                            const data = await categoryProductsQuery(category.name);
                                            dispatch({
                                                type: categoryAction.SET__ACTIVE__CATEGORY,
                                                payload: {
                                                    activeCategoryProducts: data.data.category.products,
                                                    activeCategoryName: category.name,
                                                },
                                            });
                                        }}
                                        className={`label ${activeCategoryName === category.name && "active__category__name"}`}>
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
