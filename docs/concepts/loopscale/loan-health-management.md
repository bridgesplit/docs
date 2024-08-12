---
sidebar_position: 4
title: Health Factor & Defaults
---

# Defaults
If a loan defaults, the loan ends and the borrower loses ownership of the collateral, including excess collateral and early repayments. Loans on Loopscale have two default mechanisms, price-based and payment-based.

## Price-Based Defaults
Similar to liquidations on existing DeFi lending protocols, price-based defaults occur when a loan's health factor reaches 0. In other words, a price-based default occurs when the value of loan's collateral relative to the value of the debt falls below the liquidation threshold. This can happen at any point during the loan, and borrowers should monitor their health factor to avoid a price-based default. Borrowers can increase their health factor by repaying principal and topping up collateral amounts.


### Health Factor
A loan's health factor helps a borrower easily understand a loan's real-time risk of a price-based. The health factor has a maximum value of 100%. A health factor of 0% signals a loan is at risk of liquidation, meaning its collateralization ratio no longer meets the liquidation threshold.

The health factor is calculated with the following formula:

$\text{Health Factor}  = 1 -  \displaystyle\frac{\text{Collateralization Ratio}}{\text{Liquidation Ratio}}$, where


$\text{Collateralization Ratio}  = 1 -  \displaystyle\frac{\text{Debt Value in USD}}{\text{Collateral Value in USD}}$


and the $\text{Liquidation Ratio}$  is a per-collateral, protocol-determined value. ${\text{Debt Value}}$ includes the total interest as calculated at the loan due date. 
The liquidation ratio is fixed for the lifetime of the loan whereas the collateralization ratio may fluctuate over the course of a loan as the value of the collateral or debt changes.

Platform-wide liquidation ratio values can be found [here](./risk-management.md).

## Payment-Based Defaults
Payment-based defaults result from a borrower failing to pay off outstanding debt by a loan's due date. Borrowers should monitor upcoming due dates to avoid a payment-based default.