# Module 5: Networking › Assessment

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m05-08-assessment-q1 -->
## Question 1

What is networking in the AWS Cloud?

_Choose 1_

- [x] A. Interconnected devices that can exchange data and resources
- [ ] B. Physically isolated data centers or set of data centers within an AWS Region
- [ ] C. Logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define
- [ ] D. System that translates readable domain names to IP addresses

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: You can think of networking in the AWS Cloud as the infrastructure and services working together to host your applications, data, and any other resources you might need.

<!-- id: m05-08-assessment-q2 -->
## Question 2

What is the primary function of an Availability Zone in the AWS Cloud?

_Choose 1_

- [ ] A. It filters inbound and outbound traffic to EC2 instances in a VPC.
- [ ] B. It provisions a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
- [ ] C. It allows you to create a subsection of a virtual private cloud (VPC) where you can isolate resources and control access.
- [x] D. It enhances application availability and fault tolerance by allowing resources to be deployed across multiple zones.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: An Availability Zone is a physically isolated data center or set of data centers within an AWS Region. Each AZ has independent power, cooling, and networking, designed to enhance application availability and fault tolerance by allowing resources to be deployed across multiple Availability Zones within the same Region.

<!-- id: m05-08-assessment-q3 -->
## Question 3

A company wants to establish a secure, private connection between their on-premises data center and their Amazon VPC to create a hybrid cloud architecture.Which component should they use to help ensure a secure connection?

_Choose 1_

- [x] A. Virtual private gateway
- [ ] B. Internet gateway
- [ ] C. Subnet
- [ ] D. Route table

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: A virtual private gateway is the virtual private network (VPN) endpoint on the AWS side. It provides a way for you to establish a secure, encrypted connection between your on-premises network and your virtual private cloud (VPC).

<!-- id: m05-08-assessment-q4 -->
## Question 4

A customer is creating an Amazon VPC for their application. They want to create a private segment in the Amazon VPC so that resources launched can be isolated from users on the internet.Which network component would BEST meet their needs?

_Choose 1_

- [x] A. A private subnet
- [ ] B. An Availability Zone instead of a subnet
- [ ] C. A public subnet
- [ ] D. Either a public subnet or a private subnet would work

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: A private subnet is a network segment within a Virtual Private Cloud (VPC) that does not have a direct route to the internet. This would meet their needs for the application.

<!-- id: m05-08-assessment-q5 -->
## Question 5

A retail customer is hosting their application in an Amazon VPC and wants to configure traffic rules for the Amazon EC2 instances running in a public subnet. The application requires multiple rules to be defined at the instance level. Which solution or feature would meet their needs?

_Choose 1_

- [x] A. Set up security groups for the Amazon EC2 instances based on the application requirements.
- [ ] B. Set up a virtual private gateway based on the application requirements.
- [ ] C. Set up network access control lists, (network ACLs) for the Amazon EC2 instances based on the application requirements.
- [ ] D. Change the public subnet to a private subnet to avoid public internet access.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Security groups would allow the fine-grained control at the instance level. They can define rules in the public subnet for the individual instances.

<!-- id: m05-08-assessment-q6 -->
## Question 6

A customer is moving their application to an Amazon VPC and wants to setup a traffic control at the subnet level. They need broad control of traffic in and out and would like to use both allow and deny type rules.Which solution or feature would meet their needs?

_Choose 1_

- [ ] A. Change the public subnet to a private subnet to avoid public internet access.
- [ ] B. Set up a virtual private gateway based on the application requirements.
- [ ] C. Use security groups.
- [x] D. Use network access control lists (network ACLs).

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Network ACLs would allow the broad traffic control at the subnet level. Network ACLs also have both allow and deny type rules.

<!-- id: m05-08-assessment-q7 -->
## Question 7

A customer is exploring solutions to establish secure, encrypted connections between their on-premises networks at their data centers and branch offices. They are looking for the MOST cost-effective way to connect their office sites to other sites and their AWS services. They are not looking to increase the amount of bandwidth.Which solution would BEST meet their needs?

_Choose 1_

- [ ] A. AWS PrivateLink
- [ ] B. AWS Direct Connect
- [x] C. AWS Site-to-Site VPN
- [ ] D. AWS Client VPN

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: AWS Site-to-Site VPN creates a secure connection between your data center or branch offices and your AWS Cloud resources.

<!-- id: m05-08-assessment-q8 -->
## Question 8

