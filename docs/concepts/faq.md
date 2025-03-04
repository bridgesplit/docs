---
sidebar_position: 8
draft: false
---

# FAQ

## About Loopscale

### What is Loopscale? How is it different from other lending protocols?
Loopscale is a lending protocol built on Solana that uses order books instead of lending pools. Via Atomic Markets, lenders and borrowers match directly based on their preferred terms, rates, and collateral types.

This approach eliminates the inefficiency of traditional lending pools, provides better rates, and supports any asset type without commingling risks across markets.

Learn more about how Loopscale is different: [Why Loopscale](/concepts/why-loopscale).

### What types of assets can be used on Loopscale?
Loopscale's architecture supports any token primitive, including those traditionally underserved by pool-based lending protocols. Loopscale allows for new assets to find lending markets without extensive governance processes or minimum liquidity requirements.

See a full list of currently supported collateral on the [Loopscale App](https://app.loopscale.com/markets).

### What is the history of Loopscale?
Loopscale evolved from Bridgesplit, which originally focused on building credit primitives for real-world assets. The team, upon seeing the same need for sophisticated lending primitives in crypto-native markets, pivoted and launched Loopscale in August 2024.

### Has Loopscale raised funds?
Yes. In 2021, when Loopscale was known as Bridgesplit, the company raised $4.25M from CoinFund, Jump, Coinbase Ventures, Solana Ventures, and Room40. More information about this funding round is available in this [press release](https://www.businesswire.com/news/home/20211216005113/en/NFT-Financialization-Platform-Bridgesplit-Announces-4.25M-Raise-Led-by-CoinFund-and-Jump-Capital).

### Has Loopscale been audited?
The core protocol underwent an audit in 2024, and a newer, more comprehensive audit is currently in progress. This new report will be published when Loopscale exits closed beta.

### Is there a token or airdrop planned?
No token or airdrop plans have been announced. Users should be vigilant against scams. **Anyone claiming to offer a Loopscale token or airdrop is not legitimate**.

## Using Loopscale

### Why do I need to spend extra SOL to open a lending position or loop?
<!-- TODO: rent explanation -->

### How do fixed-rate loans work on Loopscale?
Fixed-rate loans on Loopscale maintain the same interest rate through a fixed term (e.g. 1 day, 1 week, 1 month, or 3 months). Unlike variable rate options common in traditional DeFi lending pools, there is no variable rate volatility for loans on Loopscale.

### What occurs at the end of a fixed-duration loan term?
Upon reaching maturity, loans are automatically refinanced (re-opened at the same terms) at current market rates unless auto-refinancing has been disabled. Auto-refinancing can be disabled (or re-enabled) for any position via the Portfolio page.

### Can I withdraw lent liquidity before the term ends?
Early withdrawals are available through the Portfolio page. When withdrawing early, the loan is sold at fair market value to the best available offer. The fair value calculation accounts for:
- Remaining interest on the loan
- Current market rates
- The new lender's target APY

Interest earned up to that point is retained, with a small adjustment if the rate differs from current market rates.

### How do I get support?
Support is available through the [Loopscale Discord](https://discord.gg/loopscale) by opening a support ticket. For issues related to using the platform, including a wallet address in the initial message allows the team to provide assistance more quickly.

y for offering and managing their own points systems. Loopscale does not hold or disburse points from these external protocols.