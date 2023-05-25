export interface SubscriptionAllOptions {
    // Pagination option to get a list of subscriptions. Number of subscriptions in a page
    count?: number;
    // Pagination option for a list of subscriptions. The page index.
    page?: number;
}

export interface SubscriptionCancelOptions {
    // The subscription's ID
    id: number;
}

export interface SubscriptionCreateTransactionOptions {
    // The subscription's ID
    id: number;
}

export interface SubscriptionFindOptions {
    // The subscription's ID. If not sent a subscriptions list will be returned instead.
    id?: number;
    // Pagination option to get a list of subscriptions. Number of subscriptions in a page
    count?: number;
    // Pagination option for a list of subscriptions. The page index.
    page?: number;
}

export interface SubscriptionFindTransactionsOptions {
    // The subscription's ID
    id: number;
}

export interface SubscriptionSettleChargeOptions {
    // The subscription's ID
    id: number;
}

export interface SubscriptionUpdateOptions {
    // The subscription's ID
    id: number;
}