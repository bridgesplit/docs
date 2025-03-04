---
sidebar_position: 1
---

# Lending Assets

Lending is one of the core primitives of Loopscale. 

Lending on Loopscale is different from pool-based lending protocols. It can be compared most to limit order book-based exchanges. On Loopscale, lending effectively creates a limit order of a) amount offered and b) APY requested on that amount. Borrowers then select the best APY (in what can be compared to a market order).

There are two ways to lend on Loopscale:

1. Lend through Loopscale's Earn Vaults, where capital is deposited to vaults where lending positions are managed by a third party vault custodian. This is a more hands-off approach to lending; to learn more, see [Earn Vaults](/concepts/using-loopscale/earn).
2. Create custom lend positions specifying rates and eligible collateral. This is a more complex—and more powerful—way to lend. This article describes how to create these positions.

## How to create a lending position on Loopscale

First, navigate to the [Lend](https://app.loopscale.com/lend) page on the Loopscale App. Find the asset you want to lend and click "View market" for that asset. From here, you select which asset you wish to supply (lend), collateral you accept, and your APYs.

### Eligible Collateral

Loopscale allows for lenders to specify which collaterals they'll accept. This helps lenders price risk better. 

For example, lenders may only accept stablecoins as collateral and thus charge lower APYs, whereas lenders accepting memecoins as collateral can request higher APYs in return for the increased collateral risk.

Loopscale has a number of preset strategies to make the lending process even faster for quick borrowers. 

### Target APY

In this section, lenders specify their offered rates for 1 day, 1 week, 1 month, and 3 month fixed-rate, fixed-duration loans. 

For example, asking for 5% APY on USDC for 1 month means a borrower who accepts this lend offer will borrow the lender's USDC at 5% APY, and that rate will be locked in for one month.

Interest rates on Loopscale are market-driven, meaning they're set by lenders and accepted by borrowers directly. This creates more efficient pricing compared to pool-based models where rates are determined by utilization.

When setting rates, consider current interest rates on the order book. More competitive rates will be utilized sooner. Longer term lengths typically command higher interest rates.

### Lend Idle Capital

Loopscale's _Optimized Yield_ deposits lent capital into partnered pool-based lending protocols (currently marginfi) so this capital can earn yield while it awaits being matched to a borrower. This feature is optional.

Most users elect to use the vaults to earn yield without having to consider lending strategies; in the rest of this article, custom lending strategies will be discussed.

### A note on Rent
If this is your first time lending a certain asset (or you deleted a past position entirely), you will need to pay a small SOL fee for rent (in addition to the network fee). This fee will be reclaimed upon completely closing out your lending position.

## After Position Creation
Once a strategy is created, an order will sit on the Credit Order Book equal to the amount un-utilized balance of the position. Capital can be removed from the strategy if its unused and additional capital can be deployed as well.

From here, see: [Manage Position](/concepts/product/lend/lending-assets).

