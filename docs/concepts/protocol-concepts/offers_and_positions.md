---
sidebar_position: 4
---
# Offers & Positions
## Offers
Loan offers (lend) and loan requests (borrow), collectively known as orders, are matched by the Creditbook matching engine.

To improve the user experience for borrowers and lenders, t


Orders define the terms of a loan, in
Borrowers may create requests to be filled by a lender and lende


Borrowers place market orders (requests) via Virtual Creditbooks (vLCBs) which concentrate liquidity by standardizing terms across parameters like duration and collateral. Instead of placing individual limit orders (offers) on each vLCB, Positions enable lenders to reuse funds across orders on multiple vLCBs.

## Positions
A Position is a principal balance deposited by a lender that fills market borrow orders according to parameters decided by the lender.


### Position Composition



Loan to values are set application wide in the current version of Loopscale along with liquidation ratios, this is to standardize UX. Each asset has a preset maximum loan-to-value that borrows will be able to use and a preset liquidation ratio that loans will be subject to.

## Strategy Composition
A strategy is composed of an escrow balance of idle principal which is waiting to be deployed and active loans. Active loan interest gets compounded into the strategy and after a loan is repaid, the funds are automatically made available for new loans. Strategies can be adjusted at any time. Funds can be added or removed from strategies as well.

### Parameters
| Parameter | Description |
|:--|--:|
| Collateral | Multiple Selection, Opt In. Please see [link to params page] collateral page for a full list.|
| Duration |The maximum length of time a lender is willing to lock their funds|
| Rate |The interest rate you’re offering your funds at|

## Strategies
Strategies are a tool for lenders to create lending positions with predefined terms. Each strategy uniquely defines a list of eligible collateral and a maximum duration. The current market rate is used for orders placed using a Strategy.

By selecting a particular strategy, lenders only have to specify the amount of capital to deposit into the order.
y