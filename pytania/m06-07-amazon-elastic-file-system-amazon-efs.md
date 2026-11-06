# Module 6: Storage › Amazon Elastic File System (Amazon EFS)

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m06-07-amazon-elastic-file-system-amazon-efs-q1 -->
## Question 1

AnyCompany Financial needs to implement a new data application that will analyze market data. The application must be able to scale compute resources up or down to match traffic demand while maintaining access to the same datasets. What is a benefit of using Amazon EFS as the storage solution for the application described in this scenario?

_Choose 1_

- [ ] A. Amazon EFS provides the lowest cost storage option for infrequently accessed financial data.
- [x] B. Amazon EFS provides elastic storage capacity, automatically scaling up and down as files are added and removed, with no disruption to applications.
- [ ] C. Amazon EFS provides faster read access than local instance storage for high-frequency trading algorithms.
- [ ] D. Amazon EFS provides automatic global replication of data, eliminating the need for data backups.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon EFS automatically scales as data is added or removed. This means AnyCompany Financial can scale their compute resources independently while maintaining access to the same elastic file system.

<!-- id: m06-07-amazon-elastic-file-system-amazon-efs-q2 -->
## Question 2

AnyCompany Retail is planning to migrate their on-premises file storage to AWS. They need a solution that allows their global development teams to collaborate on the same set of files simultaneously.Which feature of Amazon EFS makes it a good fit for this scenario?

_Choose 1_

- [ ] A. Amazon EFS provides block storage that can be formatted with any file system.
- [ ] B. Amazon EFS offers single-instance access with high throughput for dedicated processing.
- [x] C. Amazon EFS provides shared access for thousands of Amazon EC2 instances, with consistent low latencies.
- [ ] D. Amazon EFS makes it possible to store files in the cloud, but requires manual synchronization between different instances.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon EFS is designed for concurrent shared access from multiple EC2 instances across different Availability Zones with consistent performance. This makes it possible for global teams to collaborate on the same files.