An enterprise customer just merged with another company and needs a way to quickly scale and provide a way for the new worldwide sales force to access their AWS resources. They want a fully managed service with advanced authentication for their new remote workers.Which solution would BEST meet their needs?

_Choose 1_

- [ ] A. AWS Site-to-Site VPN
- [ ] B. AWS Direct Connect
- [ ] C. AWS PrivateLink
- [x] D. AWS Client VPN

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Amazon Client VPN is a networking service you can use to connect your remote workers and on-premises networks to the cloud. It provides advanced authentication, and elastic and remote access in a fully managed service.

<!-- id: m05-08-assessment-q9 -->
## Question 9

A customer wants a way to establish a dedicated connection from their on-premises network to an Amazon VPC. They need a solution that provides a more consistent network experience with increased bandwidth.Which type of connection to the AWS Cloud would BEST meet their needs?

_Choose 1_

- [ ] A. Internet gateway
- [x] B. AWS Direct Connect
- [ ] C. Amazon CloudFront
- [ ] D. Virtual private gateway

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Direct Connect would establish a dedicated connection from an on-premises network to one or more virtual private clouds (VPCs). It can also reduce network costs, increase bandwidth throughput, and provide a more consistent network experience than internet-based connections.

<!-- id: m05-08-assessment-q10 -->
## Question 10

What is the primary function of a domain name service (DNS)?

_Choose 1_

- [ ] A. It provisions a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
- [ ] B. It filters inbound and outbound traffic to Amazon EC2 instances in a virtual private cloud (VPC).
- [x] C. It translates human-readable domain names to machine readable IP addresses.
- [ ] D. It allows you to create a subsection of a virtual private cloud (VPC) where you can isolate resources and control access.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: A DNS translates the domain name into your browser and sends it to a customer DNS resolver. It then asks the company DNS server for the IP address and returns it so the user can reach the website.

<!-- id: m05-08-assessment-q11 -->
## Question 11

A customer is creating their application resources in their virtual private cloud (VPC) subnets. They want to secure their resources in the cloud, specifically the networking traffic protection tasks.Which component is the customer responsible for, based on the shared responsibility model?

_Choose 1_

- [x] A. Securing network traffic with the subnets and resources with Network access control lists (network ACLs) and security groups
- [ ] B. Securing access to the AWS data centers and facilities that run AWS Cloud services
- [ ] C. Securing the hardware that runs the AWS Cloud services
- [ ] D. Securing the software that runs the AWS Cloud services

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: The customer is responsible for securing the network traffic. They can do this using security groups and network ACLs.

<!-- id: m05-08-assessment-q12 -->
## Question 12

A financial customer needs a content delivery solution to deliver required training videos and static content to their financial consultants worldwide. They want to make sure the solution provides low latency.Which AWS solution would BEST meet their needs?

_Choose 1_

- [ ] A. AWS Global Accelerator
- [ ] B. AWS Direct Connect
- [ ] C. Amazon Route 53
- [x] D. Amazon CloudFront

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: CloudFront speeds up distribution of your static and dynamic web content to your users. It securely delivers your content with low latency through a worldwide network of data centers called edge locations.

<!-- id: m05-08-assessment-q13 -->
## Question 13

A media company needs a service to manage their domain registrations with different providers. They will also be using the service to route internet traffic to their resources hosted both in the AWS Cloud and elsewhere.Which AWS solution would BEST meet their needs?

_Choose 1_

- [x] A. Amazon Route 53
- [ ] B. AWS Direct Connect
- [ ] C. AWS Global Accelerator
- [ ] D. Amazon CloudFront

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Route 53 is a domain name system (DNS) service that manages domain registration, DNS routing, and health checks. It provides reliable and efficient routing of users to your website or applications, whether they are hosted within AWS or elsewhere.

<!-- id: m05-08-assessment-q14 -->
## Question 14

A customer is exploring edge networking services to improve application availability, performance, and security. They need a solution for traffic routing when something goes wrong in one of their application's locations. Specifically, it takes into account the endpoint health, user location, and policies.Which AWS solution would BEST meet their needs?

_Choose 1_

- [ ] A. AWS Direct Connect
- [ ] B. Amazon CloudFront
- [ ] C. Amazon Route 53
- [x] D. AWS Global Accelerator

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Global Accelerator is a network service that is designed to improve the availability and performance of applications for global users. It does this by providing static IP addresses, directing traffic over the AWS global network, and routing to optimal endpoints based on health, user location, and policies.
