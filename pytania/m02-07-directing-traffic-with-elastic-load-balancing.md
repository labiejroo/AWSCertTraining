# Module 2: Compute in the Cloud › Directing Traffic with Elastic Load Balancing

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m02-07-directing-traffic-with-elastic-load-balancing-q1 -->
## Question 1

How does Elastic Load Balancing (ELB) improve scalability in AWS?

_Choose 1_

- [ ] A. It manually adjusts the number of Amazon EC2 instances based on traffic.
- [x] B. It automatically routes traffic to instances based on various routing methods.
- [ ] C. It directly increases the size of Amazon EC2 instances.
- [ ] D. It creates new Amazon EC2 instances for each request.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: ELB improves scalability by automatically distributing traffic to the EC2 instances with the least load, resulting in efficient traffic management. ELB scales elastically. This means it adjusts traffic routing based on demand without increasing hourly costs, which is a key benefit.

<!-- id: m02-07-directing-traffic-with-elastic-load-balancing-q2 -->
## Question 2

Which task does Elastic Load Balancing (ELB) perform?

_Choose 1_

- [x] A. Distributes a workload across several Amazon EC2 instances.
- [ ] B. Removes unneeded Amazon EC2 instances when demand is low.
- [ ] C. Adds a second Amazon EC2 instance during an online store's popular sale.
- [ ] D. Automatically adjusts the number of Amazon EC2 instances to match demand.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: ELB and Auto Scaling work together to efficiently manage varying levels of demand. ELB is responsible for distributing incoming traffic evenly across multiple EC2 instances. This makes sure that no single instance becomes overwhelmed. It also serves as a single-entry point for traffic into an Auto Scaling group, directing requests to the appropriate resources.Meanwhile, Auto Scaling automatically adjusts the number of EC2 instances based on the demand. It adds or removes instances as needed for optimal performance and resource usage. Together, ELB and Auto Scaling help maintain application reliability and cost efficiency.
