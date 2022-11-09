import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

// GET CURRENCIES
export const currenciesQuery = () => {
    return client.query({
        query: gql`
            query Currency {
                currencies {
                    label
                    symbol
                }
            }
        `,
    });
};

// GET CATEGORIES WITH PRODUCTS
export const categoryQuery = () => {
    return client.query({
        query: gql`
            query Category {
                categories {
                    name
                    products {
                        id
                        name
                        brand
                        inStock
                        gallery
                        prices {
                            currency {
                                symbol
                            }
                            amount
                        }
                        category
                    }
                }
            }
        `,
        fetchPolicy: "network-only",
    });
};

// GET PRODUCT DATA
export const productQuery = (productId) => {
    return client.query({
        query: gql`
            query Product {
                product(id:"${productId}") {
                    id
                    name
                    brand
                    description
                    prices {
                        currency {
                            symbol
                        }
                        amount
                        }
                    gallery
                    attributes {
                        id
                        name
                        type
                        items{
                        displayValue
                        value
                        id
                        }
                    }
                }
            }
        `,
        fetchPolicy: "network-only",
    });
};

// GET PRODUCTS ATTRIBUTES
export const productAttributesQuery = (productId) => {
    return client.query({
        query: gql`
        query Product {
            product(id:"${productId}") {
                attributes {
                    id
                    name
                    type
                    items{
                    displayValue
                    value
                    id
                    }
                }
            }
        }
    `,
        fetchPolicy: "network-only",
    });
};
