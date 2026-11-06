# Module 13: Well-Architected Solutions › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m13-05-assessment-q1 -->
## Question 1

A developer is working on a full-stack application hosted on AWS. They are interested in streamlining the development process by quickly adding features like authentication and storage with minimal infrastructure management. Which AWS service would provide the best solution for the developer's needs?

_Choose 1_

- [ ] A. AWS AppSync
- [x] B. AWS Amplify
- [ ] C. AWS CodePipeline
- [ ] D. AWS Well-Architected Tool

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amplify streamlines full-stack development by providing ready-to-use authentication, storage, and API components. It requires only minimal infrastructure management.

<!-- id: m13-05-assessment-q2 -->
## Question 2

The owner of a large hardware company wants to automate and optimize the company’s marketing emails to enhance customer engagement. Which AWS service would work well for this use case?

_Choose 1_

- [x] A. Amazon Simple Email Service (Amazon SES)
- [ ] B. AWS Amplify
- [ ] C. Amazon Connect
- [ ] D. Amazon AppStream 2.0

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon SES provides scalable email sending capability specifically designed for marketing campaigns and customer communications.

<!-- id: m13-05-assessment-q3 -->
## Question 3

A small technology startup needs to provide its remote workforce with secure access to their work environment. The employees must be able to accomplish the same tasks as if they were on a physical office computer. Which AWS service can they use to provide this remote access?

_Choose 1_

- [ ] A. Amazon Connect
- [x] B. Amazon WorkSpaces
- [ ] C. AWS AppSync
- [ ] D. Amazon AppStream 2.0

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: WorkSpaces provides a complete persistent desktop experience for remote workers.

<!-- id: m13-05-assessment-q4 -->
## Question 4

A manufacturing company needs a way to monitor its assembly-line equipment for any performance issues. Which AWS service can help them build a monitoring solution for the equipment?

_Choose 1_

- [ ] A. AWS Well-Architected Tool
- [ ] B. Amazon AppStream 2.0
- [x] C. AWS IoT Core
- [ ] D. Amazon Connect

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AWS IoT Core is specifically designed to connect, monitor, and manage IoT devices like manufacturing equipment.

<!-- id: m13-05-assessment-q5 -->
## Question 5

A startup is hosting a critical web application on a single Amazon EC2 instance in one Availability Zone. After a brief outage, they decide to reevaluate their architecture. What practice from the AWS Well-Architected Framework could improve this situation?

_Choose 1_

- [ ] A. Reduce resource usage to avoid overprovisioning (Cost Optimization).
- [ ] B. Scale up the instance to handle more traffic (Performance Efficiency).
- [ ] C. Increase the instance’s firewall protection (Security).
- [x] D. Deploy instances across multiple Availability Zones for fault tolerance (Reliability).

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: By deploying instances across multiple Availability Zones, the web application will be more resilient to failures and will have higher availability.

<!-- id: m13-05-assessment-q6 -->
## Question 6

A company is using a large Amazon EC2 instance type for a low-traffic website, but monitoring shows CPU usage rarely exceeds 10 percent. What is a good next step?

_Choose 1_

- [ ] A. Upgrade the EC2 instance for better data protection.
- [x] B. Rightsize the EC2 instance to a smaller type to match the actual workload.
- [ ] C. Decrease the number of instances to save money.
- [ ] D. Automate the scaling of EC2 instances based on traffic.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Rightsizing the EC2 instance to a smaller type that fits the actual workload would improve performance efficiency by avoiding resource wastage.
