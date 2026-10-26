# Module 2: Compute in the Cloud › Messaging and Queuing

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m02-08-messaging-and-queuing-q1 -->
## Question 1

What BEST describes the key difference between tightly coupled and loosely coupled architectures?

_Choose 1_

- [x] A. In a tightly coupled architecture, components are tightly connected and dependent on each other, whereas in a loosely coupled architecture, components can operate independently.
- [ ] B. Tightly coupled architectures are designed for scalability, whereas loosely coupled systems focus on maintaining high availability.
- [ ] C. Loosely coupled systems require components to share data directly with each other, whereas tightly coupled systems store data in a central repository.
- [ ] D. Tightly coupled systems are more flexible in adding new components, whereas loosely coupled systems require careful configuration to add new components.

> Correct! Rationale: In tightly coupled systems, components are heavily interdependent. If one component fails, it can cause cascading failures. In contrast, loosely coupled systems have components that operate independently, so the failure of one component does not disrupt the entire system.

<!-- id: m02-08-messaging-and-queuing-q2 -->
## Question 2

In a banking system, when customers transfer money, the transaction details are sent from the transaction service to a fraud detection service for verification. Sometimes, the fraud detection service is temporarily down.What is the MAIN advantage of using Amazon Simple Queue Service (Amazon SQS) in this banking scenario?

_Choose 1_

- [ ] A. It speeds up transaction processing by avoiding the use of a buffer.
- [x] B. It stores transaction details until the fraud detection service can process them, even if the service is down.
- [ ] C. It guarantees immediate approval of transactions.
- [ ] D. It forces the transaction service and fraud detection service to depend on each other directly.

> Correct! Rationale: Amazon SQS safely stores transaction details until the fraud detection service can process them, preventing data loss when the service is unavailable.
