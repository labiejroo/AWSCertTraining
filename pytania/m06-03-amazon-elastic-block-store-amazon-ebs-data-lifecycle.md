# Module 6: Storage › Amazon Elastic Block Store (Amazon EBS) Data Lifecycle

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m06-03-amazon-elastic-block-store-amazon-ebs-data-lifecycle-q1 -->
## Question 1

AnyCompany Commerce operates an online trading platform experiencing rapid growth. Their development team frequently needs to create test environments that mirror production for testing new features, but setting up these environments has become time-consuming and error-prone. What is the most significant benefit of using EBS snapshots in this scenario?

_Choose 1_

- [x] A. EBS snapshots enable rapid creation of new volumes from existing data, so you can quickly deploy identical test environments that mirror production.
- [ ] B. EBS snapshots reduce your storage costs by compressing all data on your EBS volumes by up to 90 percent.
- [ ] C. EBS snapshots automatically optimize the performance of your EBS volumes by defragmenting data during the snapshot process.
- [ ] D. EBS snapshots automatically migrate your data to different AWS Regions for improved global access speeds.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: EBS snapshots capture the exact state of a volume at a point in time, making them perfect for creating consistent copies of environments for testing purposes.

<!-- id: m06-03-amazon-elastic-block-store-amazon-ebs-data-lifecycle-q2 -->
## Question 2

AnyCompany Healthcare manages thousands of EBS volumes containing patient records. They need to ensure that this data is properly backed up, retained according to compliance requirements, and old snapshots are removed to control costs. Which problem does AWS Data Lifecycle Manager primarily solve in this scenario?

_Choose 1_

- [x] A. Automating the creation, retention, and deletion of EBS snapshots and EBS backed Amazon Machine Images (AMIs) according to a schedule
- [ ] B. Migrating patient data from on-premises storage to AWS Cloud storage
- [ ] C. Providing real-time monitoring of EBS volume performance metrics
- [ ] D. Encrypting sensitive patient data stored on EBS volumes

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon Data Lifecycle Manager defines lifecycle policies that automate snapshot management based on schedules. This eliminates the need for manual snapshot management.
