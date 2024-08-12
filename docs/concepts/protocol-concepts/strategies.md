---
sidebar_position: 4
---
# Strategies
Strategies are vehicles for lenders to define terms at which they would be willing to lend capital. Lenders select which assets they are willing to accept as collateral as well as the term lengths they’re willing to lend for. They also select the rate they’re willing to lend at. The lower the rate, the more likely it is to be filled. 

<!-- [Diagram of strategy: Box with Lender sending USDC in, parameters identified in the corner] -->

Loan to values are set application wide in the current version of Loopscale along with liquidation ratios, this is to standardize UX. Each asset has a preset maximum loan-to-value that borrows will be able to use and a preset liquidation ratio that loans will be subject to.

## Strategy Composition
A strategy is composed of an escrow balance of idle principal which is waiting to be deployed and active loans. Active loan interest gets compounded into the strategy and after a loan is repaid, the funds are automatically made available for new loans. Strategies can be adjusted at any time. Funds can be added or removed from strategies as well.

### Parameters
| Parameter | Description |
|:--|--:|
| Collateral | Multiple Selection, Opt In. Please see [link to params page] collateral page for a full list.|
| Duration |The maximum length of time a lender is willing to lock their funds|
| Rate |The interest rate you’re offering your funds at|