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
            addDefaultAttributeToCartitem: (cartItemId, attr) => {
                let itemIndex;
                const cartItems = this.state.cart.items;
                const cartItem = cartItems.filter((item, i) => {
                    if (cartItemId === item.cartItemId) {
                        itemIndex = i;
                        return item.cartItemId;
                    }
                })[0];
                if (cartItem) {
                    const newAttr = {
                        id: attr.id,
                        item: attr.items[0],
                    };
                    const exists = cartItem.selectedAttributes.findIndex((el) => el.id === newAttr.id) > -1;
                    if (!exists) {
                        cartItem.selectedAttributes.push(newAttr);
                    }
                    cartItems.splice(itemIndex, 1, cartItem);
                    this.setState({
                        ...this.state,
                        cart: {
                            ...this.state.cart,
                            items: cartItems,
                        },
                    });
                }
            },
            changeQuantityForItemInCart: (cartItemId, action) => {
                let itemIndex;
                let cartItems = this.state.cart.items;
                const cartItem = cartItems.filter((item, i) => {
                    if (cartItemId == item.cartItemId) {
                        itemIndex = i;
                        return item;
                    }
                })[0];
                if (cartItem) {
                    if (action == "increase") {
                        cartItem.quantity = cartItem.quantity + 1;
                        cartItems.splice(itemIndex, 1, cartItem);
                    }
                    if (action == "decrease") {
                        if (cartItem.quantity > 1) {
                            cartItem.quantity = cartItem.quantity - 1;
                            cartItems.splice(itemIndex, 1, cartItem);
                        } else {
                            cartItems.splice(itemIndex, 1);
                        }
                    }
                    this.setState({
                        ...this.state,
                        cart: {
                            ...this.state.cart,
                            items: cartItems,
                        },
                    });
                }
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
        // console.log(this.state.cart.items, "CART ITEMS");
        return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
    }
}
export const AppContextConsumer = AppContext.Consumer;
