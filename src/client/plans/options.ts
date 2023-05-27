export interface PlansAllOptions {
    // Pagination option to get a list of plans. Number of plans in a page
    count?: number;
    // Pagination option for a list of plans. The page index.
    page?: number;
}

export interface PlansFindOptions {
    // The plan's ID. If not sent a plans list will be returned instead.
    id?: number;
    // Pagination option to get a list of plans. Number of plans in a page
    count?: number;
    // Pagination option for a list of plans. The page index.
    page?: number;
}

export interface PlansUpdateOptions {
    // The plan's ID
    id?: number;
    // The plan's name
    name?: string;
    // The number of days to test the plan with no charges
    trial_days?: number;
}
