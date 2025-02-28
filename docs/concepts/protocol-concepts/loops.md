---
sidebar_position: 5
---

# Loops

## How Yield Loops work
Yield Loops work as follows, using the JupSOL-SOL loop as an example.
1. Loopscale borrows SOL with no collateral via a flash loan
2. SOL is swapped for more JupSOL
3. JupSOL is deposited as collateral in Loopscale
4. SOL is borrowed against the JupSOL collateral
5. Borrowed SOL repays the initial flash loan

Loopscale executes these steps atomically. This means that all the above actions occur within a single transaction and revert if any step fails.

The end result: a levered JupSOL position earning more yield as long as borrow rates are lower than the base JupSOL yield.

## Yield Loops compared to similar products

While leveraged yield strategies have existed in DeFi before, Loopscale's order book architecture provides several key advantages over looping from traditional yield-based protocols. 

### Fixed rates rather than variable rates
Yield Loops use Loopscale's fixed-rate loans, protecting users from rate volatility that could turn profitable positions negative. Traditional pool-based protocols use variable rates that can spike during market stress, potentially forcing liquidations or making positions unprofitable when the borrow rate exceeds the yield from the underlying token.

### Collateral-specific pricing
On Loopscale, lenders can set rates based on specific collateral quality rather than a uniform rate for an entire pool of different assets. This means borrowing against high-quality collateral like USDC is cheaper than borrowing against more volatile assets, resulting in more efficient pricing and better terms for safer positions.

### Isolation prevents contagion
When using traditional pools for looping, volatility in one asset in a multi-asset pool can affect the entire protocol. Loopscale's Atomic Markets operate in complete isolation, so issues with one asset class don't impact others. This makes Yield Loops more resilient during market stress.