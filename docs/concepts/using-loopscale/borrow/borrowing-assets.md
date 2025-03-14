---
sidebar_position: 1
---

# Borrowing Assets

Users can borrow tokens from Loopscale at superior fixed rates. The list of available tokens, collateral assets, and loan duration options are available on the [Loopscale App's Borrow page](https://app.loopscale.com/borrow).

When borrowing on Loopscale, a user selects:

- An asset and amount to borrow
- How long they wish to borrow for (locking in an interest rate for this duration)
- An asset its amount to use as collateral

Each collateral asset has a loan-to-value (LTV) ratio that determines the maximum borrowable amount as well as a liquidation LTV that determines at what LTV the position's health reaches 0%, leading to liquidation.

The borrower receives funds at the lowest rate on the market and the collateral is escrowed. The collateral is returned to the borrower once the borrowed funds and accrued interest have been fully repaid.

A borrower will default, losing their collateral the loan's health factor falls below 0%. To learn more about health factor, see [Managing Loans](/concepts/using-loopscale/borrow/managing-loans). 

## Quick borrow

The easiest way to borrow on Loopscale is to go to the [Borrow](https://app.loopscale.com/borrow) and click "Borrow" next to the token you wish to borrow. Then:

1. Choose your collateral and its amount
2. Select how safe or aggressive you wish to be with your LTV (click "Show more" to see more stats like health and liquidation price)
3. Click "Borrow" to open up a borrow position. Through this interface, Loopscale borrows at a 24 hour fixed rate.

## Advanced borrow

By instead clicking "View market" next to a token on the [Borrow](https://app.loopscale.com/borrow) page, users can access a more advanced borrow interface.

In this interface, users can select their fixed rate period. Longer fixed rates mean more stability, but can require a higher rate as a result (depending on offers from lenders in the order book).

