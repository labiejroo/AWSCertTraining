# Module 9: Security › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m09-07-assessment-q1 -->
## Question 1

An employee wants to check their company’s online employee portal to see how many vacation hours they have accrued. Before accessing their personal records, they enter their username and password to log in to the site.What happens during this login process?

_Choose 1_

- [ ] A. Authorization
- [x] B. Authentication
- [ ] C. Encryption
- [ ] D. Detection

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Authentication is the process of verifying the identity of a user by requiring them to provide credentials, such as a username and password.

<!-- id: m09-07-assessment-q2 -->
## Question 2

What is the responsibility of AWS under the AWS shared responsibility model?

_Choose 1_

- [ ] A. Encrypting customer data at rest
- [x] B. Managing physical security of data centers
- [ ] C. Configuring security groups for Amazon EC2 instances
- [ ] D. Setting up AWS Identity and Access Management (IAM) roles and policies

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AWS handles all aspects of physical security for data centers, including facility access controls, environmental safeguards, power redundancy, and surveillance systems.

<!-- id: m09-07-assessment-q3 -->
## Question 3

With AWS Identity and Access Management (IAM) all actions are denied by default. When granting permissions, access should be provided only on a need-to-have basis. What is this concept called?

_Choose 1_

- [ ] A. Default deny policy
- [ ] B. Permission boundary framework
- [ ] C. Role-based access control
- [x] D. Principle of least privilege

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: The principle of least privilege dictates that people and systems should be given access only to what they need and nothing else.

<!-- id: m09-07-assessment-q4 -->
## Question 4

All AWS accounts are given an AWS account root user. The root user is the account owner and has full permissions to perform any actions.What are some ways to protect this powerful account? (Select TWO.)

_Choose 2_

- [ ] A. Create multiple root users for redundancy.
- [ ] B. Delete the root user after setting up AWS Identity and Access Management (IAM) users.
- [x] C. Associate a strong password with the account.
- [x] D. Turn on multi-factor authentication (MFA).
- [ ] E. Delegate root user access to others.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: To protect the root user, it's recommended to associate a strong password with the account and turn on MFA. An AWS account can only have one root user. It cannot be deleted, and root user access should never be delegated to others.

<!-- id: m09-07-assessment-q5 -->
## Question 5

A large marketing firm has a standard set of permissions used to grant designers access to certain Amazon S3 buckets. The firm added a new S3 bucket that all designers need to access. Which AWS Identity and Access Management (IAM) control can the firm use to assign permissions that will be inherited by all of its designers?

_Choose 1_

- [x] A. IAM group
- [ ] B. IAM policy
- [ ] C. IAM user
- [ ] D. IAM role

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: IAM groups are specifically designed for this scenario. They are used to assign permissions to multiple users at once.

<!-- id: m09-07-assessment-q6 -->
## Question 6

A technology company is moving some of its resources to AWS. The company wants to provide single sign-on access for its employees on AWS using its existing identity source. Which service can help the company accomplish this?

_Choose 1_

- [ ] A. AWS Secrets Manager
- [ ] B. AWS Identity and Access Management (IAM)
- [ ] C. AWS Systems Manager
- [x] D. AWS IAM Identity Center

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: IAM Identity Center is specifically designed to help organizations implement single sign-on for AWS resources using their existing identity providers.

<!-- id: m09-07-assessment-q7 -->
## Question 7

A small financial services company recently moved its online resources to AWS. The security team was concerned about protection from common, frequently occurring types of distributed denial of service (DDoS) attacks. Which AWS service automatically protects customers at no cost from DDoS attacks?

_Choose 1_

- [x] A. AWS Shield
- [ ] B. AWS Systems Manager
- [ ] C. Amazon Macie
- [ ] D. AWS Identity and Access Management (IAM)

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Shield is a managed DDoS protection service that safeguards applications running on AWS from common, frequently occurring types of DDoS attacks at no cost.

<!-- id: m09-07-assessment-q8 -->
## Question 8

Protecting sensitive customer data is a vital component of maintaining customer trust. This involves encrypting data at rest and in transit. What is used to encrypt data in transit?

_Choose 1_

- [x] A. SSL/TLS certificates
- [ ] B. Cryptographic keys
- [ ] C. Multi-factor authentication (MFA)
- [ ] D. Strong passwords

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: SSL and its successor, TLS, are protocols specifically designed to encrypt data as it moves between systems over networks.

<!-- id: m09-07-assessment-q9 -->
## Question 9

A security team for a large ecommerce company needs a centralized way to create and manage the encryption keys that protect its data on AWS. Which of these services is the BEST fit for this team?

_Choose 1_

- [ ] A. Amazon Macie
- [ ] B. AWS Certificate Manager (ACM)
- [x] C. AWS Key Management Service (AWS KMS)
- [ ] D. AWS WAF

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AWS KMS is specifically designed to create and manage encryption keys.

<!-- id: m09-07-assessment-q10 -->
## Question 10

A security team for a large software development company needs to check multiple applications for security vulnerabilities and deviations from security best practices. The applications are running on Amazon EC2, AWS Lambda, and in containers. Which AWS service should they choose for the security assessments?

_Choose 1_

- [ ] A. Amazon GuardDuty
- [x] B. Amazon Inspector
- [ ] C. AWS Security Hub
- [ ] D. Amazon Detective

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon Inspector is specifically designed for automated vulnerability assessments of applications hosted on AWS.
