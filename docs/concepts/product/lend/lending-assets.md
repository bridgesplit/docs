---
sidebar_position: 1
---

# Lending Assets
Lending on Loopscale allows users to earn interest on their digital assets. Unlike pool-based protocols where assets are supplied to a liquidity pool, lending on Loopscale operates on the order book model. Users effectively create a limit order on the Loopscale Credit Order Book; this order 

There are two ways to lend on Loopscale:

1. Lend through Loopscale's Earn Vaults, where lending positions are managed by a third party vault custodian
2. Create custom lend orders specifying rates and eligible collateral.

Most users elect to use the vaults to earn yield without having to consider lending strategies; in the rest of this article, custom lending strategies will be discussed.

Lending on Loopscale is done through _strategies_. A strategy is where a lender deposits funds into a pool, selecting:

1. Term Lengths you’re willing to lend for (1 day, 1 week, 1 month, 3 months)
2. Interest Rate you are willing to accept
3. Collateral you’re willing to lend against

## Setting an interest rate
Interest rates on Loopscale are market-driven, meaning they're set by lenders and accepted by borrowers directly. This creates more efficient pricing compared to pool-based models where rates are determined by utilization.

When setting rates, consider current interest rates on the order book. More competitive rates will be utilized sooner. Longer term lengths typically command higher interest rates.

Term length (longer terms typically command higher rates)
Current market conditions
Asset liquidity

## Collateral selection
Users can choose which collateral is eligible to be offered in exchange for borrowing their lent liquidity. For more information, see global asset parameters.

Loopscale has a number of preset strategies to make the lending process even faster for quick borrowers. All presets set the max loan length to 1 month:
- Global: All Available Assets
- Core: Large Cap Solana tokens, LSTs, and other L1s
- DeFi: DeFi Governance tokens, LP positions, and vaults
- Memecoin: Large Cap Memecoins on Solana

## After Creation
Once a strategy is created, an order will sit on the Credit Order Book equal to the amount un-utilized balance of the strategy. Capital can be removed from the strategy if its unused and additional capital can be deployed to strategies. 

From here, see: [Manage Position](/concepts/product/lend/lending-assets).

