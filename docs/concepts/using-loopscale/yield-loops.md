---
sidebar_position: 2
---


# Yield Loops

Yield Loops are a structured product offering access to leveraged yield strategies. They enable users to multiply returns from yield-bearing assets like JLP, native and liquid-staked Solana, and more. Yield Loops can either be market-neutral or short/long biased.

A Yield Loop uses deposited tokens as collateral to borrow more of the same yield-bearing asset. This creates a loop where both the initial deposit and the borrowed tokens earn yield, amplifying returns.

Loopscale's fixed-rate loans are used for Yield Loops. These fixed rates protect against rate spikes that could turn profitable positions negative, a notable consideration for when these positions are leveraged.

Learn more about the underlying mechanics of Yield Loops [here](/concepts/protocol-concepts/loops).

## Create a position

To create a Yield Loop position:

1. Navigate to the [Loops page](https://app.loopscale.com/loops) on the Loopscale App
2. Select a Yield Loop from the available categories (Long/short, leveraged staking, LPs, etc.). Note whether the position is biased long or short, or if it leverages staking or stablecoin yields instead (and thus is neutral to market price movements).
3. Choose your leverage amount, noting how it affects both yields as well as health and liquidation price.
4. Optionally, select slippage limits and a custom fixed rate duration (higher durations protect from rate volatility, but typically command higher borrow rates).
5. Approve and execute the transaction.

## Managing a position

It's important to monitor a Yield Loop position's health to avoid liquidation, particularly for positions with a long or short bias. The Loopscale interface provides metrics to help you track a position:
- Current leverage
- Liquidation threshold
- Projected returns based on current yield rates

Users have the option of topping up collateral on a Yield Loop. This effectively deleverages the position and improves the health of the Yield Loop. This can be useful to do if a Yield Loop is approaching liquidation.

You can see your current positions either on an individual Yield Loop's page or in the [Portfolio](https://app.loopscale.com/portfolio) page of the app.

Learn more about managing loan health here: [Managing Loans](/concepts/using-loopscale/borrow/managing-loans).

## Closing a position

When you're ready to close a Yield Loop:

1. Find your Yield Loop position: Go to the [Loops page](https://app.loopscale.com/loops), select your loop, and find your position—or, go to the active positions in the Loops section of the [Portfolio](https://app.loopscale.com/portfolio) page.
2. Select the position you wish to close and close it.

## Common questions

### On trying to open a Loop, I see the error "Market does not have enough SOL supplied"
Yield Loops require a swap via AMM (e.g. Orca, Raydium) to open a position. The "not enough SOL supplied" error means that there is not enough liquidity in the AMM's liquidity pool for the amount of token being looped. Try decreasing leverage or choosing another Loop.

### "No Route Found" error on closing a Loop
This means that there isn't enough liquidity in the Loop token's AMM pool to close the loop. You can repay the loop directly using SOL if you don't want to wait for the pool to acquire more liquidity.

## Yield Loop Risk Considerations

When using Yield Loops, be aware of these risk factors:

1. **Asset price volatility**: Significant price drops can lead to liquidation, notably when in long or short-biased Yield Loops.
2. **Rate volatility**: If the yield of your asset drops below your borrowing rate, your position may become unprofitable. Choosing longer fixed rate durations can help address this (but will typically require a higher borrow rate). Loopscale mitigates rate volatility risk through fixed-rate loans, but users should still approach leveraged strategies with appropriate caution.
3. Additional risks outlined on the [Risk Management](concepts/product/risk-management) page.


