# Module 6: Storage › AWS Storage Gateway

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m06-09-aws-storage-gateway-q1 -->
## Question 1

AnyCompany has a large collection of files stored on-premises that needs to be backed up to the AWS Cloud. They want to maintain local access to frequently used files while using cloud storage for cost savings. They also want to minimize changes to their existing file-sharing workflows and applications.Which AWS Storage Gateway type BEST addresses these requirements?

_Choose 1_

- [ ] A. Tape Gateway
- [x] B. Amazon S3 File Gateway
- [ ] C. Volume Gateway in Cached mode
- [ ] D. Volume Gateway in Stored mode

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: S3 File Gateway provides a file interface into Amazon S3 so the team can store and retrieve objects using standard file protocols like NFS and SMB. With S3 File Gateway, frequently accessed data is cached locally for low-latency access while data is stored in Amazon S3 for durability and cost-effectiveness.

<!-- id: m06-09-aws-storage-gateway-q2 -->
## Question 2

AnyCompany Manufacturing stores CAD files that need to be accessed frequently by engineers at their on-premises data center. They want to maintain local access to this data while also benefiting from AWS Cloud storage capabilities. They plan to implement a solution that provides low-latency access to frequently used files while backing up data to AWS.Which AWS Storage Gateway configuration should they choose?

_Choose 1_

- [ ] A. Deploy Amazon FSx for Windows File Server in the on-premises data center.
- [ ] B. Implement Storage Gateway in Stored Volume mode and configure all volumes to be stored entirely in Amazon S3.
- [ ] C. Implement Storage Gateway in Tape Gateway mode to back up the CAD files to virtual tapes in Amazon S3.
- [x] D. Implement Storage Gateway in Cached Volume mode to keep frequently accessed data local while storing the complete dataset in Amazon S3.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Cached Volume mode is ideal for this scenario because it stores the most frequently accessed data locally for low-latency access while maintaining the complete dataset in Amazon S3. This provides both the local performance that engineers need and the benefits of secure cloud backup.
