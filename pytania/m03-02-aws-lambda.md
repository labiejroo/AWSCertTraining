# Module 3: Exploring Compute Services › AWS Lambda

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m03-02-aws-lambda-q1 -->
## Question 1

A development team at a fintech startup is building a new customer-facing microservice using AWS Lambda. AWS takes care of the infrastructure, but the team is focused on meeting strict security and compliance requirements. Which task is still the team's responsibility when using Lambda?

_Choose 1_

- [ ] A. Scaling the infrastructure
- [ ] B. Patching the underlying operating system
- [ ] C. Managing server availability
- [x] D. Managing data access permissions

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Although AWS manages the infrastructure, the team is responsible for correctly configuring AWS Identity and Access Management (IAM) roles and permissions for any services that the Lambda function accesses.

<!-- id: m03-02-aws-lambda-q2 -->
## Question 2

A photography company offers cloud-based photo editing and storage. To streamline operations, it uses AWS Lambda to automatically process photos—resizing images, applying filters, and organizing files—every time a client uploads a new image. Which key components are involved in running an automated photo processing workflow with Lambda?

_Choose 3_

- [x] A. Lambda function
- [x] B. Triggers
- [ ] C. Server provisioning
- [x] D. Runtimes
- [ ] E. Manual scaling configuration
- [ ] F. Operating system selection

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: The key components of AWS Lambda are the function, triggers, and runtimes. These components handle code, respond to events, and provide the language environment. Customers do not need to manage servers, scaling, or operating systems. AWS takes care of all that.
