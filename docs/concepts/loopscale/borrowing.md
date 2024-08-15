---
sidebar_position: 2
---
# Borrowing
When borrowing on Loopscale, a user selects:
1. An asset and amount to borrow
2. How long they wish to borrow for
3. An asset and amount to use as collateral

The list of available borrow assets, collateral assets, and loan duration options are available here. Each collateral asset has a loan-to-value ratio that determines the maximum borrowable amount.

The borrower's receives funds at the lowest rate on the market and the collateral is escrowed. The collateral is returned to the borrower once the borrowed funds and accrued interest have been fully repaid. A borrower will default, losing their collateral, if:
1. The loan has not been fully repaid by the due date (Payment-Based Default)
2. The loan's health factor falls below 0% (Price-Based Default)

To learn more about defaults and how health factor is calculated, see [Loan Health & Defaults](health-factor-and-defaults.md).

A borrower has two ways to improve a loan's health factor: (1) topping up collateral (2) repaying a loan or portion of a loan early. 

## Topping-up Collateral
A borrower may deposit additional collateral for a loan, increasing the collateral value and increasing the health factor. The additional collateral must be of the same asset. Excess collateral may not be withdrawn until the loan conclusion with the rest of the collateral.

## Repaying a loan
You can partially or fully repay a loan at any point. You only owe interest on loan value you have outstanding. So if you repay early, you won’t owe interest for the remaining time on the principal repaid. If you repay early, you will incur a fee that is proportional to the interest saved. This is to compensate the lender for locking their capital up and discourage long capital reservations without reason.

### Early Repayment
A borrower may repay a loan in full before the loan due date. Upon repayment, the loan will end and the collateral will be returned to the borrower. 

A borrower may also partially repay a loan early, decreasing the loan value and increasing the health factor. 

#### Prepayment Penalty
Borrowers must pay 40% of the original interest for the unused time of a loan. In other words, interest is reduced by 60% for any early repaid loan amount.

To illustrate the prepayment penalty, consider the following example:
1. The total interest due for 1-day, 40,000 USDC loan is 20 USDC (18.25% APY)
2. A borrower repays 10,000 USDC after 12 hours
3. After the full day has passed, borrower's total *interest* owed has three parts, for a total of 18.5 USDC (vs. 20 USDC):
    1. 18.25% APY on 40,000 USDC for the first 12 hours -> 10 USDC
    2. 18.25% APY on 30,000 USDC for the second 12 hours -> 7.5 USDC
    3. 40% of 18.25% APY on 10,000 USDC for the second 12 hours -> 1 USDC

## Refinancing
One of the more powerful concepts for borrowers on Loopscale is the refinance. Refinancing is the process of repaying one outstanding loan by atomically starting another. The original lender is paid off and a new loan is started. 

<!--[Diagram: Existing loan, new cash coming off the book and going to the lender, loan getting transferred to a new lender]-->

Refinancing only works if there is an offer at a greater than or equal to size of the amount owed on a loan and for the corresponding term and collateral. The new loan is started at an amount equal to the original principal plus any accrued interest and fees for the new length. 

If the amount of collateral in the existing loan is insufficient to start aa new loan (e.g. Loan Balance > (LTV * Collateral)), the refinance will fail.

Borrowers can opt-in to auto-refinancing which is an off-chain matching engine to find available offers automatically to renew loans instead of a payment based default. There is a 15 minute grace period post loan failure where the loan will attempt to be matched.