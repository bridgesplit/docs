---
sidebar_position: 2
---

# Managing Loans

A loan is created when a borrow order matches with a compatible lend order. The Loopscale App provides several features to manage your loans. Users can see their ongoing loans on the Loopscale App's [Portfolio](https://app.loopscale.com/portfolio) page, under the Borrowing section.

**Loan Health** indicates how far a loan is from potential liquidation. It ranges from 0% to 100%, with 0% meaning the loan is at risk of liquidation because its collateralization ratio has fallen below the required threshold. Borrowers should regularly monitor loan health, especially when collateral value fluctuates. Starting with a lower loan-to-value ratio (LTV) will give your loan a higher initial health percentage.

To improve a loan's health factor, borrowers can:
1. Add more collateral
2. Repay part of the loan early

Borrowers may also repay a loan completely before its due date. Upon full repayment, the loan closes and all collateral returns to the borrower. Partial early repayments reduce the outstanding loan amount and increase the health factor. Any early repayment includes interest accrued up to that point.

## Loan Management Actions

Users can perform the following actions on their ongoing loans from the Portfolio or Borrow pages:

### Borrow More
Increase your loan amount using existing collateral by finding your position in your portfolio, clicking More, and selecting "Borrow More." This does not add additional collateral and will decrease your loan health.

### Withdraw Collateral
Remove some collateral from your position by finding it in your portfolio, clicking More, and selecting "Withdraw Collateral." This action reduces loan health.

### Top Up Collateral
Add more of the same collateral asset to your loan to increase the health factor. Note that any added collateral cannot be withdrawn until the loan concludes.

### Refinancing
Borrowers can refinance their loans by repaying an outstanding loan while simultaneously starting another. This pays off the original lender and creates a new loan.

Refinancing requires:
- An available offer of equal or greater size than the amount owed
- Matching term and collateral requirements
- Sufficient collateral value to meet the new loan's LTV requirements

The new loan amount will equal the original principal plus any accrued interest and fees for the new term.

Borrowers can opt into auto-refinancing, which uses an off-chain matching engine to find available offers automatically. There is a 15-minute grace period after loan failure during which the system attempts to find a match.

## Understanding Loan Health
The health factor helps you understand your loan's real-time risk of liquidation. It is calculated using:

$\text{Health Factor} = 1 - \displaystyle\frac{\text{Collateralization Ratio}}{\text{Liquidation Ratio}}$

Where:
- $\text{Collateralization Ratio} = \displaystyle\frac{\text{Debt Value in USD}}{\text{Collateral Value in USD}}$
- $\text{Liquidation Ratio}$ is a protocol-determined value specific to each collateral type
- $\text{Debt Value}$ includes the total interest calculated at the loan due date

The liquidation ratio remains fixed for the lifetime of the loan, while the collateralization ratio may change as collateral or debt values fluctuate.

You can find current liquidation ratio values at the bottom of the [Loopscale App's Borrow page](https://app.loopscale.com/borrow).

## Defaults
If a loan defaults, it ends and the borrower loses ownership of all collateral, including excess collateral and any partial repayments. 

**Price-based defaults** occur when a loan's health factor reaches 0% - meaning the collateral value relative to the debt falls below the liquidation threshold. This can happen at any point during the loan term. Borrowers should monitor their health factor to avoid this type of default.