# Module 5: Networking › Subnets, Security Groups, and Network Access Control Lists

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m05-04-subnets-security-groups-and-network-access-control-lists-q1 -->
## Question 1

A retail customer is setting up their application in the AWS Cloud. The application requires a lot of control in defining traffic rules for the individual Amazon EC2 instances in their public subnet. Which solution would BEST meet the requirements for securing the resources?

_Choose 1_

- [ ] A. Change all the subnets to private subnets to avoid accessing from the public internet.
- [ ] B. Set up network ACLs for the EC2 instances based on the application requirements.
- [x] C. Set up security groups for the EC2 instances based on the application requirements.
- [ ] D. Set up a public subnet with strong passwords that meet the customer's requirements.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Security groups would allow the fine-grained control at the instance level.

<!-- id: m05-04-subnets-security-groups-and-network-access-control-lists-q2 -->
## Question 2

Which network component performs stateless packet filtering?

_Choose 1_

- [x] A. Network access control list (network ACL)
- [ ] B. Security groups
- [ ] C. Amazon VPC
- [ ] D. Private subnet

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Network access control lists are stateless and don't remember the previous decisions made for incoming packets.
