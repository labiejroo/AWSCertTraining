# Module 2: Compute in the Cloud › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m02-09-assessment-q1 -->
## Question 1

Which option BEST describes how compute resources are provisioned and managed in the cloud?

_Choose 1_

- [x] A. Resources are provisioned based on demand, allowing for scaling and management.
- [ ] B. Compute resources are fixed and cannot be scaled.
- [ ] C. Compute resources require constant manual management.
- [ ] D. Resources must be pre-purchased and installed onsite.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Cloud computing resources are dynamic and can be adjusted in real-time to meet changing demand, allowing for easier scaling and management.

<!-- id: m02-09-assessment-q2 -->
## Question 2

A media company is working on a project that involves rendering complex visual effects and simulations. The rendering process requires significant computational power and hardware accelerators to handle the intense workload efficiently.Which Amazon EC2 instance type would be the BEST choice for this task?

_Choose 1_

- [ ] A. Compute optimized
- [ ] B. General purpose
- [x] C. Accelerated computing
- [ ] D. Memory optimized

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Accelerated computing instances are equipped with GPUs and hardware accelerators, making them ideal for rendering tasks that require high computational power and efficiency.

<!-- id: m02-09-assessment-q3 -->
## Question 3

A startup company is building a new web application and chooses general purpose Amazon EC2 instances to host the application.Why did they choose this instance type?

_Choose 1_

- [ ] A. It provides the highest performance for compute-heavy tasks, such as video rendering or machine learning.
- [ ] B. It is designed for high storage capacity, which is needed to host large databases.
- [x] C. It provides a balanced mix of compute, memory, and networking resources while keeping costs efficient as they scale their user base.
- [ ] D. It is specifically designed for memory-intensive applications, which is ideal for hosting a web application.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: General purpose instances offer a good balance of resources for various types of workloads, including web applications, making them a flexible and cost-effective choice.

<!-- id: m02-09-assessment-q4 -->
## Question 4

A university research team is running climate modeling simulations that require substantial CPU power to process complex algorithms and analyze large datasets.Why are compute optimized Amazon EC2 instances ideal for this task?

_Choose 1_

- [x] A. They are ideal for tasks that require significant CPU power to perform computations.
- [ ] B. They are designed for workloads that require a high amount of memory to process large datasets efficiently.
- [ ] C. They are optimized for handling tasks that require hardware accelerators.
- [ ] D. They provide high storage throughput, making them ideal for tasks that require fast data retrieval and storage for large datasets.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Compute optimized instances are specifically designed for compute-heavy workloads like simulations, offering higher CPU performance to process complex algorithms and analyze large datasets.

<!-- id: m02-09-assessment-q5 -->
## Question 5

What does multi-tenancy refer to in the context of Amazon EC2?

_Choose 1_

- [ ] A. EC2 instances dedicated to individual clients
- [ ] B. Instances that are restricted to one geographical region
- [x] C. Multiple users sharing the same EC2 instance while maintaining isolation
- [ ] D. Each EC2 instance running in its own private network

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Multi-tenancy in Amazon EC2 refers to multiple tenants, or users, sharing the same instance but maintaining isolation for security and performance.

<!-- id: m02-09-assessment-q6 -->
## Question 6

Which tool can be used to interact with AWS services through a graphical user interface (GUI)?

_Choose 1_

- [ ] A. AWS Software Development Kit (AWS SDK)
- [ ] B. Amazon EC2
- [x] C. AWS Management Console
- [ ] D. AWS Command Line Interface (AWS CLI)

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: The AWS Management Console is the web-based GUI that is used to interact with AWS services.

<!-- id: m02-09-assessment-q7 -->
## Question 7

A company has critical steady-state workloads and batch jobs that are not time-sensitive.How should they optimize costs using Amazon EC2 Savings Plans and Spot Instances?

_Choose 1_

- [x] A. Use Savings Plans for critical workloads and Spot Instances for jobs that are not time-sensitive to maximize savings.
- [ ] B. Use Savings Plans for non-time-sensitive workloads and Spot Instances for critical jobs.
- [ ] C. Use Spot Instances for all workloads to maximize savings and avoid Savings Plans.
- [ ] D. Use Savings Plans for all workloads and avoid Spot Instances because of interruption risks.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: This is the best approach. Savings Plans are ideal for critical workloads that need consistent capacity and predictable pricing. Spot Instances offer significant savings for jobs that are not time-sensitive and can tolerate interruptions.

