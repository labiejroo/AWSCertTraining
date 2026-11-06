# Module 6: Storage › Amazon Simple Storage Service (Amazon S3)

Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.

<!-- id: m06-04-amazon-simple-storage-service-amazon-s3-q1 -->
## Question 1

AnyCompany Mobile is evaluating cloud storage solutions for their new mobile application. They need a reliable service that can handle various types of data storage requirements as their user base grows.Based on this scenario, what is an aspect of Amazon S3 that they could use in this scenario?

_Choose 1_

- [ ] A. Running relational database queries for user authentication
- [ ] B. Real-time data streaming and message processing
- [x] C. Storing and distributing mobile application content and user-generated media files
- [ ] D. Hosting virtual machines (VMs) to process application logic

> Correct! Rationale: Amazon S3 is designed for scalable object storage that can efficiently store and serve various content types. It's ideal for mobile applications that need to store and distribute user-generated content like photos and videos.

<!-- id: m06-04-amazon-simple-storage-service-amazon-s3-q2 -->
## Question 2

AnyCompany Marketing has created an Amazon S3 bucket to host images for their new website. The images need to be accessible to anyone visiting the website without authentication. After uploading the images to the bucket, users report they cannot access them, even though the bucket policy is set to allow public access.What is the most likely cause of this access issue?

_Choose 1_

- [x] A. Block public access settings are enabled at the account or bucket level.
- [ ] B. The S3 bucket must be in the same AWS Region as the users trying to access the content.
- [ ] C. The images are not properly tagged with public read permissions.
- [ ] D. They need to enable the website hosting feature to make any Amazon S3 content public.

> Correct! Rationale: S3 Block Public Access settings override bucket policies, preventing public access even when policies allow it.

<!-- id: m06-04-amazon-simple-storage-service-amazon-s3-q3 -->
## Question 3

AnyCompany Media is looking for a new cloud storage solution. They distribute large video files to users around the world, and are looking for a service that is highly durable, scalable, and offers various access control mechanisms.Based on this scenario, which Amazon S3 feature would be particularly beneficial?

_Choose 1_

- [ ] A. Amazon S3 limits individual object sizes to 5 GB, requiring companies to split large video files before upload.
- [ ] B. Amazon S3 provides built-in video transcoding services that automatically convert videos to different formats when they are uploaded.
- [x] C. Amazon S3 offers 99.999999999 percent (11 nines) of durability for objects stored across multiple Availability Zones. This maintains highly available for their video content and protects it against data loss.
- [ ] D. Amazon S3 automatically compresses all stored objects to reduce storage costs by up to 90 percent, making it ideal for large video files.

> Correct! Rationale: Amazon S3 is designed with this durability level as a key feature, which is critical for valuable media assets that cannot be conveniently recreated if lost.
