export interface EventsFindCustomOptions {
    // The event ID.
    id?: number;
    // A transaction ID to get all the events.
    transactionId?: number;
    // Pagination option for transaction list. Number of transaction in a page
    count?: number;
    // Pagination option for transaction list. The page index.
    page?: number;
}