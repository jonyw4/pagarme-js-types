export interface PaymentLinksAllOptions {
    // Pagination option for paymentLink list. Number of paymentLink in a page
    count?: number;
    // Pagination option for paymentLink list. The page index.
    page?: number;
}

export interface PaymentLinksCancelOptions {
    // The paymentLink ID.
    id: number;
}

export interface PaymentLinksCreateOptions {
    // Name
    name: string;
    // Value in BRL cents
    amount: number;
    // Items of purchase
    items: object[];
    // Payment methos configurations
    payment_config: object;
}

export interface PaymentLinksFindOptions {
    // The paymentLink ID. If not sent a paymentLink list will be returned instead.
    id?: number;
    // Pagination option for paymentLink list. Number of paymentLink in a page
    count?: number;
    // Pagination option for paymentLink list. The page index.
    page?: number;
}