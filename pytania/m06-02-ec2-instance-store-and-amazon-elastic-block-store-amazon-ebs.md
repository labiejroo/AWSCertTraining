# Module 6: Storage › EC2 Instance Store and Amazon Elastic Block Store (Amazon EBS)

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m06-02-ec2-instance-store-and-amazon-elastic-block-store-amazon-ebs-q1 -->
## Question 1

A developer is building an application that processes large amounts of data and requires high I/O performance. After processing the data for an operation, the results are displayed to the user and do not need to be retained long-term. Unfortunately, the application's current storage solution is experiencing performance bottlenecks during peak processing times. How could implementing an EC2 instance store improve the performance of the application?

_Choose 1_

- [ ] A. EC2 instance store provides a persistent storage solution that survives instance failures.
- [ ] B. EC2 instance store allows storage to be conveniently shared between multiple EC2 instances simultaneously.
- [ ] C. EC2 instance store reduces overall storage costs by offering the cheapest per-gigabyte storage option in AWS.
- [x] D. EC2 instance store provides high I/O performance for temporary storage needs.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: EC2 instance store is directly attached to the host, offering extremely low latency and high I/O performance for applications that need temporary storage with fast access.

<!-- id: m06-02-ec2-instance-store-and-amazon-elastic-block-store-amazon-ebs-q2 -->
## Question 2

AnyCompany Finance is designing an application that requires consistent and low-latency access to financial data. They're looking for a storage solution that provides persistent block storage. Why would Amazon EBS be suitable to store data in this scenario?

_Choose 1_

- [ ] A. Amazon EBS allows sharing volumes across multiple AWS Regions without any latency impact.
- [ ] B. Amazon EBS automatically scales volume capacity without requiring any volume modifications.
- [ ] C. Amazon EBS provides unlimited input/output operations per second (IOPS) for all volume types, regardless of size.
- [x] D. Amazon EBS provides high availability and durability by automatically replicating volumes within the same Availability Zone.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon EBS ensures data protection through automatic replication within the same Availability Zone. This provides the high availability and durability needed for financial applications with critical data.

<!-- id: m06-02-ec2-instance-store-and-amazon-elastic-block-store-amazon-ebs-q3 -->
## Question 3

AnyCompany Software is migrating their on-premises application architecture to AWS. They are particularly concerned about data persistence because in their current environment, they have experienced data loss when virtual machines (VMs) crashed. They want to understand how Amazon Elastic Block Store (Amazon EBS) can help address their data persistence requirements when they move their workloads to Amazon EC2 instances. How does Amazon EBS solve the data persistence issue described in this scenario?

_Choose 1_

- [ ] A. Amazon EBS caches all data in memory for instant recovery when instances are restarted.
- [ ] B. EBS automatically synchronizes data with Amazon S3 every 5 minutes, ensuring that if an EC2 instance crashes, all data can be immediately restored from the S3 backup.
- [ ] C. Amazon EBS automatically backs up all data to Amazon S3 every hour to help ensure persistence.
- [x] D. Amazon EBS volumes exist independently from the instance and persist even after the instance is terminated.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: EBS volumes have a lifecycle that is independent from EC2 instances. They can be detached from one instance and attached to another, and the data remains intact even if the instance is shut down or terminated.
