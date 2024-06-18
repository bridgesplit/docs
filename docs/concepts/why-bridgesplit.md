---
sidebar_position: 2
---
# Why Bridgesplit
## How does the Bridgesplit protocol compare to typical money markets?
The advantages of the Bridgesplit protocol are best understood by explaining how the Limit Creditbook design differs from other lending protocols.

In the first generation of DeFi lending protocols, the borrowing interest rate is determined by the utilization of the asset. As utilization increases, borrowing is discouraged and supplying is encouraged to preserve idle liquidity for withdrawals. Interest is paid only on borrowed assets, meaning enforced idle liquidity results in a reduced interest rate for lenders, as the total interest paid is distributed across all supplied assets, both lent and idle. In contrast, a peer-to-peer design matches individual lenders and borrowers based on flexible criteria such as asset type, amount, duration, and interest rate. Lenders and borrowers define the market, transacting at the best rate or with any collateral as long as there is a willing counterparty.

To better illustrate this inefficiency, consider a pool-based model that defines the borrowing rate as 5% for a 20% utilization ratio. If lenders supply $100 to the pool and a borrower borrows $20, the borrower will pay 5% interest, and the lenders will earn 1.25% interest. In a peer-to-peer model, a lender can lend $20 directly to the borrower at 4%, a more favorable rate for both parties.

Another disadvantage of pooling risk is the limitation on eligible collateral. By pricing risk uniformly across assets, the introduction of volatile or illiquid collateral drives up borrowing costs for all assets. As a result, protocols limit the assets that may be used as collateral, sacrificing flexibility for reducing, but not eliminated, inefficiency.

Despite these disadvantages, the pool-based model was designed to address a limitation of peer-to-peer systems, where borrowers and lenders must wait for matching counterparties to enter the market when liquidity is insufficient. Bridgesplit introduces the Limit Creditbook (LCB) and virtualized Limit Creditbooks (vLCB) to overcome this limitation without compromising capital efficiency. The LCB allows borrowers and lenders to create orders (requests and offers) with customizable rates, collateral types, and durations. On Bridgesplit's interface, Bridgesplit Markets, the LCB is abstracted to a series of vLCBs, cataloging orders with standardized terms to concentrate liquidity across predefined markets. As more vLCBs are introduced with finer parameterization, short-term liquidity growth is achieved while maintaining long-term flexibility and efficiency. For more information on the Limit Creditbook and other protocol features, refer to the Protocol Concepts page.

## What does the Limit Creditbook accomplish?
1. Unlock new collateral options: By segregating collateral risk on a per-loan basis, collateral can include yield-bearing tokens, liquidity provider tokens, liquid staking tokens, and "real-world" assets.
2. Lending rate = borrowing rate: Lenders and borrowers access the best available market rates by coordinating directly.
3. Capital efficiency: One-to-one lending relationships eliminate the need for unnecessarily idle assets.
4. Fixed rates: Fluctuating rates are unsuitable for executing specific investment strategies. Decoupling interest rates from utilization ratios enables fixed rates and other loan structuring functionality. 
5. Risk management: In pool-based models, risk is pooled across assets and participants are subject to algorithmic and unviersal risk management. The Bridgesplit protocol offers unconstrained flexibility in loan structuring, pricing options, and collateral structuring, giving lenders full control over their risk profile.