<!-- id: m02-09-assessment-q8 -->
## Question 8

A marketing agency is developing a new web application and expects steady growth, but is unsure of traffic in the early months. They want flexibility without a long-term commitment.Which pricing option should they use?

_Choose 1_

- [ ] A. Savings Plans
- [ ] B. Reserved Instances
- [ ] C. Spot Instances
- [x] D. On-Demand

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: On-Demand pricing is ideal for starting without commitment. The customer can test and adjust based on actual usage before committing to longer-term options.

<!-- id: m02-09-assessment-q9 -->
## Question 9

A manufacturing company is running a set of predictable workloads for the next 3 years and wants to optimize costs.Which option should they choose?

_Choose 1_

- [ ] A. On-Demand
- [ ] B. Spot Instances
- [ ] C. Dedicated Hosts
- [x] D. Reserved Instances

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Reserved Instances offer up to a 75 percent discount for steady-state, predictable workloads when committing to a 1-year or 3-year term, making them the most cost-effective option.

<!-- id: m02-09-assessment-q10 -->
## Question 10

What is the primary role of an Amazon Machine Image (AMI) when scaling applications?

_Choose 1_

- [ ] A. It stores backup copies of application data.
- [ ] B. It configures scaling policies for applications.
- [ ] C. It automatically manages network traffic.
- [x] D. It provides a consistent image to launch new instances.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AMIs launch new Amazon EC2 instances with the same software configuration and settings, providing consistency.

<!-- id: m02-09-assessment-q11 -->
## Question 11

How does Amazon EC2 Auto Scaling work in AWS?

_Choose 1_

- [ ] A. Amazon EC2 Auto Scaling adjusts the instance type but does not change the number of instances.
- [ ] B. Amazon EC2 Auto Scaling requires manual intervention to add or remove instances based on traffic.
- [ ] C. Amazon EC2 Auto Scaling adds instances when the workload is too high, but it does not scale down when demand decreases.
- [x] D. Amazon EC2 Auto Scaling automatically adds or removes instances based on performance data and application metrics.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: For optimal resource usage, Amazon EC2 Auto Scaling automatically adjusts the number of instances based on performance metrics.

<!-- id: m02-09-assessment-q12 -->
## Question 12

How do Amazon EC2 Auto Scaling and Elastic Load Balancing (ELB) work together in AWS?

_Choose 1_

- [ ] A. They operate independently and are not connected.
- [ ] B. Amazon EC2 Auto Scaling handles traffic routing, whereas ELB manages instance scaling.
- [ ] C. ELB automatically scales the EC2 instances, and Amazon EC2 Auto Scaling adjusts traffic.
- [x] D. Amazon EC2 Auto Scaling adjusts the number of instances, whereas ELB distributes traffic evenly across them.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances in response to changes in demand. ELB distributes incoming traffic evenly across those instances, supporting high availability and reliability.

<!-- id: m02-09-assessment-q13 -->
## Question 13

What happens if one component fails in a loosely coupled architecture?

_Choose 1_

- [ ] A. The system automatically switches to backup components without any intervention.
- [x] B. The system can continue to function as other components are independent.
- [ ] C. The failure causes the entire system to fail.
- [ ] D. Other components must be manually restarted.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Loosely coupled systems are designed so that components are independent. If one component fails, the rest of the system can continue to function normally, minimizing the impact of the failure.

<!-- id: m02-09-assessment-q14 -->
## Question 14

A software development company needs to notify the engineering team whenever a new bug is reported in their bug tracking system. Some team members need to be notified immediately, whereas others can process the bug reports later.Which service should the software development company choose based on the requirements?

_Choose 1_

- [ ] A. Amazon Simple Queue Service (Amazon SQS)
- [x] B. Amazon Simple Notification Service (Amazon SNS)
- [ ] C. Elastic Load Balancing (ELB)
- [ ] D. Amazon EC2

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon SNS is the better choice because it delivers notifications in real time to multiple recipients simultaneously. This suits the need for immediate notifications to engineers about new bugs.
