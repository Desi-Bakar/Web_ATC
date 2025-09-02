---
templateKey: blog-post
title: Apa itu AWS?
date: 2025-09-02T03:36:00.914Z
description: "AWS adalah platform cloud computing milik Amazon yang menyediakan
  ratusan layanan terkelola (managed services) lewat internet untuk komputasi,
  penyimpanan, database, jaringan, keamanan, analitik data, AI/ML, dan banyak
  lagi. Alih-alih membeli dan mengelola server fisik sendiri, Anda “menyewa”
  sumber daya di data center AWS secara on-demand: bayar sesuai pemakaian,
  elastis (bisa naik/turun kapasitas), dan global (banyak region di seluruh
  dunia)."
featuredpost: true
featuredimage: /img/chatgpt-image-sep-2-2025-10_44_38-am.png
tags: []
---
**Konsep Dasar**

* **Global Infrastructure** 

  AWS punya banyak **Region** (wilayah geografis, mis. ap-southeast-1 Singapura) yang berisi beberapa **Availability Zone (AZ)**—kumpulan data center terpisah untuk **high availability**. Ada juga **Edge locations** untuk CDN (CloudFront).
* **Model Tanggung Jawab Bersama (Shared Responsibility Model)**
* **AWS**: keamanan of the cloud (fisik, jaringan data center, hypervisor).
* **Anda**: keamanan in the cloud (konfigurasi IAM, enkripsi data, patch OS/app kalau pakai EC2, kebijakan VPC, dsb).
* **Skema Akun & Organisasi**

  Praktik umum: banyak akun (multi-account) dikelola lewat **AWS Organizations/Control Tower** agar isolasi beban kerja, biaya, dan kebijakan lebih rapi.
* **Well-Architected Framework** (6 pilar)**: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.**



##### **Kategori Layanan Utama (contoh yang paling sering dipakai)**

**Komputasi**

* **EC2**: server virtual (VM).
* **Lambda**: komputasi serverless berbasis event (bayar per milidetik eksekusi).
* **Fargate**: jalankan container tanpa kelola server.
* **Batch, Auto Scaling, Elastic Beanstalk**: batch jobs, penskalaan otomatis, PaaS sederhana.



**Penyimpanan**

* **S3**: object storage (durable, murah, skala masif).
* **EBS**: block storage untuk EC2.
* **EFS**: file system NFS yang elastis.
* **Glacier**: arsip murah untuk data jarang diakses.



**Database**

* **RDS** (MySQL, PostgreSQL, MariaDB, SQL Server, Oracle) & **Aurora** (kompatibel MySQL/Postgres, performa tinggi).
* **DynamoDB**: NoSQL key-value, latensi rendah, serverless.
* **ElastiCache** (Redis/Memcached), **Neptune** (graph), **DocumentDB** (dokumen), **Redshift** (data warehouse).

**Jaringan & Delivery**

* **VPC**: jaringan privat (subnet, route table, NACL, security group).
* **ALB/NLB**: load balancer.
* **Route 53**: DNS & health check.
* **CloudFront**: CDN.
* **Direct Connect / VPN**: koneksi on-prem ke AWS.
* **API Gateway**: publikasi API (sering dipasangkan dengan Lambda).



**Keamanan, Identitas, & Kepatuhan**

* **IAM**: identitas & izin (user, role, policy).
* **IAM Identity Center** (SSO), **KMS** (manajemen kunci/enkripsi), **Cognito** (identitas pengguna aplikasi), **WAF/Shield** (proteksi web & DDoS), **Secrets Manager/Parameter Store.**



**Observabilitas & Audit**

* **CloudWatch** (metric/log/alert)**, X-Ray** (tracing), **CloudTrail** (audit API), **Config** (drift & kepatuhan).

**Integrasi & Event**

* **SQS** (queue), **SNS** (pub/sub notifikasi), **EventBridge** (event bus), **Step Functions** (workflow serverless).

**Data & Analitik**

* **Glue** (ETL & data catalog), **Athena** (SQL langsung ke S3), **EMR** (Hadoop/Spark), **Kinesis** (streaming), **OpenSearch** (pencarian/log), **QuickSight** (BI).



**AI/ML**

* **SageMaker** (end-to-end ML), **Bedrock** (akses model generatif foundation dari AWS & partner, orchestration, guardrail).



**Migrasi & Hybrid/Edge**

* **Application Migration Service (MGN), Database Migration Service (DMS).**
* **Outposts / Local Zones / Wavelength / Snow Family**: kebutuhan on-prem, latensi rendah, atau lingkungan terbatas.



**Manajemen & Tata Kelola**

* **Organizations, Control Tower** (landing zone), **Systems Manager** (patch/ops)**, Service Catalog, Trusted Advisor, Backup.**



**Biaya & Tagging**