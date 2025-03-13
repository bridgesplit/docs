---
sidebar_position: 2
---

# Managing Lending Positions

This article explains the various ways that users can manage their advanced lending positions.

## View lending positions

You can view (and modify) your lending positions from two places on the Loopscale App.
1. On the Portfolio page, under the advanced lending positions section.
2. At the bottom of the [Lend](https://app.loopscale.com/market/USDC?role=lend) page

## Withdraw

Unutilized portions of a lending position can be withdrawn immediately by clicking "Deposit/Withdraw" and selecting "Withdraw". For utulized lend position withdrawals, see _withdrawing early_ below.

You can see how much of a position is utilized, if any, in the Utilization field. 

## Withdrawing early
Users can withdraw from the loan early, collecting partial interest, by selling the loan back to the market before the due date.

This can be accomplished by going to the position, clicking "More," selecting "View Loans", and withdrawing early from the active loan or loans on this page.

## Capital management
Capital will be taken from the strategy to start new loans. Once capital is deployed to a loan, it is locked up for the length of the loan unless the borrower repays it early

## Defaults
In the event of a default, liquidators will be able to purchase the collateral automatically at a value equal to the loan amount you’re owed and the funds will automatically be returned to your lending position. If you prefer to seize the collateral directly, you can turn off auto-liquidations in your strategy settings and take possession of the collateral instead in the event of a liquidation.

## Halting new loans
If a lender wishes to stop new loans from being originated from their lending position, they can turn off new origination in strategy settings. This will result in funds remaining within the lending position, but they will not continue to be utilized after the current loan period ends.

## Closing a position and reclaiming rent
Even after withdrawing all funds, a _position_ remains open so that rent does not need to be repaid if the position is reopened. You can close this position fully and receive back your rent SOL by clicking "More" and selecting "Delete position."