---
sidebar_position: 1
---

# Loopscale Vaults

**Loopscale Vaults** are the easiest way to earn lending yield on Loopscale. They simplify the lending experience by delegating management of rates, durations, and collateral selections to dedicated **Vault Curators**.

Vaults can be found at the top of the [Lend](https://app.loopscale.com/lend) page of the Loopscale App.

When you deposit into a Vault:
1. You deposit into a managed pool overseen by a Vault Curator.
2. The Curator supplies these tokens across Loopscale's modular lending markets, managing rates, durations, and collateral sections while aligning to a yield and risk management strategy.
3. Vaults generate returns from interest paid by borrowers borrowing from underlying markets.
3. These returns flow back to all vault depositors proportionally.

Loopscale's first Yield Vaults are managed by the Loopscale core team, but Loopscale will soon onboard third-party risk experts to manage their own vaults.

Vaults are designed to provide for instant deposits and withdrawals; the latter is made possible by a small percentage of deposits kept idle for withdrawal liquidity. See _Liquidity Buffer_ under _Market Parameters_ below.

Deposits in Vaults can serve as collateral for further borrowing, making possible further composability and leveraged strategies.

## Vault Interface

Each Vault's page lists its statistics, ongoing loans, and market parameters.

### Loans

The Loans section of the vault page details how the Vault's token (e.g. SOL for a SOL Vault) is being borrowed. It lists allocations of the Vault token, its APYs, and well the tokens provided by borrowers as collateral.

### Market parameters

**Liquidity buffer**: This is the percentage of Vault deposits kept idle so that they may be used to fill withdrawals. No lending offers will be placed if idle liquidity is below this buffer. If the vault has low liquidity for withdrawals, users can choose between an instant withdrawal with a small fee or to join a withdrawal queue.

**Max loan size**: The max loan size (denominated in the Vault's deposit) allowed.

**Collateral**: A list of collateral that the Vault accepts, and each collateral's APY, LTV, and liquidation LTV. This is a major aspect of a Vault's risk management strategy.

## Vault security and restrictions
Vaults have been [audited]](/concepts/faq#has-loopscale-been-audited), and Vault Curators cannot withdraw deposits from the Vault.

The vault manager can update APYs, durations, or origination fees at any time. All other changes, such as permitted collateral, require a 24 hour waiting period.

## Use cases for Vaults

Vaults abstract away the complexities of fixed-rate, order book-based lending by pooling user deposits under management by Vault Curators. This provides both a simpler user experience while also allowing for Curators to provide optimize yield with appropriate risk parameters. 

Loopscale allows for each Vault to have specific strategies, risk profiles, and goals in mind. One Vault may focus solely on highly liquid and low-risk assets, aiming for steady and predictable returns. Another Vault might pursue more aggressive strategies, lending to higher-risk, higher-yield opportunities like leveraged trading positions, or liquidity positions to maximize returns.

## Vaults vs. advanced lending
Vaults offer simplified lending where Curators manage your deposits across markets, providing convenience at the cost of lower potential returns and less control. Users simply deposit funds and receive interest without managing rates, durations, or collateral choices.

In contrast, [Advanced Lending](/concepts/lend/lending-assets) gives experienced users direct control with flexible collateral options, and customizable risk parameters. This approach requires active management and more capital, but can be rewarding for users who wish to pursue a more nimble or specific strategy. Your choice depends on whether you prioritize convenience or maximizing returns through hands-on management. 