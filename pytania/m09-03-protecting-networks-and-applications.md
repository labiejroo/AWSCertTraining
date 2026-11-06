# Module 9: Security › Protecting Networks and Applications

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m09-03-protecting-networks-and-applications-q1 -->
## Question 1

In a denial of service (DoS) attack, an attacker floods a web application with excessive network traffic. Legitimate customer requests are denied if the web application becomes overloaded and can no longer respond. How is a distributed denial of service (DDoS) attack different?

_Choose 1_

- [ ] A. A DDoS attack distributes malware to end users instead of overwhelming network resources.
- [ ] B. A DDoS attack targets multiple websites simultaneously instead of focusing on a single target.
- [x] C. A DDoS attack uses multiple compromised computers and devices to launch the attack.
- [ ] D. A DDoS attack distributes the incoming traffic across multiple servers to prevent service interruption.

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Unlike a regular DoS attack from a single source, DDoS attacks use networks of compromised computers to send traffic to the target.

<!-- id: m09-03-protecting-networks-and-applications-q2 -->
## Question 2

An online boutique has recently suffered a series of targeted distributed denial of service (DDoS) attacks. The owner wants to enhance the security of the boutique's web application using AWS infrastructure. Which components can the boutique use to protect the web application on AWS from DDoS attacks?

_Choose 2_

- [ ] A. Auto scaling groups
- [x] B. Security groups
- [ ] C. Compute instances
- [ ] D. Public subnets
- [x] E. Elastic Load Balancing (ELB)

<!-- klucz: znaczniki przy odpowiedziach -->

> Correct! Rationale: Security groups make sure only traffic from authenticated users is allowed into the system, while an ELB distributes incoming traffic to prevent any single frontend server from being overwhelmed. Operating at the AWS network level, these components leverage the full capacity of the AWS Region to help absorb large-scale attacks.
