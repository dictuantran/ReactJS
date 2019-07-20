import gql from "graphql-tag";

export const ShipOrder = gql`
    mutation($id: ID!, $shipped: Boolean!) {
        shipOrder(id: $id, shipped: $shipped) {
        id, shipped
    }
}`