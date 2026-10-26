# Module 3: Exploring Compute Services › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m03-05-assessment-q1 -->
## Question 1

What is the customer responsible for managing in a serverless service like AWS Lambda?

_Choose 1_

- [ ] A. The physical servers and networking hardware
- [ ] B. The operating system, network configuration, and application stack
- [ ] C. Nothing—AWS manages everything
- [x] D. The application code

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: With serverless services like Lambda, customers are responsible for the application code. AWS manages the infrastructure, scaling, and availability.

<!-- id: m03-05-assessment-q2 -->
## Question 2

A developer is launching a new microservice and wants to focus only on writing and deploying code. They do not want to manage servers, handle scaling, or worry about infrastructure availability. Which AWS service model is BEST for this use case?

_Choose 1_

- [ ] A. Unmanaged
- [ ] B. On premises
- [x] C. Serverless
- [ ] D. Hybrid cloud

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: With serverless services, customers can focus solely on writing and deploying code. AWS fully manages infrastructure, scaling, and availability, so customers do not have to worry about managing servers or capacity.

<!-- id: m03-05-assessment-q3 -->
## Question 3

Which scenario is the BEST fit for using AWS Lambda?

_Choose 1_

- [x] A. Automatically processing images as users upload them to an Amazon S3 bucket
- [ ] B. Running a relational database that needs complex queries and frequent connections
- [ ] C. Hosting a high-traffic web server that requires full control over the operating system (OS)
- [ ] D. Running a large, high-performance computing workload that takes several hours to complete

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Lambda is perfect for this event-driven use case. It can run code in response to uploads and scale automatically based on the number of events.

<!-- id: m03-05-assessment-q4 -->
## Question 4

A company is launching a containerized photo application and has built the container image, which needs to be stored securely. They plan to use Kubernetes for orchestration and prefer not to manage any servers. Which combination of AWS services BEST fits their needs?

_Choose 1_

- [ ] A. Amazon S3, Amazon Elastic Container Service (Amazon ECS), and Amazon EC2
- [x] B. Amazon Elastic Container Registry (Amazon ECR), Amazon Elastic Kubernetes Service (Amazon EKS), and AWS Fargate
- [ ] C. Amazon Elastic Container Registry (Amazon ECR), AWS Lambda, and Amazon EC2
- [ ] D. Amazon Elastic Container Registry (Amazon ECR), Amazon Elastic Container Service (Amazon ECS), and Amazon EC2

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon ECR stores container images, Amazon EKS handles Kubernetes orchestration, and AWS Fargate runs containers without server management. This combination offers seamless orchestration with no infrastructure maintenance.

<!-- id: m03-05-assessment-q5 -->
## Question 5

A development team at a travel company has stored their hotel booking system’s container image in Amazon Elastic Container Registry (Amazon ECR) and is ready to deploy it. They need a service that can automatically start and stop containers based on traffic, scale up or down with demand, and monitor the health of the system. Which service does the team need next?

_Choose 1_

- [ ] A. Amazon EC2 with auto scaling
- [x] B. An orchestration service like Amazon Elastic Container Service (Amazon ECS) or Amazon Elastic Kubernetes Service (Amazon EKS)
- [ ] C. A virtual machine to run the container manually
- [ ] D. AWS Lambda

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon ECS or Amazon EKS can automatically scale containers, handle health checks, and manage their lifecycle based on traffic demand, which fits the team’s requirements.

<!-- id: m03-05-assessment-q6 -->
## Question 6

A development team at an e-commerce company is working on a new website. The application runs fine on their local machines, but when they attempt to deploy it to a staging environment, it does not work as expected. The team wants to make sure that the application runs consistently across all development, testing, and production environments going forward. Which solution should the team use to make sure that the application runs the same across all environments?

_Choose 1_

- [ ] A. Set up separate environments for each operating system.
- [ ] B. Use different versions of the applications for different environments.
- [ ] C. Use Amazon EC2 to manually recreate the development environment.
- [x] D. Package the application in a container that includes all dependencies.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Containers bundle the application, runtime, and dependencies together, providing consistency across all environments from development to production.

<!-- id: m03-05-assessment-q7 -->
## Question 7

A pharmaceutical research company needs to run thousands of simulations to analyze protein folding. These compute-heavy tasks are run in parallel and do not require real-time interaction. The company wants the jobs to be automatically scheduled and scaled based on computing demand. Which AWS service BEST fits this workload?

_Choose 1_

- [x] A. AWS Batch
- [ ] B. Amazon Lightsail
- [ ] C. AWS Elastic Beanstalk
- [ ] D. AWS Lambda

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AWS Batch is designed for large-scale batch workloads and can automatically manage and scale compute resources for job queues.

<!-- id: m03-05-assessment-q8 -->
## Question 8

A freelance developer is building a blog for a client with minimal traffic. They want a basic, cost-effective solution that includes storage and compute in one package, without having to deal with complex configurations or scaling concerns. Which AWS service is the BEST fit?

_Choose 1_

- [ ] A. AWS Fargate
- [x] B. Amazon Lightsail
- [ ] C. AWS Batch
- [ ] D. AWS Lambda

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Lightsail is great for small projects like blogs and basic websites, and it offers predictable pricing and ease of use.
