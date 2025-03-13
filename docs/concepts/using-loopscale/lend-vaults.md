---
sidebar_position: 1
---

# Lend Vaults

**Lend Vaults** simplify the lending experience by delegating management of lending rates, durations, and collateral selections to dedicated **Vault Curators**.

When lending via Lend Vaults, users don’t need to manage lending rates, durations, or collateral options. Users only need to select a Vault and deposit their funds. Each Vault's Curator actively manages these deposits by allocating them into specific lending opportunities within Loopscale. Interest earned from these lending activities is passed directly back to the users who deposited in the vault.

In short, when you deposit into a Lend Vault:
1. Your tokens join a pool overseen by a Vault Curator.
2. The Curator supplies these tokens across Loopscale's lending markets.
3. Vaults generate returns from interest paid by borrowers borrowing from underlying markets.
3. These returns flow back to all vault depositors proportionally.

Vaults can be found at the top of the [Lend](https://app.loopscale.com/lend) page of the Loopscale App.

Loopscale's first Yield Vaults are managed by the Loopscale core team, but Loopscale will soon onboard third-party risk experts to manage their own vaults.

A percentage of a Vault's liquidity is kept idle to facilitate instant withdrawals (see "Liquidity buffer" above). If the vault has low liquidity, users can choose between an instant withdrawal with a small fee or to join a withdrawal queue.

## Vault Interface

Each Vault's page lists its statistics, ongoing loans (i.e. allocations), and market parameters, as well as the ability for users to deposit and withdraw.

### Loans

In the Loans section of the vault page, tokens used as collateral for borrows of the vault's principal asset are listed. Included is the amount of principal asset borrowed for each collateral token as well as the APY being earned.

### Market parameters

**Liquidity buffer**: This is the percentage of Vault deposits kept idle so that they may be used for instant redemptions. No lending offers will be placed if idle liquidity is below this buffer.

**Max loan size**: The max loan size (denominated in the Vault's deposit) allowed.

**Collateral**: A list of collateral that the Vault accepts, and each collateral's APY, LTV, and liquidation LTV.

## Vault security and restrictions
Lend Vaults have been reviewed in Loopscale's most recent [audits](/concepts/audits), and Vault Curators cannot withdraw user deposits from the Vault.

The vault manager can update APYs, durations, or origination fees at any time. All other changes require a 24 hour waiting period.

## Use cases for Lend Vaults

Lend Vaults abstract away the complexities of fixed-rate, order book-based lending by pooling user deposits under management by Vault Curators. This provides both a simpler user experience while also allowing for Curators to provide optimize yield with appropriate risk parameters. 

Loopscale allows for each Vault to have specific strategies, risk profiles, and goals in mind. One Vault may focus solely on highly liquid and low-risk assets, aiming for steady and predictable returns. Another Vault might pursue more aggressive strategies, lending to higher-risk, higher-yield opportunities like leveraged trading positions, or liquidity positions to maximize returns.

Deposits in Vaults can serve as collateral for further borrowing, making possible further composability and leveraged strategies.



