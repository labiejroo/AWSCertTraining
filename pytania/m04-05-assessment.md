# Module 4: Going Global › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m04-05-assessment-q1 -->
## Question 1

A nonprofit organization is migrating all of their resources to the AWS Cloud. They are trying to decide which AWS Region to deploy their resources to.Which option lists the factors the organization needs to consider when deciding where to place their cloud resources?

_Choose 1_

- [ ] A. Software licensing, hardware specifications, cloud skillset of staff, and customer reviews
- [ ] B. Network speed, data encryption, user interface, and storage capacity
- [x] C. Compliance, proximity to customers, feature availability, and pricing
- [ ] D. Server uptime, application performance, employee satisfaction, and office location

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: When deciding where to place cloud resources, companies must consider multiple factors. Compliance refers to the Region meeting legal or regulatory requirements. Proximity to customers helps reduce latency and improve user experience. Feature availability makes sure that the required AWS services are supported in the chosen Region. Pricing varies by Region, so cost-efficiency is also a critical factor.

<!-- id: m04-05-assessment-q2 -->
## Question 2

What BEST describes key benefits of using multiple AWS Regions and multiple Availability Zones?

_Choose 2_

- [x] A. Low latency for end users
- [ ] B. Enhanced security protocol
- [ ] C. Increased storage capacity
- [x] D. High availability and fault tolerance
- [ ] E. Faster database migration

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: By using multiple AWS Regions, a company can place their resources closer to their end users, which reduces the distance that the data must travel. This results in lower latency and a better user experience. By using multiple Availability Zones within a Region, the company enhances the fault tolerance of their applications. If one zone fails, their application can continue to operate from another zone, maintaining high availability.

<!-- id: m04-05-assessment-q3 -->
## Question 3

Which answer BEST describes the purpose and benefits of AWS edge locations?

_Choose 1_

- [ ] A. Edge locations are composed of physical data centers that host the majority of AWS services and applications.
- [ ] B. Edge locations are intended to provide redundant storage solutions for critical data.
- [ ] C. Edge locations are used exclusively for running compute-intensive applications and databases.
- [x] D. Edge locations cache content to deliver data with lower latency and higher transfer speeds to end users.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: This answer accurately describes the purpose and benefits of AWS edge locations. They are designed to improve the delivery of content by caching it closer to end users, thus reducing latency and increasing transfer speeds.

<!-- id: m04-05-assessment-q4 -->
## Question 4

Which answer BEST describes the relationship between AWS Regions, Availability Zones, and edge locations?

_Choose 1_

- [ ] A. AWS Regions are physical locations around the world where AWS has multiple Availability Zones. Each Availability Zone has one or more edge location.
- [ ] B. AWS Regions, Availability Zones, and edge locations are all the same thing and are used interchangeably.
- [ ] C. AWS Regions contain multiple edge locations, and each edge location can have one or more Availability Zones.
- [x] D. AWS Regions are physical locations around the world where AWS has multiple Availability Zones. Edge locations are located outside of AWS Regions and cache frequently accessed content.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AWS Regions are indeed physical locations around the world where AWS has multiple isolated Availability Zones. Edge locations, on the other hand, are part of the AWS content delivery network (CDN). They are optimized for content delivery, not directly tied to Availability Zones.

<!-- id: m04-05-assessment-q5 -->
## Question 5

Which answer describes the key features and benefits of AWS CloudFormation?

_Choose 1_

- [x] A. With CloudFormation, users can model and set up their AWS resources using code to automate provisioning and the management of infrastructure. This method can help to reduce errors and maintain consistency across environments.
- [ ] B. With CloudFormation, users can cache frequently accessed content. That way, users experience lower latency when accessing cloud resources.
- [ ] C. CloudFormation is a service that provides a visual interface for manually configuring each AWS resource one by one, without the need for any code.
- [ ] D. CloudFormation is a cost-optimization tool that analyzes the AWS usage and recommends the best practices for reducing a company's AWS bills.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: This answer accurately describes the key features and benefits of CloudFormation. It highlights the ability to model and set up resources using code, automate provisioning, reduce errors, and help maintain environment consistency.

<!-- id: m04-05-assessment-q6 -->
## Question 6

A team at a biomedical tech company is tasked with deploying a new medical application across multiple AWS Regions to help maintain high availability and fault tolerance. The application consists of several components, including a web server, a database, and a message queue. The deployment needs to be consistent and repeatable and should minimize manual errors through automation.Which approach is BEST suited for deploying this application according to the needs of automation and consistency?

_Choose 1_

- [ ] A. Using the AWS Management Console to manually deploy each component in every Region
- [x] B. Using an Infrastructure as Code (IaC) service such as AWS CloudFormation to deploy the application
- [ ] C. Combining console and programmatic approaches for different tiers of the application
- [ ] D. Writing a script to programmatically deploy the application using the cloud provider's API

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: With an IaC service like CloudFormation, the team can define their infrastructure in a declarative way. This helps to version, review, and automate the deployment process for consistency and repeatability.
