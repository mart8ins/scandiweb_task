import { createContext, Component } from "react";
import { categoryQuery, currenciesQuery } from "./queries";

export const AppContext = createContext({});

export class AppContextProvider extends Component {
    state = {
        currencies: {
            data: [],
            active: {},
        },
        setActiveCurrency: (active) => {
            this.setState({
                currencies: {
                    ...this.state.currencies,
                    active: active,
                },
            });
        },
        categories: {
            data: [],
            active: {},
        },
        setActiveCategory: (active) => {
            this.setState({
                categories: {
                    ...this.state.categories,
                    active: active,
                },
            });
        },
        cart: {
            showCartOverlay: false,
            toogleCartView: () => {
                this.setState({
                    cart: {
                        ...this.state.cart,
                        showCartOverlay: !this.state.cart.showCartOverlay,
                    },
                });
            },
            items: [],
            addProductToCart: (product) => {
                this.setState({
                    cart: {
                        ...this.state.cart,
                        items: [...this.state.cart.items, product],
                    },
                });
            },
        },
    };

    componentDidMount() {
        this.getCategories();
        this.getCurrencies();
    }
    async getCategories() {
        const { data } = await categoryQuery();
        this.setState({
            categories: {
                data: data.categories,
                active: data.categories[0],
            },
        });
    }

    async getCurrencies() {
        const { data } = await currenciesQuery();
        this.setState({
            currencies: {
                data: data.currencies,
                active: data.currencies[0],
            },
        });
    }

    render() {
        return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
    }
}
export const AppContextConsumer = AppContext.Consumer;
