# Module 6: Storage › AWS Elastic Disaster Recovery

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m06-10-aws-elastic-disaster-recovery-q1 -->
## Question 1

AnyCompany Telecommunications is concerned about potential downtime after experiencing an outage last quarter. They want to implement a disaster recovery solution for their on-premises server fleet but have limited IT staff. The CEO is particularly concerned about maintaining exact replicas of production servers and minimizing recovery time.What is a key benefit of using AWS Elastic Disaster Recovery in this scenario?

_Choose 1_

- [x] A. Continuous block-level replication with frequent backup intervals, providing near-instant recovery of servers at the target AWS Region
- [ ] B. Elimination of source-side agents by using existing backup software
- [ ] C. Direct connection to AWS Storage Gateway to accelerate backup and recovery operations
- [ ] D. Automated creation of separate development and test environments from production backups

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Elastic Disaster Recovery provides continuous block-level replication that maintains exact server replicas with minimal time between backup intervals, enabling rapid recovery when needed.
