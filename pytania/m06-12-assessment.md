# Module 6: Storage › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m06-12-assessment-q1 -->
## Question 1

Which statement BEST describes Amazon Elastic Block Store (Amazon EBS)?

_Choose 1_

- [ ] A. An in-memory cache used to improve database performance
- [ ] B. A temporary storage option that is lost when an instance is stopped or terminated
- [x] C. A block-level storage service that provides persistent storage volumes for Amazon EC2 instances
- [ ] D. A file storage system that allows multiple instances to access the same data simultaneously

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon EBS is specifically designed as a block storage service offering persistent volumes that can be attached to EC2 instances and survive instance termination.

<!-- id: m06-12-assessment-q2 -->
## Question 2

AnyCompany Commerce has recently migrated its main application to an Amazon EC2 instance in AWS. As their customer base expands, they are exploring storage solutions that can grow dynamically with the application's data needs.The solution needs to meet the following criteria: Have persistent block storage that provides consistent low-latency performance.Be able to be attached to and detached from the EC2 instance as needed.Independently resize storage capacity without disrupting the instance.Create point-in-time backups to protect critical customer and inventory data.Which AWS storage service would BEST meet the requirements in the scenario?

_Choose 1_

- [x] A. Amazon Elastic Block Store (Amazon EBS)
- [ ] B. Amazon FSx
- [ ] C. Amazon S3
- [ ] D. Amazon Elastic File System (Amazon EFS)

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon EBS provides persistent block storage volumes that can be attached to EC2 instances. It offers consistent low-latency performance, can be scaled independently of the EC2 instance, and supports point-in-time snapshots for backup purposes.

<!-- id: m06-12-assessment-q3 -->
## Question 3

AnyCompany AI is developing a machine learning application that requires extremely fast data processing for temporary model training datasets. The data is generated during training sessions and stored separately in persistent storage. The team is trying to determine the best storage solution to use alongside their application.The solution needs to meet the following criteria: Highest possible I/O performanceDirectly attached to their Amazon EC2 instancesTemporary storage – data does not persist when instances are stopped or terminatedWhich AWS service BEST meets the temporary storage needs described in this scenario?

_Choose 1_

- [x] A. Amazon EC2 instance store
- [ ] B. Amazon Elastic Block Store (Amazon EBS)
- [ ] C. Amazon S3
- [ ] D. Amazon Elastic File System (Amazon EFS)

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: EC2 instance store provides temporary block-level storage that is physically attached to the host computer, offering the highest possible I/O performance for temporary data processing needs.

<!-- id: m06-12-assessment-q4 -->
## Question 4

AnyCompany Software is deploying a critical production application on Amazon EC2 instances with several Amazon Elastic Block Store (Amazon EBS) volumes containing application code and customer data. The team is looking for an AWS service they can use to back up the data for their application.The solution needs to meet the following criteria:Create regular data backups.Create duplicate environments for testing.Create a disaster recovery strategy.Create full or incremental backups without impacting application performance.Provide cost-effective for long-term storage.Which AWS service or feature would BEST meet the requirements in the scenario?

_Choose 1_

- [x] A. EBS snapshots
- [ ] B. Amazon Elastic File System (Amazon EFS)
- [ ] C. Amazon S3 Glacier Flexible Retrieval
- [ ] D. Amazon FSx

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: EBS snapshots are point-in-time copies of EBS volumes that can be used for regular backups, creating duplicate volumes for testing, and enabling fast disaster recovery by restoring entire volumes from snapshots.

<!-- id: m06-12-assessment-q5 -->
## Question 5

Which statement BEST describes Amazon S3?

_Choose 1_

- [x] A. A scalable object storage service that is used to store and retrieve any amount of data from anywhere on the web.
- [ ] B. A storage service primarily designed for long-term archival and backup of data that is rarely accessed.
- [ ] C. A file storage service that provides a traditional file system interface for sharing files between multiple instances.
- [ ] D. A block-level storage service that provides persistent storage for Amazon EC2 instances.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon S3 is fundamentally an object storage service designed for scalability. Users can store unlimited amounts of data that can be accessed from anywhere with internet connectivity.

