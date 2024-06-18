---
sidebar_position: 5
---
# Risk Management
When using the Bridgesplit Protocol, it's important to understand and manage the financial and operational risks invovled. THis page outlines key risks to consider and provides guidance on mitigating them. Some of these risks apply only to borrowers or only to lenders.
## Financial Risks
### Interest Rate Risk
Interest rate risk arises from the potential for market rates to diverge from the fixed rate of your loan over time. Borrowing or lending at a fixed rate for a specific duration may result in your loan being more expensive or cheaper than the prevailing market rate. The sensitivity to interest rate changes increases with loan duration.

### Liquidity Risk
The diverse range of collateral accepted by Bridgesplit can expose users to liquidity risk. Different tokens have varying levels of underlying liquidity and availability across trading venues. This risk of illiquidity of collateral should be considered when lending.

### Liquidation Risk
Loans on Bridgesplit are subject to both price and payment-based liquidations. If the collateral value relative to the principal plus accrued interest falls below the liquidation threshold, the collateral may be seized. In such cases, repayments made will be forfeited, and the collateral will be transferred to the liquidator. Borrowers should closely monitor their loan's health ratio, as a ratio of 0% indicates eligibility for liquidation. To avoid liquidation, borrowers can repay a portion of the loan or add more collateral.

### Asset Counterparty Risks
Assets you are borrowing or using as collateral have underlying risks such as depegs, team risks, market risks, and concentration risks. Pick the assets you transact in wisely and understand that Bridgesplit does not control many of the factors that impact most of these assets. If a specific asset issuer blacklists you or the Bridgesplit Protocol there may be disruption of service.

Assets used for borrowing or collateral are subject to various risks, including depegs, team risks, market risks, and concentration risks. For example, Stablecoins used in Bridgesplit, such as USDC, may experience price deviations from their intended peg (usually 1 USD). As tokens are priced in USD, a depeg can lead to a devaluation of cash or present value of assets. This, in turn, may reduce a borrower's health factor and increase liquidation risk. It's essential to carefully select assets and understand that Bridgesplit does not control many of the factors impacting these assets. If an asset issuer blacklists a user or the Bridgesplit Protocol, service disruptions may occur.


## Operational Risks
### Smart Contract Risk
Contracts inherently risk containing vulnerabilities that can be exploited by attackers, including compromised or manipulated external dependencies and economic incentive. All Bridgesplit Protocol contracts are currently under audit. Upon completion of these audits and the open-sourcing of the protocol, a bug bounty program will be established.

### Oracle Price Risk
Any Bridgesplit loan may be connected to an oracle, as established by the borrower or lender in the initial order. For all loans on Bridgesplit Markets, [the connected oracles]("/docs/concepts/markets/asset-parameters") have been determined by the Bridgesplit team. All oracles are subject to price manipulation or incorrect inputs, falsely reducing or increasing asset values, leading to premature liquidations or bad debt. Oracle quality, including safety, liveness, centralized control, and precision and frequency of price updates, should be considered in assessing risk.