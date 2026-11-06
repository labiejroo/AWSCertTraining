# Module 10: Monitoring, Compliance, and Governance in the AWS Cloud › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m10-11-assessment-q1 -->
## Question 1

A sportswear company is hosting their application on Amazon EC2 instances. They want to collect metrics on their EC2 instances and they would like notifications when utilization passes thresholds. They also want to have an action configured to automate scaling up the number of EC2 instances when utilization surpasses their threshold.Which AWS service would best meet their needs?

_Choose 1_

- [ ] A. AWS CloudTrail
- [x] B. Amazon CloudWatch
- [ ] C. AWS Artifact
- [ ] D. AWS Trusted Advisor

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: CloudWatch can collect the metrics on the EC2 instances, provide insights using dashboards, set alarms on thresholds, and automate the additional EC2 instances.

<!-- id: m10-11-assessment-q2 -->
## Question 2

Which AWS service provides a no-cost, on-demand access to AWS security and compliance reports and select online agreements?

_Choose 1_

- [ ] A. AWS CloudTrail
- [x] B. AWS Artifact
- [ ] C. AWS Trusted Advisor
- [ ] D. Amazon CloudWatch

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AWS Artifact is a self-service portal that provides on-demand access to AWS security and compliance documentation, including reports.

<!-- id: m10-11-assessment-q3 -->
## Question 3

A financial company with a hybrid cloud solution wants to track changes made to their AWS resources both in the cloud and on premises. Specifically, they want to know who did what, and when.Which AWS service would best meet their needs?

_Choose 1_

- [x] A. AWS CloudTrail
- [ ] B. AWS Artifact
- [ ] C. AWS Trusted Advisor
- [ ] D. Amazon CloudWatch

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: CloudTrail is an AWS service that uses APIs to track who did what, when the action occurred, and on which AWS services and resources.

<!-- id: m10-11-assessment-q4 -->
## Question 4

An enterprise customer has grown rapidly and is struggling to manage billing of their AWS resources and accounts. Every employee has created independent accounts with no centralized management or hierarchical groupings of accounts. The customer wants to roll up billing and centralize management into organizational units. Which AWS service would best meet this customer's need?

_Choose 1_

- [ ] A. AWS Trusted Advisor
- [x] B. AWS Organizations
- [ ] C. An Availability Zone (AZ)
- [ ] D. AWS Service Catalog

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: With Organizations, you can centrally manage your environment as you scale your AWS resources. It can be used to centralize management, consolidate billing, and implement hierarchical groupings of accounts.

<!-- id: m10-11-assessment-q5 -->
## Question 5

Which AWS service provides continuous evaluation and checks of your AWS resources, and provides suggestions to optimize costs, performance, security, and resilience?

_Choose 1_

- [ ] A. AWS CloudTrail
- [ ] B. AWS Artifact
- [ ] C. Amazon CloudWatch
- [x] D. AWS Trusted Advisor

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Trusted Advisor helps you optimize costs, increase performance, improve security and resilience, and operate at scale in the cloud.

<!-- id: m10-11-assessment-q6 -->
## Question 6

A financial company is looking for a solution to govern a curated set of AWS resources for their employees. When the employees need to select and start up a new AWS resource, they want to provide a self-service way to create, share, and deploy the AWS resources.Which AWS service would best meet their needs?

_Choose 1_

- [x] A. AWS Service Catalog
- [ ] B. AWS License Manager
- [ ] C. AWS Artifact
- [ ] D. AWS Health

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: With Service Catalog, you can create, share, and organize from a curated catalog of AWS resources. You can deploy baseline networking resources and security tools for new AWS accounts so that you can govern consistently.

<!-- id: m10-11-assessment-q7 -->
## Question 7

Where can customers go to find resources on AWS compliance—for example, information on customer compliance stories, answers to key compliance questions, and an auditing security checklist?

_Choose 1_

- [ ] A. AWS Artifact
- [ ] B. AWS Management Console
- [x] C. Customer Compliance Center
- [ ] D. AWS Organizaitons

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: The Customer Compliance Center provides resources to help you learn more about AWS compliance. You can read customer compliance stories to discover how companies in regulated industries have solved various compliance, governance, and audit challenges.

<!-- id: m10-11-assessment-q8 -->
## Question 8

What is the purpose of an AWS Control Tower landing zone?

_Choose 1_

- [x] A. It is the enterprise-wide container that holds all your organizational units (OUs), accounts, users, and resources that you want to regulate for compliance.
- [ ] B. It filters inbound and outbound traffic to Amazon EC2 instances in a virtual private cloud (VPC).
- [ ] C. It is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
- [ ] D. It is a subsection of a virtual private cloud (VPC) where you can isolate resources and control access.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: A landing zone is a well-architected multi-account environment that is based on security and compliance best practices. It is the container where you hold all the resources that you want to regulate for compliance.

<!-- id: m10-11-assessment-q9 -->
## Question 9

A research customer with a large team of developers needs a way to ensure specific configuration guidelines for the developers when creating AWS resources. They want a way to assess and audit the AWS resources to ensure that the team is using the most cost-effective approved list of compute resources.Which solution or feature would meet their needs?

_Choose 1_

- [ ] A. AWS Audit Manager
- [ ] B. AWS CloudTrail
- [ ] C. AWS Artifact
- [x] D. AWS Config

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AWS Config is the best choice because it will assess, audit, and evaluate the configurations of the developer's AWS resources.

<!-- id: m10-11-assessment-q10 -->
## Question 10

A customer is using AWS Organizations to centrally manage their company's accounts for billing to optimize and organize costs. They want to set up rules or restrictions on the AWS services, resources, and individual API actions that the users can access.Which feature would meet their needs?

_Choose 1_

- [x] A. A service control policy (SCP)
- [ ] B. An AWS Identity and Access Management (IAM) user
- [ ] C. A root account
- [ ] D. An organizational unit (OU)

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: An SCP is a policy that lets you place restrictions on the AWS services, resources, and individual API actions that users and roles in each account can access. SCPs can be applied to either OUs or individual member accounts.

<!-- id: m10-11-assessment-q11 -->
## Question 11

A customer is moving from on premises to the cloud and has decided to use the Bring Your Own License model (BYOL) approach for cost savings. They are concerned about managing the licenses, want a way to reduce the risk of noncompliance, and want to enforce license usage limits.Which solution would best meet their needs?

_Choose 1_

- [x] A. AWS License Manager
- [ ] B. AWS Service Catalog
- [ ] C. AWS Control Tower
- [ ] D. AWS Organizations

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: License Manager helps reduce the risk of noncompliance by enforcing license usage limits, blocking new launches, and using other controls.
