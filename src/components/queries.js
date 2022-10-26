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

export const categoryQuery = () => {
    return client.query({
        query: gql`
            query Category {
                categories {
                    name
                    products {
                        id
                        name
                        inStock
                        gallery
                        prices {
                            currency {
                                symbol
                            }
                            amount
                        }
                    }
                }
            }
        `,
    });
};
