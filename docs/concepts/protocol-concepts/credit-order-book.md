---
sidebar_position: 3
---
# Credit Order Book

The Credit Order Book is the central primitive of Loopscale. It connects lenders and borrowers and facilitates efficient order matching, price discovery, and liquidity concentration.

The Credit Order Book can be compared to order books found in traditional exchanges (e.g. stocks) and cryptocurrency exchanges. However, instead of price, the Credit Order Book advertises rates being offered by lenders to borrowers.

![](../../../static/img/docs/concepts/limit-creditbook-1.png)

On the Credit Order Book, borrowers and lenders can place orders for by defining individual [loan structures](/concepts/protocol-concepts/loans) offering maximal configurability. On Loopscale, borrowers and lenders primarily interact with the Order Credit Book via _virtualized_ Credit Order Books (vCOBs). A vCOB represents a collection of orders standardized on a subset of terms.

The initial vCOBs on Loopscale standardize orders such that borrowers and lenders specify only principal, collateral, amount, rate, and duration and principal, collateral, and duration have a predefined set of options. This provides a streamlined experience and concentrates liquidity within unique combinations of principal, collateral, and duration.

![](../../../static/img/docs/concepts/limit-creditbook-2.png)

![](../../../static/img/docs/concepts/limit-creditbook-3.png)

As liquidity grows, more vCOBs will be introduced with finer parameterization, balancing the trade-off between liquidity concentration and flexibility.

## Order Matching
The Credit Order Book employs an on-chain matching engine to pair loan offers with loan requests. If an offer and request match across loan terms, the borrower may fill the lender offer, initialized the loan.

Borrowers may also fill lender offers directly with matching collateral without creating a request. In this case, the borrower will fill the best-available order on the LCB as determined by the interest rate.