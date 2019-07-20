import { graphql, compose } from "react-apollo";
import { OrdersSummaryQuery } from "../queries/ClientQueries";
import { OrdersTable } from "../order/OrdersTable";
import { ShipOrder } from "../queries/ClientMutations";

const vars = {
    onlyShipped: false, page: 1, pageSize: 10, sort: "id"
}

export const OrdersConnector = compose(
    graphql(OrdersSummaryQuery, 
    {
        options: (props) => ({variables: vars}),
        props: ({data: {loading, orders, refetch}}) => ({
            totalSize: loading ? 0 : orders.totalSize,
            orders: loading ? []: orders.orders,
            currentPage: vars.page,
            pageCount: loading ? 0 : Math.ceil(orders.totalSize / vars.pageSize),
            navigateToPage: (page) => { vars.page = Number(page); refetch(vars)},
            pageSize: vars.pageSize,
            setPageSize: (size) => { vars.pageSize = Number(size); refetch(vars)},
            sortKey: vars.sort,
            setSortProperty: (key) => { vars.sort = key; refetch(vars)},
        }),                
    }),
    graphql(ShipOrder, {
        props: ({ mutate }) => ({
            toggleShipped: (id, shipped) => mutate({ variables: { id, shipped }})
        })
    })
)(OrdersTable);