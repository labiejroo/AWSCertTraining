# Module 9: Security › Preventing Unauthorized Access

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m09-02-preventing-unauthorized-access-q1 -->
## Question 1

An administrator who creates an AWS account is provided with the root user credentials. To secure this highly privileged account, they should immediately set a strong password and enable multi-factor authentication (MFA). What does MFA require users to do?

_Choose 1_

- [ ] A. Use a virtual private network (VPN) whenever logging in.
- [ ] B. Have a credit card on file for identity verification.
- [ ] C. Change the password every 30 days.
- [x] D. Provide two or more verification methods to gain access.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: MFA adds an additional layer of security by requiring a password, username, something only the user has on them, such as a physical token. For example, a smartphone app generating a one-time code.

<!-- id: m09-02-preventing-unauthorized-access-q2 -->
## Question 2

AWS Identity and Access Management (IAM) provides users, groups, roles, and policies so you can configure access based on your company’s specific operational and security needs. Which of these is specifically designed to provide temporary access to permissions?

_Choose 1_

- [ ] A. IAM groups
- [x] B. IAM roles
- [ ] C. IAM policies
- [ ] D. IAM users

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: An IAM role is an identity someone can assume to gain temporary access to permissions. When someone assumes an IAM role, they abandon all previous permissions they had under a previous role and assume the permissions of the new role.

<!-- id: m09-02-preventing-unauthorized-access-q3 -->
## Question 3

A financial services company wants to give its accountants access to a particular Amazon S3 bucket. Which of these IAM controls is used to define this access?

_Choose 1_

- [ ] A. IAM role
- [x] B. IAM policy
- [ ] C. IAM user
- [ ] D. IAM group

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: An IAM policy is a JSON document that allows or denies permission to access AWS services and resources. It can be added to IAM users, groups, and roles to define access to the particular S3 bucket.

<!-- id: m09-02-preventing-unauthorized-access-q4 -->
## Question 4

A software development team needs to centrally manage its database credentials and API keys on AWS. Which of these services should the team choose?

_Choose 1_

- [ ] A. AWS IAM Identity Center
- [ ] B. AWS Systems Manager
- [x] C. AWS Secrets Manager
- [ ] D. AWS Identity and Access Management (IAM)

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Secrets Manager can provide the team with a secure way to manage, rotate, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.
