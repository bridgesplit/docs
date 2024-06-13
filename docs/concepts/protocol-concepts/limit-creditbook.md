---
sidebar_position: 2
---
# Limit Creditbook (LCB)

The Creditbook serves as the as the central venue where lenders and borrowers interact via offers and requests. It is designed to facilitate efficient order matching, price discovery, and liquidity concentration. The Limit Creditbook (LCB) catalogs all borrower and lender orders and the virtualized Limit Creditbooks (vLCB) represents an abstraction designed to concentrate liquidity for a subset of markets.

On the Limit Creditbook, borrowers and lenders can place orders for by defining individual [loan structures](/docs/concepts/protocol-concepts/bilateral-loans#terms) offering maximal configurability. On Omni, borrowers and lenders primarily interact with the LCB via virtualized Limit Creditbooks. A vLCB represents a collection of orders standardized on a subset of terms.
The initial vLCBs on Omni standardize orders such that borrowers and lenders specify only principal, collateral, amount, rate, and duration and principal, collateral, and duration have a predefined set of options. This provides a streamlined experience and concentrates liquidity within unique combinations of principal, collateral, and duration.

As liquidity grows, more vLCBs will be introduced with finer parameterization, balancing the trade-off between liquidity concentration and flexibility.

## Order Matching
The Creditbook employs an on-chain matching engine to pair loan offers with loan requests. If an offer and request match across loan terms, the borrower may fill the lender offer, initialized the loan.

Borrowers may also fill lender offers directly with matching collateral without creating a request. In this case, the borrower will fill the best-available order on the LCB as determined by the interest rate.