export interface SubscriptionAllBody {
    // Pagination option to get a list of subscriptions. Number of subscriptions in a page
    count?: number;
    // Pagination option for a list of subscriptions. The page index.
    page?: number;
}

export interface SubscriptionCancelBody {
    // The subscription's ID
    id: number;
}

export interface SubscriptionCreateTransactionBody {
    // The subscription's ID
    id: number;
}

export interface SubscriptionFindBody {
    // The subscription's ID. If not sent a subscriptions list will be returned instead.
    id?: number;
    // Pagination option to get a list of subscriptions. Number of subscriptions in a page
    count?: number;
    // Pagination option for a list of subscriptions. The page index.
    page?: number;
}

export interface SubscriptionFindTransactionsBody {
    // The subscription's ID
    id: number;
}

export interface SubscriptionSettleChargeBody {
    // The subscription's ID
    id: number;
}

export interface SubscriptionUpdateBody {
    // The subscription's ID
    id: number;
}