# Module 7: Databases › Relational Database Services

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m07-02-relational-database-services-q1 -->
## Question 1

AnyCompany Retail wants to migrate its product database to the AWS Cloud to reduce operational overhead. Their existing database contains critical inventory and pricing information that requires continuous operation with minimal downtime. Management is exploring Amazon RDS as a way to reduce the number of IT resources. Which feature of Amazon RDS addresses the database requirements described in this scenario?

_Choose 1_

- [ ] A. Manual snapshot creation
- [ ] B. Fixed storage allocation
- [ ] C. Self-managed patching
- [x] D. Multi-AZ deployments

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Multi-AZ deployments provide enhanced availability and durability by automatically creating database replicas in different Availability Zones. In case of infrastructure failure, Amazon RDS performs an automatic failover to the standby instance, thus ensuring that the database remains accessible with minimal disruption.

<!-- id: m07-02-relational-database-services-q2 -->
## Question 2

AnyCompany Financial is experiencing slow response times with their current MySQL database during peak transaction periods. It processes over 100,000 transactions per hour and requires high throughput for customer satisfaction. The CTO is looking at Amazon Aurora as a way to significantly improve database performance. Which Aurora feature BEST addresses this scenario?

_Choose 1_

- [x] A. Aurora provides a high-performance, highly available storage architecture that offers up to five times the throughput of standard MySQL.
- [ ] B. Aurora includes data compression technology that reduces storage requirements for faster query performance.
- [ ] C. Aurora provides built-in automated instance scaling that adds more CPU resources during peak transaction times.
- [ ] D. Aurora offers a centralized storage system that eliminates network latency between instances.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: The Aurora distributed storage architecture offers up to five times the throughput of standard MySQL while maintaining compatibility. It was specifically designed to handle high transaction workloads by distributing I/O across multiple storage nodes.
