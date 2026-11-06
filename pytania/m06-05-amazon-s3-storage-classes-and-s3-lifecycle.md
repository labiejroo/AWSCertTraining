# Module 6: Storage › Amazon S3 Storage Classes and S3 Lifecycle

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m06-05-amazon-s3-storage-classes-and-s3-lifecycle-q1 -->
## Question 1

AnyCompany Business stores a growing amount of customer data in Amazon S3. Their manager is concerned about storage costs and asks IT to implement a solution to move older data to cheaper storage. The data is frequently accessed for the first 30 days, occasionally accessed for the next 60 days, and rarely accessed after 90 days.What should they do in this situation to optimize costs while maintaining appropriate access to the data?

_Choose 1_

- [ ] A. Create multiple S3 buckets with different storage classes and manually move objects between buckets as they age.
- [x] B. Create a lifecycle rule to transition objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days, transition to S3 Glacier after 90 days.
- [ ] C. Create a lifecycle rule to immediately transition all objects to S3 Glacier and set up a restore policy.
- [ ] D. Create a lifecycle rule to delete all objects after 90 days and rely on database backups.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: This policy matches access patterns by using S3 Standard for frequent access, S3 Standard-IA after 30 days of inactivity, and S3 Glacier for archive after 90 days.

<!-- id: m06-05-amazon-s3-storage-classes-and-s3-lifecycle-q2 -->
## Question 2

Which statement BEST describes S3 Lifecycle?

_Choose 1_

- [ ] A. A backup service that creates copies of your S3 objects in different AWS Regions to protect against Regional failures.
- [ ] B. A monitoring system that alerts administrators when Amazon S3 objects have not been accessed for a specified period.
- [ ] C. A feature that automatically compresses Amazon S3 objects after a certain period to reduce storage costs.
- [x] D. A feature used to define rules to automatically transition objects between different storage classes, or delete them based on age or usage patterns.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon S3 Lifecycle is used create rules that automate the transition of objects between storage classes. It can set expiration dates for objects based on defined criteria, optimizing storage costs while maintaining access to data based on its changing value over time.
