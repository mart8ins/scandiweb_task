import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

// GET CATEGORY NAMES
export const categoryNamesQuery = () => {
    return client.query({
        query: gql`
            query Category {
                categories {
                    name
                }
            }
        `,
    });
};

export const categoryProductsQuery = (categoryId) => {
    return client.query({
        query: gql`
            query Category {
                category(input: {title: "${categoryId}"}) {
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
    });
};

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

// GET PRODUCT DATA
export const productQuery = (productId) => {
    return client.query({
        query: gql`
            query Product {
                product(id:"${productId}") {
                    id
                    name
                    inStock
                    gallery
                    description
                    category
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
                    prices {
                        currency {
                            symbol
                        }
                        amount
                        }
                    brand
                }
            }
        `,
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
