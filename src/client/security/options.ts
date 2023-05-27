export interface SecurityEncryptOptions {
    // The card's holder name. Example: 'Pedro Paulo'
    card_holder_name: string;
    // The card's expiration date. Example: '1225' or '12/25'
    card_expiration_date: string;
    // The card's number. Example: '4111111111111111'
    card_number: string;
    // The card's cvv. Example: '543'
    card_cvv: string;
}