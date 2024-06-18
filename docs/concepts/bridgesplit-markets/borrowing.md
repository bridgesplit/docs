---
sidebar_position: 2
---
# Borrowing
When borrowing on Bridgesplit Markets, a user selects:
1. An asset and amount to borrow
2. How long they wish to borrow for
3. An asset and amount to use as collateral

The list of available borrow assets, collateral assets, and loan duration options are available here. Each collateral asset has a loan-to-value ratio that determines the maximum borrowable amount.

The borrower's receives funds at the lowest rate on the market and the collateral is escrowed. The collateral is returned to the borrower once the borrowed funds and accrued interest have been fully repaid. A borrower will default, losing their collateral, if:
1. The loan has not been fully repaid by the due date (Payment-Based Default)
2. The loan's health factor falls below 0% (Price-Based Default)

## Health Factor
A loan's health factor helps a borrower easily understand a loan's real-time liquidation risk. The health factor has a maximum value of 100%. A health factor of 0% signals a loan is at risk of liquidation, meaning its collateralization ratio no longer meets the liquidation threshold.

The health factor is calculated with the following formula:
Health Factor  = 1 - ( Collateralization Ratio ÷ Liquidation Ratio )

where

Collateralization Ratio = Loan Value in USD ÷ Collateral Value in USD,

and the Liquidation Ratio is a per-collateral, protocol-determined value. These values can be found here.

The liquidation Ratio is fixed for the lifetime of the loan whereas the collateralization ratio may fluctuate over the course of a loan as the value of the collateral or loan changes.

A borrower has two ways to improve a loan's health factor: (1) topping up collateral (2) repaying a loan or portion of a loan early.

## Topping-up Collateral
A borrower may deposit additional collateral for a loan, increasing the collateral value and increasing the health factor. The additional collateral must be of the same asset. Excess collateral may not be withdrawn until the loan conclusion with the rest of the collateral.

## Early Repayment
A borrower may repay a loan in full before the loan due date. Upon repayment, the loan will end and the collateral will be returned to the borrower. 

A borrower may also partially repay a loan early, decreasing the loan value and increasing the health factor. 

### Prepayment Penalty
Borrowers must pay 40% of the original interest for the unused time of a loan. In other words, interest is reduced by 60% for any early repaid loan amount.

To illustrate the prepayment penalty, consider the following example:
1. The total interest due for 1-day, 40,000 USDC loan is 20 USDC (18.25% APR)
2. A borrower repays 10,000 USDC after 12 hours
3. After the full day has passed, borrower's total *interest* owed has three parts, for a total of 18.5 USDC (vs. 20 USDC):
    1. 18.25% APR on 40,000 USDC for the first 12 hours -> 10 USDC
    2. 18.25% APR on 30,000 USDC for the second 12 hours -> 7.5 USDC
    3. 40% of 18.25% APR on 10,000 USDC for the second 12 hours -> 1 USDC