<!-- id: m06-12-assessment-q6 -->
## Question 6

AnyCompany Marketing needs a storage solution that they can use to distribute large collections of high-resolution images, videos, and design files for their clients' campaigns. Some assets are accessed frequently, whereas others are archived for occasional reference.The solution needs to meet the following criteria:Unlimited storage capacityHigh durabilityEasy file sharing through URLsAbility to organize assets by client and projectCost-efficient storage optionsSecurity controls to prevent unauthorized access for specific assetsWhich AWS service is BEST suited for the storage needs described in this scenario?

_Choose 1_

- [x] A. Amazon S3
- [ ] B. Amazon FSx
- [ ] C. Amazon Elastic Block Storage (Amazon EBS)
- [ ] D. Amazon Elastic File System (Amazon EFS)

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon S3 provides scalable object storage ideal for storing and distributing media files. It includes features like lifecycle policies for cost optimization, bucket organization for client projects, access controls for security, and the ability to generate URLs for easy file sharing.

<!-- id: m06-12-assessment-q7 -->
## Question 7

What is the primary function of Amazon S3 storage classes?

_Choose 1_

- [ ] A. To replicate data across multiple AWS Regions automatically
- [x] B. To provide different storage options optimized for different use cases and access patterns
- [ ] C. To encrypt data at rest and in transit
- [ ] D. To organize objects within buckets hierarchically

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon S3 storage classes are designed to offer different performance characteristics, availability levels, and cost structures to match specific data storage requirements and access patterns.

<!-- id: m06-12-assessment-q8 -->
## Question 8

What is a key characteristic of Amazon S3 storage classes pricing?

_Choose 1_

- [x] A. Pricing varies based on storage costs, retrieval fees, and minimum storage durations.
- [ ] B. All storage classes cost the same but differ in retrieval speed.
- [ ] C. Pricing is exclusively determined by the geographic region of the bucket.
- [ ] D. All storage classes have the same minimum storage duration requirement.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon S3 storage classes have different pricing structures that affect the overall cost. These include storage costs per gigabyte, potential data retrieval charges, and minimum storage duration commitments.

<!-- id: m06-12-assessment-q9 -->
## Question 9

Which statement BEST describes Amazon Elastic File System (Amazon EFS)?

_Choose 1_

- [ ] A. An object storage service designed for long-term archival of rarely accessed data
- [ ] B. A fixed-capacity file storage system that requires manual scaling and management
- [ ] C. A block storage service that provides volumes to attach to single Amazon EC2 instance
- [x] D. A fully managed, elastic file system that scales automatically as files are added and removed

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: This accurately describes the Amazon EFS core value proposition as a service that automatically grows and shrinks with the storage needs without manual provisioning.

<!-- id: m06-12-assessment-q10 -->
## Question 10

AnyCompany Technology needs to implement a centralized storage solution for their development team that allows multiple Amazon EC2 instances to access the same file system simultaneously.The solution needs to meet the following criteria:Provide a fully managed service.Automatically scale.Eliminate the need for capacity planning.Support Linux-based applications with standard file system interfaces.Maintain consistent low-latency access across development environments.Provide high durability without requiring complex replication setups.Which AWS storage service is BEST suited for this scenario?

_Choose 1_

- [ ] A. Amazon Elastic Block Storage (Amazon EBS)
- [x] B. Amazon Elastic File System (Amazon EFS)
- [ ] C. Amazon S3
- [ ] D. Amazon FSx

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon EFS provides a scalable, fully managed elastic network file system (NFS) that can be accessed concurrently by multiple EC2 instances. It automatically grows as data is added and offers POSIX compliance for Linux applications.

