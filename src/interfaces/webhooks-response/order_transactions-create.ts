import { PaymentDetails } from "../payment_details";

export interface Receipt {
}

/**
 * TODO check if we can reuse interfaces from model in this interfaces
 */
export interface WebhookOrderTransactionCreate {
    id: number;
    order_id: number;
    kind: string;
    gateway: string;
    status: string;
    message?: any;
    created_at: Date;
    test: boolean;
    authorization: string;
    location_id?: any;
    user_id?: any;
    parent_id?: any;
    processed_at?: any;
    device_id?: any;
    receipt: Receipt;
    error_code?: any;
    source_name: string;
    amount: string;
    currency?: any;
    admin_graphql_api_id: string;
    payment_details: PaymentDetails;
}


