import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config";

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // shield protects app from common attacks
        shield({ mode: "LIVE" }), // block all bots except search engines

        // detects bots
        detectBot({
            mode: "LIVE",
            allow: [
                "CATEGORY:SEARCH_ENGINES"
                // Full list at: https://docs.arcjet.com/bot-list
            ]
        }), 

        // rate limiting
        tokenBucket({
            mode: "LIVE", // live mode for production
            refillRate: 30, // 5 tokens per second
            interval: 5,
            capacity: 20, // max 10 requests per second
        })
    ]
});
