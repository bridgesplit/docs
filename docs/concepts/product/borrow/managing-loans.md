---
sidebar_position: 2
---

# Managing Loans
You can partially or fully repay a loan at any point. You only owe interest on loan value you have outstanding. So if you repay early, you won’t owe interest for the remaining time on the principal repaid. If you repay early, you will incur a fee that is proportional to the interest saved. This is to compensate the lender for locking their capital up and discourage long capital reservations without reason.

A borrower has two ways to improve a loan's health factor: (1) topping up collateral (2) repaying a loan or portion of a loan early.

A borrower may repay a loan in full before the loan due date. Upon repayment, the loan will end and the collateral will be returned to the borrower. A borrower may also partially repay a loan early, decreasing the loan value and increasing the health factor. Upon early repayment, interest accrued up until that point is paid.


## Monitoring loan health
loan's health factor helps a borrower easily understand a loan's real-time risk of a price-based. The health factor has a maximum value of 100%. A health factor of 0% signals a loan is at risk of liquidation, meaning its collateralization ratio no longer meets the liquidation threshold.

The health factor is calculated with the following formula:

$\text{Health Factor}  = 1 -  \displaystyle\frac{\text{Collateralization Ratio}}{\text{Liquidation Ratio}}$, where


$\text{Collateralization Ratio}  = 1 -  \displaystyle\frac{\text{Debt Value in USD}}{\text{Collateral Value in USD}}$


and the $\text{Liquidation Ratio}$  is a per-collateral, protocol-determined value. ${\text{Debt Value}}$ includes the total interest as calculated at the loan due date.
The liquidation ratio is fixed for the lifetime of the loan whereas the collateralization ratio may fluctuate over the course of a loan as the value of the collateral or debt changes.

Platform-wide liquidation ratio values can be found [here](./risk-management.md).

## Borrow more

## Withdraw collateral

## Top up loan
A borrower may deposit additional collateral for a loan, increasing the collateral value and increasing the health factor. The additional collateral must be of the same asset. Excess collateral may not be withdrawn until the loan conclusion with the rest of the collateral.

## Refinancing
TODO: See how much of this section is accurate. rewrite to be easier understood.
Borrowers on Loopscale are able to refinance their loans. Refinancing is the process of repaying one outstanding loan by atomically starting another. The original lender is paid off and a new loan is started.

Refinancing only works if there is an offer at a greater than or equal to size of the amount owed on a loan and for the corresponding term and collateral. The new loan is started at an amount equal to the original principal plus any accrued interest and fees for the new length.

If the amount of collateral in the existing loan is insufficient to start aa new loan (e.g. Loan Balance > (LTV * Collateral)), the refinance will fail.

Borrowers can opt-in to auto-refinancing which is an off-chain matching engine to find available offers automatically to renew loans instead of a payment based default. There is a 15 minute grace period post loan failure where the loan will attempt to be matched.

# Defaults
If a loan defaults, the loan ends and the borrower loses ownership of the collateral, including excess collateral and early repayments. Loans on Loopscale have two default mechanisms, price-based and payment-based.

Similar to liquidations on existing DeFi lending protocols, price-based defaults occur when a loan's health factor reaches 0. In other words, a price-based default occurs when the value of loan's collateral relative to the value of the debt falls below the liquidation threshold. This can happen at any point during the loan, and borrowers should monitor their health factor to avoid a price-based default. Borrowers can increase their health factor by repaying principal and topping up collateral amounts.