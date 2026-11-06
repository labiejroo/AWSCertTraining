# Module 7: Databases › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m07-07-assessment-q1 -->
## Question 1

Which explanation BEST describes Amazon RDS?

_Choose 1_

- [x] A. A fully managed service that helps set up, operate, and scale relational databases in the cloud
- [ ] B. A fully managed in-memory caching service that seamlessly integrates with Redis, Valkey, or Memcached
- [ ] C. A data warehousing solution for analytical processing
- [ ] D. A NoSQL database system optimized for unstructured data

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon RDS is a fully managed database service in the AWS Cloud that frees users from most management tasks and helps set up, operate, and scale databases in the cloud.

<!-- id: m07-07-assessment-q2 -->
## Question 2

What is a possible use case for Amazon Aurora?

_Choose 1_

- [x] A. Replacing high-cost commercial database engines with a more cost-effective solution that still provides enterprise-level performance and reliability
- [ ] B. Processing unstructured data streams in real time without relational database constraints
- [ ] C. Storing static, rarely accessed data that requires minimal processing capabilities
- [ ] D. Running temporary databases with minimal availability requirements for development environments

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Aurora provides comparable performance to high-end commercial databases but at one-tenth the cost, which makes it ideal for organizations looking to reduce database costs without sacrificing performance.

<!-- id: m07-07-assessment-q3 -->
## Question 3

Which problem does AWS Database Migration Service (AWS DMS) solve?

_Choose 1_

- [ ] A. Creating automated database backup schedules
- [x] B. Minimizing application downtime during database migrations
- [ ] C. Optimizing SQL queries to improve database performance
- [ ] D. Providing a graphical interface for database administrators to design tables

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: A key benefit of AWS DMS is that the source database remains fully operational during migration, which minimizes downtime to applications.

<!-- id: m07-07-assessment-q4 -->
## Question 4

Which statement BEST describes Amazon DynamoDB?

_Choose 1_

- [ ] A. DynamoDB is a relational database service that provides complex SQL query capabilities.
- [x] B. DynamoDB is a fully managed NoSQL key-value and document database that provides fast, predictable performance with seamless scalability.
- [ ] C. DynamoDB is a column-oriented database that requires schema definition before storing data.
- [ ] D. DynamoDB is a fully managed graph database that requires server maintenance during scheduled downtime.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: DynamoDB is a fully managed NoSQL database service that offers both key-value and document data models with predictable, fast performance even at scale.

<!-- id: m07-07-assessment-q5 -->
## Question 5

What is a primary benefit of using Amazon ElastiCache?

_Choose 1_

- [ ] A. Complete replacement for relational databases
- [ ] B. Automatic scaling of underlying database storage
- [ ] C. Built-in machine learning capabilities for data analysis
- [x] D. Improved application performance through in-memory caching

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: The core function of ElastiCache is to provide in-memory caching that makes it possible for applications to retrieve data from fast memory stores instead of slower disk-based databases. This significantly reduces latency and improves overall application performance.

<!-- id: m07-07-assessment-q6 -->
## Question 6

What is a feature of AWS Backup?

_Choose 1_

- [ ] A. AWS Backup can only back up resources within a single AWS Region.
- [ ] B. AWS Backup is limited to database services only.
- [x] C. AWS Backup provides centralized backup policies and monitoring across multiple AWS accounts and Regions.
- [ ] D. AWS Backup requires manual configuration for each individual resource.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: With AWS Backup, you can define and manage backup policies at the organization level and implement them across all related AWS accounts and Regions automatically.

<!-- id: m07-07-assessment-q7 -->
## Question 7

What is a practical use case for Amazon DocumentDB (with MongoDB compatibility)?

_Choose 1_

- [ ] A. Long-term archival storage of historical data with infrequent access patterns
- [ ] B. Running high-performance transactional banking applications with strict compliance requirements
- [x] C. Storing and managing a large product catalog for an ecommerce application
- [ ] D. Real-time in-memory caching of web session data

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon DocumentDB excels at handling semistructured data like product catalogs.

<!-- id: m07-07-assessment-q8 -->
## Question 8

What is a practical use of Amazon Neptune?

_Choose 1_

- [ ] A. Providing real-time streaming analytics
- [ ] B. Replacing traditional SQL databases for all workloads
- [ ] C. Optimizing text search in large document databases
- [x] D. Managing and querying highly connected datasets efficiently

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Neptune is optimized for storing and querying highly connected data with millisecond latency.

<!-- id: m07-07-assessment-q9 -->
## Question 9

Which definition BEST describes in-memory caching?

_Choose 1_

- [ ] A. A networking solution that optimizes internet routing paths to reduce latency between user requests and cloud-based applications
- [ ] B. A database management system that permanently stores all application data on solid-state drives for consistent retrieval speeds
- [x] C. A cloud-based service that stores data in memory for fast access, improving application performance and scalability while reducing database load
- [ ] D. A backup and recovery service that automatically creates snapshots of critical data every five minutes to prevent data loss

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: In-memory caching is a service that stores frequently used data in memory to improve application performance and reduce the need to fetch data from slower disk-based storage.

<!-- id: m07-07-assessment-q10 -->
## Question 10

What is the primary way that NoSQL databases like Amazon DynamoDB differ from relational databases?

_Choose 1_

- [ ] A. Relational databases offer better performance for transactional workloads than any NoSQL solution.
- [x] B. NoSQL databases use flexible schema designs rather than the rigid table structures of relational databases.
- [ ] C. Relational databases require indexes on all queries, and NoSQL databases do not use indexes.
- [ ] D. Relational databases provide automatic scaling and NoSQL databases require manual scaling.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: The key differentiator is that NoSQL databases offer flexible schemas that allow data to be structured in ways beyond the traditional table-based approach. This makes it possible for developers to store and process data in formats that match how their applications use it.

<!-- id: m07-07-assessment-q11 -->
## Question 11

Which option describes a scenario where an unmanaged solution like a database installed directly onto an Amazon EC2 instance would be preferable to using a fully managed AWS database service?

_Choose 1_

- [ ] A. A developer has a database size smaller than the maximum limits imposed by Amazon RDS.
- [ ] B. A developer wants to scale a database instance based on workload patterns without worrying about licensing complications.
- [x] C. A developer needs full control over the database and access to its underlying operating system, database installation, and configuration.
- [ ] D. A developer wants AWS to handle routine database maintenance tasks like backups and patching.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Installing a database directly on Amazon EC2 is preferable when complete administrative control over the entire database environment is needed. This includes operating-system-level access and full configuration flexibility, which is not available in managed AWS services.

<!-- id: m07-07-assessment-q12 -->
## Question 12

Which statement describes the responsibilities of customers using fully managed AWS database services?

_Choose 1_

- [ ] A. Customers are responsible for deploying and managing antivirus solutions on the operating systems of fully managed database services.
- [ ] B. Customers are responsible for provisioning, scaling, patching, and backups.
- [x] C. Customers are responsible for designing data structures and managing access controls.
- [ ] D. Customers are responsible for monitoring and generating metrics for their data.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Fully managed AWS database services only require customers to be responsible for designing data structures and managing access controls.
