---
sidebar_position: 2
---


# Loops

Yield Loops are a structured product offering access to leveraged yield strategies. They enable users to multiply returns from yield-bearing assets.

A Yield Loop uses deposited tokens as collateral to borrow more of the same yield-bearing asset. This creates a loop where both the initial deposit and the borrowed tokens earn yield, amplifying returns.

Loopscale's order book model provides fixed-rate loans that protect against rate spikes that could turn profitable positions negative. This structure also offers more competitive rates compared to pool-based models, as lenders set rates based on specific collateral rather than a pool of mixed assets. Additionally, each loan is directly matched with a lender, reducing systemic risks and preventing contagion across markets.

[Learn more about the underlying concepts of Yield Loops here.](/concepts/protocol-concepts/loops).

## Create a position

To create a Yield Loop position:

1. Navigate to the [Loops page](https://app.loopscale.com/loops) on the Loopscale App
2. Select a Yield Loop from the available categories (Long/short, leveraged staking, LPs, etc.). Note whether the position is long, short, or neutral. <!-- TODO: double check app on this -->
3. Choose your leverage amount
4. Optionally, select slippage limits and a custom fixed rate duration (higher durations protect from rate volatility, but typically command higher borrow rates) <!-- TODO: Note where to click for this - maybe an image is in order? -->
5. Approve and execute the transaction

## Managing a position

It's important to monitor a Yield Loop position's health to avoid liquidation. The Loopscale interface provides metrics to help you track a position:
<!-- TODO: double check interface on this -->
- Current leverage
- Liquidation threshold
- Projected returns based on current yield rates

Remember that a position remains profitable as long as the yield from your leveraged asset exceeds the borrowing costs.

## Closing a position

When you're ready to close a Yield Loop:

1. Navigate to the active positions in the Loops section of the [Portfolio](https://app.loopscale.com/portfolio) page.
2. Select the position you wish to close and close it.

Alternatively,
<!-- TODO: how to do this from loops page? -->

Loopscale will then:
1. Flash loan the amount needed to repay your loan
2. Repay the long-term loan to free up your collateral
3. Sell enough of your yield-bearing asset to repay the flash loan
4. Return the remaining assets to your wallet


## Yield Loop Risk Considerations

When using Yield Loops, be aware of these risk factors:

1. **Rate volatility**: If the yield of your asset drops below your borrowing rate, your position may become unprofitable. Choosing longer fixed rate durations can help address this (but will typically require a higher borrow rate). Loopscale mitigates rate volatility risk through fixed-rate loans, but users should still approach leveraged strategies with appropriate caution.
2. **Asset price volatility**: Significant price drops can lead to liquidation
3. Additional risks outlined on the [Risk Management](concepts/product/risk-management) page.

