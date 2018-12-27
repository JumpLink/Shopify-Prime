import { Address } from "./address";
import { ShopifyObject, ShopifyObjectResponse } from "./base";

export interface CustomerResult extends ShopifyObjectResponse {
    /** 
     * Indicates whether the customer has consented to be sent marketing material via email.
     */
    accepts_marketing: boolean;

    /** 
     * A list of addresses for the customer.
     */
    addresses?: Address[];

    /** 
     * The date and time when the customer was created. 
     */
    created_at: string;

    /** 
     * The three-letter code (ISO 4217 format) for the currency that the customer used when they paid for their last order. Defaults to the shop currency. Returns the shop currency for test orders.
     * (BETA)
     */
    currency: string;

    /** 
     * The default address for the customer.
     */
    default_address: Address;

    /**
     * The email address of the customer.
     */
    email: string | null;

    /**
     * The customer's first name.
     */
    first_name: string | null;

    /** 
     * The customer's last name.
     */
    last_name: string | null;

    /** 
     * The id of the customer's last order.
     */
    last_order_id: number;

    /** 
     * The name of the customer's last order. This is directly related to the Order's name field.
     */
    last_order_name: string;

    /**
     * The customer's identifier used with Multipass login
     */
    multipass_identifier: string | null;

    /** 
     * A note about the customer.
     */
    note: string | null;

    /**
     * The number of orders associated with this customer.
     */
    orders_count: number | null;

    /** 
     * The number of orders associated with this customer.
     */
    phone: string | null;

    /** 
     * The state of the customer in a shop. Known values are 'disabled', 'decline', 'invited' and 'enabled'.
     */
    state: string;

    /** 
     * Tags are additional short descriptors formatted as a string of comma-separated values.
     */
    tags: string;

    /** 
     * Indicates whether the customer should be charged taxes when placing orders. 
     */
    tax_exempt: boolean;

    /** 
     * The total amount of money that the customer has spent at the shop. Note: the Shopify API may return this as a string value.
     */
    total_spent: string;

    /** 
     * The date and time when the customer information was updated. 
     */
    updated_at: string;

    /** 
     * States whether or not the email address has been verified.
     */
    verified_email: boolean;
}

export interface Customer extends ShopifyObject {
    /** 
     * Indicates whether the customer has consented to be sent marketing material via email.
     */
    accepts_marketing?: boolean;

    /** 
     * A list of addresses for the customer.
     */
    addresses?: Address[];

    /** 
     * The date and time when the customer was created. 
     */
    created_at?: string;

    /** 
     * The three-letter code (ISO 4217 format) for the currency that the customer used when they paid for their last order. Defaults to the shop currency. Returns the shop currency for test orders.
     * (BETA)
     */
    currency?: string;

    /** 
     * The default address for the customer.
     */
    default_address?: Address;

    /**
     * The email address of the customer.
     */
    email?: string | null;

    /**
     * The customer's first name.
     */
    first_name?: string | null;

    /** 
     * The customer's last name.
     */
    last_name?: string | null;

    /** 
     * The id of the customer's last order.
     */
    last_order_id?: number;

    /** 
     * The name of the customer's last order. This is directly related to the Order's name field.
     */
    last_order_name?: string;

    /**
     * The customer's identifier used with Multipass login
     */
    multipass_identifier?: string | null;

    /** 
     * A note about the customer.
     */
    note?: string | null;

    /**
     * The number of orders associated with this customer.
     */
    orders_count?: number | null;

    /** 
     * The number of orders associated with this customer.
     */
    phone?: string | null;

    /** 
     * The state of the customer in a shop. Known values are 'disabled', 'decline', 'invited' and 'enabled'.
     */
    state?: string;

    /** 
     * Tags are additional short descriptors formatted as a string of comma-separated values.
     */
    tags?: string;

    /** 
     * Indicates whether the customer should be charged taxes when placing orders. 
     */
    tax_exempt?: boolean;

    /** 
     * The total amount of money that the customer has spent at the shop. Note: the Shopify API may return this as a string value.
     */
    total_spent?: string;

    /** 
     * The date and time when the customer information was updated. 
     */
    updated_at?: string;

    /** 
     * States whether or not the email address has been verified.
     */
    verified_email?: boolean;
}