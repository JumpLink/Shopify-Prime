/// <reference path="../typings/index.d.ts" />
import { BaseService, ListOptions, FieldOptions } from "./modules/base_service";
export { BaseService, ListOptions, FieldOptions };
export { Charges, Charge } from "./modules/charges";
export { ShopifyError } from "./modules/shopify_error";
export { RecurringCharges, RecurringCharge } from "./modules/recurring_charges";
export declare type AuthScope = ("read_content" | "write_content" | "read_themes" | "write_themes" | "read_products" | "write_products" | "read_customers" | "write_customers" | "read_orders" | "write_orders" | "read_script_tags" | "write_script_tags" | "read_fulfillments" | "write_fulfillments" | "read_shipping" | "write_shipping");
/**
 * Determines if an incoming page request is authentic.
 * @param querystring The collection of querystring parameters from the request.
 * @param shopifySecretKey Your app's secret key.
 * @returns a boolean indicating whether the request is authentic or not.
 */
export declare function isAuthenticRequest(querystring: {
    [index: string]: any;
}, shopifySecretKey: string): boolean;
/**
 * Determines if an incoming proxy page request is authentic.
 * @param querystring The collection of querystring parameters from the request.
 * @param shopifySecretKey Your app's secret key.
 * @returns a boolean indicating whether the request is authentic or not.
 */
export declare function isAuthenticProxyRequest(querystring: {
    [index: string]: any;
}, shopifySecretKey: string): boolean;
/**
 * Determines if an incoming webhook requeset is authentic.
 * @param headers Either an object containing the request's headers, or the X-Shopify-Hmac-SHA256 header string itself.
 * @param requestBody The entire request body as a string.
 * @param shopifySecretKey Your app's secret key.
 * @returns a boolean indicating whether the request is authentic or not.
 */
export declare function isAuthenticWebhook(headers: {
    [index: string]: any;
} | string, requestBody: string, shopifySecretKey: string): boolean;
/**
 * A convenience function that tries to ensure that a given URL is a valid Shopify store by checking the response headers for X-ShopId. This is an undocumented feature, use at your own risk.
 */
export declare function isValidShopifyDomain(shopifyDomain: string): Promise<boolean>;
/**
 * Builds an authorization URL for Shopify OAuth integration. Send your user to this URL where they'll be asked to accept installation of your Shopify app.
 * @param scopes An array of scope permissions that your app will need from the user.
 * @param shopifyDomain The user's Shopify URL.
 * @param shopifyApiKey Your app's API key. This is NOT your secret key.
 * @param redirectUrl An optional URL that the user will be sent to after integration. Override's the Shopify app's default redirect URL.
 * @param state An optional, random string value provided by your application which is unique for each authorization request. During the OAuth callback phase, your application should check that this value matches the one you provided to this method.
 */
export declare function buildAuthorizationUrl(scopes: AuthScope[], shopifyDomain: string, shopifyApiKey: string, redirectUrl?: string, state?: string): string;
/**
 * Finalizes app installation, generating a permanent access token for the user's store.
 * @param code The authorization code generated by Shopify, which should be a parameter named 'code' on the request querystring.
 * @param shopifyDomain The store's Shopify domain, which should be a parameter named 'shop' on the request querystring.
 * @param shopifyApiKey Your app's public API key.
 * @param shopifySecretKey Your app's secret key.
 * @returns The access token.
 */
export declare function authorize(code: string, shopDomain: string, shopifyApiKey: string, shopifySecretKey: string): Promise<string>;
