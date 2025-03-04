---
sidebar_position: 1
---

# Borrowing Assets
When borrowing on Loopscale, a user selects:

- An asset and amount to borrow
- How long they wish to borrow for
- An asset its amount to use as collateral

The list of available borrow assets, collateral assets, and loan duration options are available on the Loopscale App. Each collateral asset has a loan-to-value ratio that determines the maximum borrowable amount.

The borrower receives funds at the lowest rate on the market and the collateral is escrowed. The collateral is returned to the borrower once the borrowed funds and accrued interest have been fully repaid.

A borrower will default, losing their collateral the loan's health factor falls below 0%. To learn more about defaults and how health factor is calculated, see Loan Health & Defaults. TODO: add link here

## Quick borrow

The easiest way to borrow on Loopscale is to go to the [Borrow](https://app.loopscale.com/borrow) and click "Borrow" next to the token you wish to borrow. Then:

1. Choose your collateral and its amount
2. Select how safe or aggressive you wish to be with your LTV (click "Show more" to see more stats like health and liquidation price)
3. Click "Borrow" to open up a borrow position. Through this interface, Loopscale borrows at a 24 hour fixed rate.

## Advanced borrow

By instead clicking "View market" next to a token on the [Borrow](https://app.loopscale.com/borrow) page, users can access a more advanced borrow interface.

In this interface, users can select their fixed rate period. Longer fixed rates mean more stability, but can command a higher rate as a result. 

