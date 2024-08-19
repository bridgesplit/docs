---
sidebar_position: 4
---
# Asset Parameters
Borrowers and lenders on Loopscale interact via virtualized Limit Creditbooks with standardized terms including principal and collateral options, principal and collateral oracles, and loan terms. These standardized terms are available below. More information on terms and how they affect a loan is available in [Protocol Concepts](/concepts/loopscale/asset-parameters).

### Available Durations
- 1 day
- 1 week
- 1 month
- 3 months

### Fees
To compensate lenders for an unused portion of a loan duration, borrowers are partial interest on any early repaid principal, expressed as a percentage of the original interest expected for the repaid principal.

**Early Repayment Penalty**: 50% of forgone interest

## Principal
The following assets are eligible to be used as principal on Loopscale's vLCBs.
| Asset | Oracle |
|:--|--:|
|[USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) |Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD |
|[USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) |3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL |
|[SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) |H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG |
|[EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) |91Sfpm86H7ZgngdGfAiVJTNbg42CXBPiurruf29kinMh |
|[BONK](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) |8ihFLu5FimgTQ1Unh4dVyEHUGodJ5gJQCrQf4KUVB9bN |
|[WEN](https://solscan.io/token/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk)|6Uo93N83iF5U9KwC8eQpogx4XptMT4wSKfje7hB1Ufko |

## Collateral - 
| Asset | LTV (%) | Liq. Ratio (%) | Oracle |
|:--|--:|--:|--:|
|[Solana](https://solscan.io/token/So11111111111111111111111111111111111111112)| 80|90|7UVimffxr9ow1uXYxsr4LHAcV58mLzhmwaeKvJ1pjLiE|
|[USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v)| 95|98|Dpw1EAVrSB1ibxiDQyTAW6Zip3J4Btk2x4SgApQCeFbX|
|[WEN](https://solscan.io/token/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk)| 25|40|CsG7wXoqZKNxx4UnFtvozfwXQ9RgpKe7zSJa4LWh5MT9|
|[JitoSol](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn)| 75|85|AxaxyeDT8JnWERSaTKvFXvPKkEdxnamKSqpWbsSjYg1g|
|[Jito](https://solscan.io/token/jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL)| 70|80|7ajR2zA4MGMMTqRAVjghTKqPPn4kbrj3pYkAVRVwTGzP|
|[Staked Sol](https://solscan.io/token/sTSoN7tYft63PJjHw2NcgJ43saq3NiE3XCdfvXXcTrD)| 60|75|7UVimffxr9ow1uXYxsr4LHAcV58mLzhmwaeKvJ1pjLiE|
|[mSol](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So)| 75|85|5CKzb9j4ChgLUt8Gfm5CNGLN6khXKiqMbnGAW4cgXgxK|
|[bSol](https://solscan.io/token/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1)| 75|85|5cN76Xm2Dtx9MnrQqBDeZZRsWruTTcw37UruznAdSvvE|
|[Jupiter](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN)| 70|80|7dbob1psH1iZBS7qPsm3Kwbf5DzSXK8Jyg31CTgTnxH5|
|[wEth](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs)| 70|85|4TQ1VVWkrYUvyQ6hMmjepwr7swvqsyvLi75BiJi13Tf3|
|[wBTC](https://solscan.io/token/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh)| 70|85|4cSM2e6rvbGQUFiJbqytoVMi5GgghSMr8LwVrT9VPSPo|
|[USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB)| 95|98|HT2PLQBcG5EiCcNSaMHAjSgd9F98ecpATbk4Sk5oYuM|
|[Pyth](https://solscan.io/token/HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3)| 60|70|8vjchtMuJNY4oFQdTi8yCe6mhCaNBFaUbktT482TpLPS|
|[W](https://solscan.io/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ)| 60|70|BEMsCSQEGi2kwPA4mKnGjxnreijhMki7L4eeb96ypzF9|
|[HNT](https://solscan.io/token/hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux)| 70|80|FERjPVNEa7Udq8CEv68h6tPL46Tq7ieE49HrE2wea3XT|
|[WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm)|40|60|6B23K3tkb51vLZA14jcEQVCA1pfHptzEHFA93V5dYwbT|
|[RLB](https://solscan.io/token/RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a)|30|50|FKhA7f11fMokfi3c7J8R9M3TSJ3E26aeUuSm9bADgPF3|
|[BONK](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263)|45|65|DBE3N8uNjhKPRHfANdwGvCZghWXyLPdqdSbEW2XFwBiX|
|[wstETH](https://solscan.io/token/ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo)|70|85|HyoTrHkmhM8YETBagUFqtT95JpkFWtLDtL3uQHsLVT5j|
|[Orca](https://solscan.io/token/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE)|30|50|4CBshVeNBEXz24GZpoj8SrqP5L7VGG3qjGd6tCST1pND|
|[EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr)|85|95|HyBsZY1UiGttbQ3ppBmnFVss9rmDAEvEbtYxdfjNAqBZ|
|[RAY](https://solscan.io/token/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R)|30|50|Hhipna3EoWR7u8pDruUg8RxhP5F6XLh6SEHMVDmZhWi8|
|[IOT](https://solscan.io/token/iotEVVZLEywoTn1QdwNPddxPWszn3zFhEot3MfL9fns)|10|20|8UYEn5Weq7toHwgcmctvcAxaNJo3SJxXEayM57rpoXr9|
|[Marinade](https://solscan.io/token/MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey)|50|65|GHKcxocPyzSjy7tWApQjKRkDNuVXd4Kk624zhuaR7xhC|
|[Mobile](https://solscan.io/token/mb1eu7TzEc71KxDpsmsKoucSSuuoGLv1drys1oP2jh6)|10|20|DQ4C1tzvu28cwo1roN1Wm6TW35sfJEjLh517k3ZeWevx|
|[Render](https://solscan.io/token/rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof)|45|60|HAm5DZhrgrWa12heKSxocQRyJWGCtXegC77hFQ8F5QTH|
|[cgntSOL](https://solscan.io/token/CgnTSoL3DgY9SFHxcLj6CgCgKKoTBr6tp4CPAEWy25DE)|40|55|CgntPoLka5pD5fesJYhGmUCF8KU1QS1ZmZiuAuMZr2az|
|[phaseSOL](https://solscan.io/token/phaseZSfPxTDBpiVb96H4XFSD8xHeHxZre5HerehBJG)|45|60|phasejkG1akKgqkLvfWzWY17evnH6mSWznnUspmpyeG|
|[superSOL](https://solscan.io/token/suPer8CPwxoJPQ7zksGMwFvjBQhjAHwUMmPV4FVatBw)|45|60|4dZDUL3BFJUFeqS3Y3cwkc84Rs6mgVHRYGt1LJvhooW4|
|[lanternSOL](https://solscan.io/token/LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg)| 45|60|LW3qEdGWdVrxNgxSXW8vZri7Jifg4HuKEQ1UABLxs3C|
|[pwrSOL](https://solscan.io/token/pWrSoLAhue6jUxUkbWgmEy5rD9VJzkFmvfTDV5KgNuu)| 45|60|DfiQgSvpW3Dy4gKfhtdHnWGHwFUrE8exvaxqjtMtAVxk|
|[pathSol](https://solscan.io/token/pathdXw4He1Xk3eX84pDdDZnGKEme3GivBamGCVPZ5a)| 50|65|GM7TwD34n8HmDP9XcT6bD3JJuNniKJkrKQinHqmqHarz|
|[clockSol](https://solscan.io/token/GRJQtWwdJmp5LLpy8JWjPgn5FnLyqSJGNhn5ZnCTFUwM)| 50|65|6e2LpgytfG3RqMdYuPr3dnedv6bmHQUk9hH9h2fzVk9o|
|[hubSol](https://solscan.io/token/HUBsveNpjo5pWqNkH57QzxjQASdTVXcSK7bVKTSZtcSX)| 50|65|ECRqn7gaNASuvTyC5xfCUjehWZCSowMXstZiM5DNweyB|
|[stakeSol](https://solscan.io/token/st8QujHLPsX3d6HG9uQg9kJ91jFxUgruwsb1hyYXSNd)| 50|65|2jjK1MsLgsPgVjnp97HUJeovNj3jp4XgyQ3nuiWMwiS8|
|[pumpkinSol](https://solscan.io/token/pumpkinsEq8xENVZE6QgTS93EN4r9iKvNxNALS1ooyp)| 50|65|8WHCJsUduwDBhPL9uVADQSdWkUi2LPZNFAMyX1n2HGMD|
|[strongSol](https://solscan.io/token/strng7mqqc1MBJJV6vMzYbEqnwVGvKKGKedeCvtktWA)| 50|65|GZDX5JYXDzCEDL3kybhjN7PSixL4ams3M2G4CvWmMmm5|
|[edgeSol](https://solscan.io/token/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt)| 55|70|edgejNWAqkePLpi5sHRxT9vHi7u3kSHP9cocABPKiWZ|
|[fpSol](https://solscan.io/token/fpSoL8EJ7UA5yJxFKWk1MFiWi35w8CbH36G5B9d7DsV)| 40|55|GutG5bcmEZw15WmPHNVMWHU77c6t8CEinUEdPLYz3doa|
|[JSol](https://solscan.io/token/7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn)| 55|70|CtMyWsrUtAwXWiGr9WjHT5fC3p3fgV8cyGpLTo2LJzG1|
|[vSol](https://solscan.io/token/vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7)| 60|75|Fu9BYC6tWBo1KMKaP3CFoKfRhqv9akmy3DuYwnCyWiyC|
|[WenSol](https://solscan.io/token/WensoLXxZJnev2YvihHFchn1dVVFnFLYvgomXWvvwRu)| 50|65|CWM1VcNPd2A5WF2x2mmEUCgA1PGSKNZCGAH5GsoQw7h8|
|[bonkSol](https://solscan.io/token/BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs)| 60|75|ArAQfbzsdotoKB5jJcZa3ajQrrPcWr2YQoDAEAiFxJAC|
|[hSol](https://solscan.io/token/he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3foJYDW)| 70|80|FERjPVNEa7Udq8CEv68h6tPL46Tq7ieE49HrE2wea3XT|
|[jupSol](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v)|70|80|8VpRhuxa7sUUepdY3kQiTmX9rS5vx4WgaXiAnXq4KCtr|
|[compassSol](https://solscan.io/token/Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h)|60|75|AwDeTcW6BovNYR34Df1TPm4bFwswa4CJY4YPye2LXtPS|
|[jucySol](https://solscan.io/token/jucy5XJ76pHVvtPZb5TKRcGQExkwit2P5s4vY8UzmpC)|60|75|AZGSr2fUyKkPLMhAW6WUEKEsQiRMAFKf8Fjnt4MFFaGv|
|[laineSol](https://solscan.io/token/LAinEtNLgpmCP9Rvsf5Hn8W6EhNiKLZQti1xfWMLy6X)|60|75|2qyEeSAWKfU18AFthrF7JA8z8ZCi1yt76Tqs917vwQTV|
|[picoSol](https://solscan.io/token/picobAEvs6w7QEknPce34wAE4gknZA9v5tTonnmHYdX)|60|75|8Dv3hNYcEWEaa4qVx9BTN1Wfvtha1z8cWDUXb7KVACVe|
|[dSol](https://solscan.io/token/Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ)|60|75|9mhGNSPArRMHpLDMSmxAvuoizBqtBGqYdT8WGuqgxNdn|
|[metmSOL](https://solscan.io/token/21bR3D4QR4GzopVco44PVMBXwHFpSYrbrdeNwdKk7umb)|65|75|8p1VKP45hhqq5iZG5fNGoi7ucme8nFLeChoDWNy7rWFm|
|[metUSDC](https://solscan.io/token/3RpEekjLE5cdcG15YcXJUpxSepemvq2FpmMcgo342BwC)|80|90|3ESUFCnRNgZ7Mn2mPPUMmXYaKU8jpnV9VtA17M7t2mHQ|
|[metUSDT](https://solscan.io/token/EZun6G5514FeqYtUv26cBHWLqXjAEdjGuoX6ThBpBtKj)|80|90|5XCP3oD3JAuQyDpfBFFVUxsBxNjPQojpKuL4aVhHsDok|
|[metSOL](https://solscan.io/token/FZN7QZ8ZUUAxMPfxYEYkH3cXUASzH8EqA6B4tyCL8f1j)|70|80|FERjPVNEa7Udq8CEv68h6tPL46Tq7ieE49HrE2wea3XT|
|[USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6)| 85|95|234oAERsti3gMYH8DNXxawKm7jGLwqgSsGB5Cz72KeXU|
|[JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4)| 65|80|pmHEXBam7kbmCCg5ED5V7RNMN8e34sKu338KeuFAGof|
|[orcaBONKSOL](https://solscan.io/token/3ne4mWqdYuNiYrYZC9TrA3FcfuFdErghH97vNPbjicr1)| 40|60|3ne4mWqdYuNiYrYZC9TrA3FcfuFdErghH97vNPbjicr1|
|[orcaUSDTUSDC](https://solscan.io/token/4fuUiYxTQ6QCrdSq9ouBYcTM7bqSwYTSyLueGZLTy4T4)| 80|90|4fuUiYxTQ6QCrdSq9ouBYcTM7bqSwYTSyLueGZLTy4T4|
|[orcaJLPSOL](https://solscan.io/token/4Z1A4Wy4Qj1GDC98YXYCuEkibVsHXoB1pMsn2crqEgDF)| 55|75|4Z1A4Wy4Qj1GDC98YXYCuEkibVsHXoB1pMsn2crqEgDF|
|[orcaJLPUSDC](https://solscan.io/token/6NUiVmsNjsi4AfsMsEiaezsaV9N4N1ZrD4jEnuWNRvyb)| 55|75|6NUiVmsNjsi4AfsMsEiaezsaV9N4N1ZrD4jEnuWNRvyb|
|[orcaWIFSOL](https://solscan.io/token/D6NdKrKNQPmRZCCnG1GqXtF7MMoHB7qR6GU5TkG59Qz1)| 40|60|D6NdKrKNQPmRZCCnG1GqXtF7MMoHB7qR6GU5TkG59Qz1|
|[orcaSolUSDC](https://solscan.io/token/FpCMFDFGYotvufJ7HrFHsWEiiQCGbkLCtwHiDnh7o28Q)| 70|85|FpCMFDFGYotvufJ7HrFHsWEiiQCGbkLCtwHiDnh7o28Q|
|[wAvax](https://solscan.io/token/KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE)| 65|80|HUBqpBf3aGJdVQndFHmMUd1eMcixt7S4swYPCx8A93K1|
|[wArb](https://solscan.io/token/8LH3QMo7xkMJx85Kg4pfiQY1g1ZgiVEe1KktSpaT89mP)| 60|75|36XiLSLUq1trLrK5ApwWs6LvozCjyTVgpr2uSAF3trF1|
|[wSui](https://solscan.io/token/G1vJEgzepqhnVu35BN4jrkv3wVwkujYWFFCxhbEZ1CZr)| 50|70|GgV3a7YeVRga9prjNGEDBG9NwatSaD8rwjZ4GNjPiXTq|
|[wOP](https://solscan.io/token/S62gBPpvCxzE5a7T39QGXPMxVP2fTgequtsgm9jGhaq)| 60|75|DgbEZkKzsRCQgbpdwiM5XcNZ4KzR5hsQZabtHGemf3Cc|
|[wInj](https://solscan.io/token/Hgtvu9gsDTzUpBn69WjrhMyzaQhrAM9piTsezmZVQP6Z)| 50|70|GwXYEfmPdgHcowF9GZwbb1WiTGTn1fuT3hbSLneoBKK6|
|[wMatic](https://solscan.io/token/Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG)| 50|70|5JQ3vHYR38aPUu1L1qHRhYXZWYFCCzox2HavyGypwVWP|