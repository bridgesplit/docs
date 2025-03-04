---
sidebar_position: 8
---
`
# Asset Parameters
`
Borrowers and lenders on Loopscale interact via virtualized [Credit Order Book](/concepts/protocol-concepts/credit-order-book) with standardized terms including principal and collateral options, principal and collateral oracles, and loan terms. These standardized terms are available below.

## Duration

Duration is how long a loan lasts (and its corresponding fixed rate). Available duration options for Loans on Loopscale are:
- 1 day
- 1 week
- 1 month
- 3 months

## LTV

Loan-to-Value (LTV) is the ratio of a loan amount to the value of the collateral. Loopscale can offer better LTVs because collateral is isolated and not pooled with other assets. Generally, riskier assets have lower max LTV ratios.

## Fees

<!-- TODO: what fees are we doing that are asset parameters? any? is it a capability? -->

## Oracle

<!-- TODO -->



## Payments

<!-- TODO -->



## Principal
The following assets are eligible to be used as principal (the borrowed asset) on Loopscale.
<!-- TODO: update this list -->

| Asset | Oracle |
|:--|--:|
|[USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) |Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD |
|[USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) |3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL |
|[SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) |H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG |
|[EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) |91Sfpm86H7ZgngdGfAiVJTNbg42CXBPiurruf29kinMh |
|[BONK](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) |8ihFLu5FimgTQ1Unh4dVyEHUGodJ5gJQCrQf4KUVB9bN |
|[WEN](https://solscan.io/token/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk)|6Uo93N83iF5U9KwC8eQpogx4XptMT4wSKfje7hB1Ufko |

## Collateral
Loopscale technically supports any Solana token as collateral. Currently supported collateral options are always increasing, so refer to the app for the most up to date list of collateral options. 

<!-- TODO: add link -->