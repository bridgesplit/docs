---
sidebar_position: 3
---
# Lending
Lending on Loopscale is done through strategies, a lender deposits funds into a pool selecting:
1. Term Lengths you’re willing to lend for (1 day, 1 week, 1 month, 3 months)
2. Interest Rate you are willing to accept
3. Collateral you’re willing to lend against

## Presets
Loopscale has a number of preset strategies to make the lending process even faster for quick borrowers. All presets set the max loan length to 1 month :
- Global: All Available Assets
- Core: Large Cap Solana tokens, LSTs, and other L1s
- DeFi: DeFi Governance tokens, LP positions, and vaults
- Memecoin: Large Cap Memecoins on Solana

## After Creation
Once a strategy is created, an order will sit on the creditbook equal to the amount un-utilized balance of the strategy. Capital can be removed from the strategy if its unused and additional capital can be deployed to strategies.

### Capital Management
Capital will be taken from the strategy to start new loans, once capital is deployed to a loan it is locked up for the length of the loan unless the borrower repays it early. 

### Defaults
In the event of a default (either due to late payment or price-based), liquidators will be able to purchase the collateral automatically at a value equal to the loan amount you’re owed and the funds will automatically be recycled into your strategy. If you would prefer to seize the collateral directly, you can turn off auto-liquidations in your strategy settings and take possession of the collateral directly.

### Halting New Loans
If a lender wishes to stop new loans from being originated from their strategy, they can turn off new origination in strategy settings.