---
sidebar_position: 2
---

# Loans
A loan is created when a Lend Order matches with a compatible Borrow Order on the Credit Order Book. These orders specify terms of the requested loan, including:
- Principal (Asset, Max Amount)
- Collateral (Asset, Amount)
- Terms (Interest Rate, Repayment Schedule)
- Default Condition (Principal Oracle, Collateral Oracle, or Liquidiation LTV)


## Orders
To create a more familiar experience for DeFi users, the Loopscale App exposes only a subset of user creation flows.
1. To allow for instant liquidity, lenders place Lend Limit Orders (in the form of Smart Orders) and borrowers place Market Orders that match to the best priced Lending Limit Order.
2. To concentrate liquidity in the most popular markets, Smart Orders are restricted to Virtual Markets

## Segregated Collateral
Collateral is held in Segregated Accounts, allowing users to actively manage their assets while they're being used as collateral (assuming the collateral remains eligible and healthy). For example, users can modify a liquidity position that's being used as collateral.
