---
sidebar_position: 1
---


# Loop

Yield Loops are Loopscale structured product that offers users access to leveraged yield strategies. They enable users to multiply returns from yield-bearing assets through an automated, single-transaction process.

## How Yield Loops Work
A Yield Loop uses deposited tokens as collateral to borrow more of the same yield-bearing asset. This creates a loop where both the initial deposit and the borrowed tokens earn yield, amplifying returns.

Loopscale's order book model provides fixed-rate loans that protect against rate spikes that could turn profitable positions negative. This structure also offers more competitive rates compared to pool-based models, as lenders set rates based on specific collateral rather than a pool of mixed assets. Additionally, each loan is directly matched with a lender, reducing systemic risks and preventing contagion across markets.

Yield Loops work as follows, using the JupSOL-SOL loop as an example.
1. Loopscale borrows SOL with no collateral via a flash loan
2. SOL is swapped for more JupSOL
3. JupSOL is deposited as collateral in Loopscale
4. SOL is borrowed against the JupSOL collateral
5. Borrowed SOL repays the initial flash loan

Loopscale executes these steps atomically. This means that all the above actions occur within a single transaction and revert if any step fails.

The end result: a levered JupSOL position earning more yield as long as borrow rates are lower than the base JupSOL yield.

## Creating a Yield Loop

To create a Yield Loop:

1. Navigate to the [Loops page](https://app.loopscale.com/loops) on the Loopscale App
2. Select an asset from the available categories (Long/short, leveraged staking, LPs, etc.)
3. Choose your leverage amount
4. Optionally, select slippage limits and a custom fixed rate duration (higher durations protect from rate volatility, but typically command higher borrow rates)
5. Approve and execute the transaction

## Managing Your Position

It's important to monitor your Yield Loop position's health to avoid liquidation. The Loopscale interface provides key metrics to help you track your position:

- Current leverage
- Liquidation threshold
- Projected returns based on current yield rates

Remember that your position remains profitable as long as the yield from your leveraged asset exceeds the borrowing costs.

## Closing a Position

When you're ready to close your Yield Loop:

1. Navigate to your active positions in the Loops section of the [Portfolio](https://app.loopscale.com/portfolio) page.
2. Select the position you wish to close and close it.

Loopscale will then:
1. Flash loan the amount needed to repay your loan
2. Repay the long-term loan to free up your collateral
3. Sell enough of your yield-bearing asset to repay the flash loan
4. Return the remaining assets to your wallet


## Yield Loop Risk Considerations

When using Yield Loops, be aware of these risk factors:

1. **Yield volatility**: If the yield of your asset drops below your borrowing rate, your position may become unprofitable. Choosing longer fixed rate durations can help address this (but will typically require a higher borrow rate)
2. **Asset price volatility**: Significant price drops can lead to liquidation

Loopscale mitigates these risks through isolated positions, fixed-rate loans, and atomic execution, but users should still approach leveraged strategies with appropriate caution.