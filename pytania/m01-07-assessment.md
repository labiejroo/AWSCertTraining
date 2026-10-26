# Module 1: Introduction to the Cloud › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m01-07-assessment-q1 -->
## Question 1

You are a software developer working for a company that is planning to migrate its existing application to the cloud. Your team lead has asked you to explain the client-server model to the rest of the team and how cloud computing fits into this model. Which statement BEST describes the client-server model and its relationship to cloud computing?

_Choose 1_

- [x] A. In the client-server model, the client sends requests to the server, which processes the requests and sends back responses. Cloud computing provides scalable server resources that can be accessed over the internet.
- [ ] B. In the client-server model, the server only handles data storage, and the client performs all processing tasks. Cloud computing provides data storage, but not processing power.
- [ ] C. The client-server model is outdated and no longer used in modern applications. Cloud computing has replaced it completely.
- [ ] D. In the client-server model, the client is responsible for securing their data, and the server is responsible for securing the physical hardware. Cloud computing replaces the client-server model.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: This answer accurately describes the client-server model where the client sends requests to the server. The server processes these requests and returns the appropriate responses. Cloud computing provides scalable and flexible server resources that can be accessed over the internet.

<!-- id: m01-07-assessment-q2 -->
## Question 2

A small business is considering migrating their IT infrastructure to the cloud. The finance team has a meeting with the IT department to discuss the costs associated with this transition. During the meeting, the finance manager says they like the idea of the reliability that comes with the cloud, but they are worried about the fixed costs. Which statement accurately defines the cloud computing model and addresses the finance manager's concern?

_Choose 1_

- [ ] A. Cloud computing involves purchasing dedicated servers and setting up a private data center. This model often comes with fixed costs related to hardware and maintenance.
- [ ] B. Cloud computing is basically just using someone else's server to host your website, and it does not offer any sort of significant cost advantages over traditional hosting solutions.
- [ ] C. Cloud computing reduces the need for additional hardware but still involves significant fixed monthly fees.
- [x] D. Cloud computing is a model for delivering IT resources over the internet. Businesses can rent services on a pay-as-you-go basis, which can help reduce fixed costs and allow for more flexible budgeting.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Cloud computing can be defined as the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. This answer accurately defines cloud computing and directly addresses the finance manager’s concern about fixed costs.

<!-- id: m01-07-assessment-q3 -->
## Question 3

A government agency wants to maintain complete control over its IT infrastructure, but plans to use AWS Cloud services for specific applications. Which deployment type is BEST for this situation?

_Choose 1_

- [ ] A. Cloud
- [ ] B. Compliance
- [x] C. Hybrid
- [ ] D. On-premises

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Hybrid deployment is a solution where the agency can maintain control over on-premises systems while using cloud services for other applications.

<!-- id: m01-07-assessment-q4 -->
## Question 4

A large enterprise is looking to lower operational costs. They are hoping to reduce the operational overhead associated with managing their own physical infrastructure. Which choice BEST describes which advantage of the cloud this enterprise can benefit from?

_Choose 1_

- [ ] A. Increase speed and agility
- [x] B. Stop spending money running and maintaining data centers
- [ ] C. Benefit from massive economies of scale
- [ ] D. Stop guessing capacity

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: By moving to the cloud, the enterprise can offload the responsibility of maintaining physical data centers, reducing operational overhead.

<!-- id: m01-07-assessment-q5 -->
## Question 5

You work for a sports apparel company that is expanding its operations to global customers. The company wants to deploy resources to multiple AWS locations to achieve high availability. You are tasked with explaining the basics of AWS Global Infrastructure to your chief operating officer (COO). The COO needs help understanding the difference between AWS Regions and Availability Zones. Which statement BEST describes the difference between AWS Regions and Availability Zones?

_Choose 1_

- [ ] A. A Region is a single data center, and an Availability Zone consists of multiple data centers.
- [ ] B. An Availability Zone spans multiple physical locations across Regions, and Regions are located across the world.
- [x] C. A Region is a geographical location that contains three or more Availability Zones. An Availability Zone is a distinct location within a Region that contains one or more discrete data centers.
- [ ] D. An Availability Zone is a geographical location that contains three or more Regions. A Region is a distinct location within an Availability Zone that contains one or more discrete data centers.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: A Region is a physical location around the world that contains multiple, isolated data centers. An Availability Zone consists of one or more discrete data centers, each with independent power, networking, and connectivity.

<!-- id: m01-07-assessment-q6 -->
## Question 6

Your company is planning to launch a new web application that will serve users around the world. To help ensure the application performs well and remains reliable, the IT team plans to use AWS for its vast global infrastructure. What BEST describes the benefits of AWS Global Infrastructure related to this situation? (Select TWO.)

_Choose 2_

- [x] A. High availability
- [ ] B. Ease of use
- [ ] C. Cost savings
- [x] D. Fault tolerance
- [ ] E. Compliance with regulatory standards

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Global infrastructure typically involves distributing resources across multiple data centers in different geographic locations. By having redundant systems in various locations, global infrastructure enhances fault tolerance. If one component fails, others can take over to minimize downtime and help ensure high availability.Ease of use, compliance, and cost savings are benefits that can be achieved by using cloud resources. However, in this case, the focus is on making resources highly available to global users.

<!-- id: m01-07-assessment-q7 -->
## Question 7

A finance company is interested in migrating to the cloud. They are curious if they will have enough staff to secure both their office space and the physical infrastructure of their cloud computing resources.Which statement BEST describes the company's responsibility when it comes to securing physical infrastructure of the cloud?

_Choose 1_

- [x] A. AWS is responsible for securing the physical infrastructure, and the company can focus on securing their data and applications within the cloud.
- [ ] B. The company does not have any responsibility when it comes to security in the cloud.
- [ ] C. The company shares responsibility with the cloud provider for securing the physical infrastructure.
- [ ] D. The company is fully responsible for securing all physical infrastructure of the cloud, including data centers.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AWS is responsible for the physical security of data centers. This includes measures like access controls, surveillance, and environmental controls. Companies migrating to the cloud still have responsibilities such as security configurations and data within their cloud environments.

<!-- id: m01-07-assessment-q8 -->
## Question 8

You are a cloud architect at a company that has recently migrated its infrastructure to AWS. Your manager has asked you to debrief your team on which responsibilities the customer has when it comes to securing cloud resources. What is the customer's responsibility, based on the AWS Shared Responsibility Model? (Select TWO.)

_Choose 2_

- [ ] A. Physical security of data centers
- [x] B. Managing operating system (OS) patches
- [x] C. Encrypting client-side data
- [ ] D. Networking and infrastructure hardware maintenance
- [ ] E. Updating compute, networking, storage, and database software

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: In the AWS Shared Responsibility Model, the customer is responsible for managing OS patches. AWS provides the underlying infrastructure, but the customer must make sure that their OSs are up to date with the latest security patches. The customer is also responsible for encrypting client-side data. AWS provides various services to help with encryption, but it is the customer’s responsibility to implement and manage these services.Physical security of data centers and hardware maintenance are AWS responsibilities. Updating software for compute, networking, storage, and database services is also an AWS responsibility.
