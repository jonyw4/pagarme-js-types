export interface PayableFindBody {
  // The payable ID. If not sent a
  id?: string;
  // A transaction ID to get all the payables.
  transactionId?: string;
  // Pagination option for transaction list. Number of transaction in a page
  count?: number;
  // Pagination option for transaction list. The page index.
  page?: number;
}
