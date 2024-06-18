---
sidebar_position: 4
---
# Asset Parameters
Borrowers and lenders on Bridgesplit Markets interact via virtualized Limit Creditbooks with standardized terms including principal and collateral options, principal and collateral oracles, and loan terms. These standardized terms are available below. More information on terms and how they affect a loan is available in [Protocol Concepts](concepts/protocol-concepts/bilateral-loans#terms).
## Loan Terms
- **Loan Type**: Zero-Coupon (single payment at maturity)
- **Default Type**: Price-based and/or payment-based (lender-specified)
- **Grace Period**: Not applicable
### Available Durations
- 1 day
- 1 week
- 1 month
- 3 months
### Fees
To compensate lenders for an unused portion of a loan duration, borrowers are partial interest on any early repaid principal, expressed as a percentage of the original interest expected for the repaid principal.
**Early Repayment Penalty**: 5% of forgone interest
 ## Principal
 The following assets are eligible to be used as principal on Bridgesplit Markets's vLCBs.
 | Asset | Oracle |
 |:--|:--|
 |USDC ([Mint](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v)) | Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD |
 | USDT ([Mint](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB)) | 3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL |
 | EURC ([Mint](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr)) | 91Sfpm86H7ZgngdGfAiVJTNbg42CXBPiurruf29kinMh |
 | BONK ([Mint](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263)) | 8ihFLu5FimgTQ1Unh4dVyEHUGodJ5gJQCrQf4KUVB9bN |
 | WEN ([Mint](https://solscan.io/token/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk))| 6Uo93N83iF5U9KwC8eQpogx4XptMT4wSKfje7hB1Ufko |

## Collateral
| Asset | LTV (%) | Liq. Ratio (%) | Oracle |
|:--|:--|:--|:--|
|USDC ([Mint](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v))| 95|98|Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD|
|USDT ([Mint](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB))|95|98|3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL|
|EURC ([Mint](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr))|95|98|91Sfpm86H7ZgngdGfAiVJTNbg42CXBPiurruf29kinMh|
|mSOL ([Mint](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So))|75|85|E4v1BBgoso9s64TQvmyownAVJbhbEPGyzA3qn4n46qj9|
|jitoSOL ([Mint](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn))|75|85|7yyaeuJ1GGtVBLT2z2xub5ZWYKaNhF28mj1RdV4VDFVk|
|bSOL ([Mint](https://solscan.io/token/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1))|75|85|AFrYBhb5wKQtxRS9UA9YRS4V3dwFm7SqmS6DHKq6YVgo|
|SOL ([Mint](https://solscan.io/token/So11111111111111111111111111111111111111112))|80|90|H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG|
|Native Staked SOL ([Mint](https://solscan.io/token/So11111111111111111111111111111111111111112))|60|75|H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG|
|JUP ([Mint](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN))|70|80|g6eRCbboSwK4tSWngn773RCMexr1APQr4uA9bGZBYfo|
|JTO ([Mint](https://solscan.io/token/jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL))|70|80|D8UUgr8a3aR3yUeHLu7v8FWK7E8Y5sSU7qrYBXUJXBQ5|
|RENDER ([Mint](https://solscan.io/token/rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof))|45|60|CYGfrBJB9HgLf9iZyN4aH5HvUAi2htQ4MjPxeXMf4Egn|
|HNT ([Mint](https://solscan.io/token/hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux))|55|65|7moA1i5vQUpfDwSpK6Pw9s56ahB7WFGidtbL2ujWrVvm|
|PYTH ([Mint](https://solscan.io/token/HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3))|60|70|nrYkQQQur7z8rYTST3G9GqATviK5SxTDkrqd21MW6Ue|
|W ([Mint](https://solscan.io/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ))|60|70|H9j8CT1bFiWHaZUPMooEaxMRHdWdJ5T9CzFn41z96JHW|
|WIF ([Mint](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm))|40|60|6ABgrEZk8urs6kJ1JNdC1sspH5zKXRqxy8sg3ZG2cQps|
|WEN ([Mint](https://solscan.io/token/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk))|25|40|6Uo93N83iF5U9KwC8eQpogx4XptMT4wSKfje7hB1Ufko|
|BONK ([Mint](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263))|45|65|8ihFLu5FimgTQ1Unh4dVyEHUGodJ5gJQCrQf4KUVB9bN|
|wstETH ([Mint](https://solscan.io/token/ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo))|70|85|8QFEAwdamHFFRnj3Swnv1CkVNZBeFiVzraC548xhmpT5|
|wETH ([Mint](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs))|70|85|JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB|
|wBTC ([Mint](https://solscan.io/token/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh))|70|85|GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU|
|Orca ([Mint](https://solscan.io/token/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE))|30|50|4ivThkX8uRxBpHsdWSqyXYihzKF3zpRGAUCqyuagnLoV|
|Raydium ([Mint](https://solscan.io/token/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE))|30|50|AnLf8tVYCM816gmBjiy8n53eXKKEDydT5piYjjQDPgTB