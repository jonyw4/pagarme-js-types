export interface PostbacksFindOptions {
    // The operation ID. 
    id?: number;
    // A transaction ID to get all the operations.
    transactionId?: number;
    // A subscription ID
    subscriptionId?: number;
}