<!-- id: m06-12-assessment-q11 -->
## Question 11

Which statement BEST describes Amazon FSx?

_Choose 1_

- [ ] A. An object storage solution designed for archiving rarely accessed data
- [x] B. A fully managed service that provides cost-effective, scalable file storage built on widely used file systems
- [ ] C. A block storage service that provides high performance volumes for EC2 instances
- [ ] D. A service used to set up private file sharing within an on-premises data center only

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon FSx is specifically designed as a fully managed service that offers file storage based on popular file systems like Windows File Server, Lustre, OpenZFS, and NetApp ONTAP.

<!-- id: m06-12-assessment-q12 -->
## Question 12

AnyCompany Marketing needs to migrate their existing file shares to AWS to support their design teams who work with large creative files. They need help choosing a storage solution that can facilitate this migration.The solution needs to meet the following requirements:Provide a fully managed service.Seamlessly integrate with Windows applications.Support SMB protocol.Offer Active Directory integration for user authentication.Support data deduplication to optimize storage costs.Provide consistent sub-millisecond latencies.Provide high availability.Which AWS storage service BEST meets the requirements described in the scenario?

_Choose 1_

- [ ] A. Amazon Elastic File System (Amazon EFS)
- [x] B. Amazon FSx for Windows File Server
- [ ] C. Amazon Storage Gateway
- [ ] D. Amazon S3

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon FSx for Windows File Server is specifically designed for Windows workloads. It provides SMB support, Active Directory integration, and Windows features like data deduplication, while delivering consistent sub-millisecond latencies as a fully managed service.

<!-- id: m06-12-assessment-q13 -->
## Question 13

Which statement BEST describes AWS Storage Gateway?

_Choose 1_

- [ ] A. A migration tool that automatically transfers all on-premises data to the cloud
- [ ] B. A physical hardware appliance that must be installed in a data center
- [ ] C. A virtual private network that creates secure connections between a data center and AWS
- [x] D. A hybrid cloud storage solution that provides on-premises applications with access to virtually unlimited cloud storage

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Storage Gateway is fundamentally designed as a hybrid solution that connects on-premises environments to AWS Cloud storage. This allows local applications to seamlessly access AWS storage while maintaining local access patterns.

<!-- id: m06-12-assessment-q14 -->
## Question 14

Which statement BEST describes AWS Elastic Disaster Recovery?

_Choose 1_

- [ ] A. A backup service that creates periodic snapshots of AWS resources and stores them in Amazon S3 buckets
- [ ] B. A managed database service that provides automated backups and cross-Region replication
- [ ] C. A service that automatically scales computing capacity based on workload demands during disaster events
- [x] D. A service that minimizes downtime and data loss by providing fast, reliable recovery of on-premises and cloud-based applications using affordable storage, minimal compute, and point-in-time recovery

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: This accurately describes the core functionality of Elastic Disaster Recovery, which focuses on continuous replication to help provide rapid recovery with minimal data loss.

<!-- id: m06-12-assessment-q15 -->
## Question 15

AnyCompany Manufacturing maintains a large amount of engineering drawings and design files that their teams need to access daily from their on-premises applications. They want to gradually migrate these files to AWS to reduce their local storage costs while maintaining low-latency access for frequently used files.The solution needs to meet the following criteria:Integrate with existing file-based workflows.Provide a seamless path to cloud storage without disrupting current operations.Maintain local, low-latency access to frequently used files.Which AWS storage service should they use based on these requirements?

_Choose 1_

- [x] A. AWS Storage Gateway – File Gateway
- [ ] B. Amazon S3 Glacier Flexible Retrieval
- [ ] C. Amazon FSx for Windows File Server
- [ ] D. Amazon Elastic File System (Amazon EFS)

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: File Gateway provides a file interface into Amazon S3 object storage. It maintains low-latency local access to frequently accessed data through local caching and seamlessly integrates with existing file-based workflows.
