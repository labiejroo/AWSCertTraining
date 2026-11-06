# Module 9: Security › Introduction to Security on AWS

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m09-01-introduction-to-security-on-aws-q1 -->
## Question 1

After logging in to their online banking profile with their username and password, a customer attempts to transfer $10,000 from their savings to their checking account. The system checks if the customer has sufficient privileges to make transfers of this amount before proceeding. Which type of system check is this an example of?

_Choose 1_

- [x] A. Authorization
- [ ] B. Auditing
- [ ] C. Encryption
- [ ] D. Authentication

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: In this scenario, the system is checking if the customer has the right to transfer $10,000, which is an authorization control. The system verifies their privileges (what they are allowed to do).

<!-- id: m09-01-introduction-to-security-on-aws-q2 -->
## Question 2

A healthcare company is preparing to deploy a web application on Amazon EC2 instances that will process sensitive patient data. The application will use Amazon RDS for database storage and Amazon S3 for file storage. The company's security team is discussing security responsibilities for the deployment. What is the customer's security responsibility in this scenario?

_Choose 1_

- [x] A. Protecting sensitive patient data stored in Amazon S3 and Amazon RDS
- [ ] B. Replacing faulty hardware components that might affect EC2 instance availability
- [ ] C. Protecting the physical security of the data centers where the EC2 instances are hosted
- [ ] D. Maintaining and patching the underlying hypervisor infrastructure for Amazon EC2

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Under the AWS shared responsibility model, customers are responsible for protecting their sensitive data stored in AWS services like Amazon S3 and Amazon RDS.
