---
sidebar_position: 3
---
# Collateral Accounts
Collateral Accounts represent another significant difference between the Bridgesplit Protocol and other lending protocols. Unlike pool-based models where collateral is pooled and rehypothecated, collateral is deposited to a loan-specific, programmatically-controlled Collateral Account for the duration of the loan. Collateral on Bridgesplit is not rehypothecated and remains non-transferable for the duration of the loan. This approach offers two key benefits.

## Collateral Eligibility
The absence of collateral segregation on other lending protocols limits the diversity of eligible collateral. 

Segregated Collateral Accounts ensures the collateral risk for a particular loan is isolated to the lender, who may set collateral eligibility criteria and collateral-specific rates. In the event of a default, the collateral (or principal if liquidated) is returned to the lender.

This means that any asset can be used as collateral so long as there is a willing lender. The Bridgesplit protocol supports complex collateral types including yield-bearing tokens such as natively staked SOL, liquidity provider positions such as Orca LP positions, and "real-world" assets such as tokenized funds or physical goods.

## Minimized Risk
Pool-based models blend risk across all assets, making it more challenging to accurately price the risk associated with individual collateral assets. This approach has led to some of the most significant exploits in DeFi and results in substantial inefficiencies in pricing, as lenders must account for the risk of a diverse collateral base uniformly. An issue with one asset can have cascading effects across all assets, driving up the cost of borrowing against less volatile assets.

Because collateral is segregated, liquidation risk is constrained to a single loan and non-rehypothecation eliminates the risk of liquidity mismatches.