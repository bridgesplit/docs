---
sidebar_position: 2
---

# Custom Lend Positions



## Smart orders
Lenders may also create **Smart Orders (Virtual Orders)**, which enhance capital efficiency by enabling the same capital to be displayed across multiple **Lend Limit Orders** according to a term ruleset:

- Eligible Collateral and maximum LTVs
- Rate on a per-collateral-duration pair basis
- Eligible Durations



To create a more familiar experience for DeFi users, the **Loopscale App** exposes only a subset of order creation flows.

1. For immediacy: To provide instant liquidity, lenders place **Limit Orders** (in the form of **Smart Orders**) and borrowers place **Market Orders** matching to the available capital.


  For liquidity: To concentrate liquidity in the most popular markets, Smart Orders are restricted to Virtual Markets (Virtual Limit Creditbook, Virtual Creditbook), standardized subsets of terms with fixed oracles, fees, and zero-coupon repayment schedules. These Virtual Markets offer a preset selection of duration, collateral, and principal options.