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

#### **Kategori Layanan Utama (contoh yang paling sering dipakai)**

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

### **Jaringan & Delivery**

* **VPC**: jaringan privat (subnet, route table, NACL, security group).
* **ALB/NLB**: load balancer.
* **Route 53**: DNS & health check.
* **CloudFront**: CDN.
* **Direct Connect / VPN**: koneksi on-prem ke AWS.
* **API Gateway**: publikasi API (sering dipasangkan dengan Lambda).

#### **Keamanan, Identitas, & Kepatuhan**

* **IAM**: identitas & izin (user, role, policy).
* **IAM Identity Center** (SSO), **KMS** (manajemen kunci/enkripsi), **Cognito** (identitas pengguna aplikasi), **WAF/Shield** (proteksi web & DDoS), **Secrets Manager/Parameter Store.**

#### **Observabilitas & Audit**

* **CloudWatch** (metric/log/alert)**, X-Ray** (tracing), **CloudTrail** (audit API), **Config** (drift & kepatuhan).

#### **Integrasi & Event**

* **SQS** (queue), **SNS** (pub/sub notifikasi), **EventBridge** (event bus), **Step Functions** (workflow serverless).

#### **Data & Analitik**

* **Glue** (ETL & data catalog), **Athena** (SQL langsung ke S3), **EMR** (Hadoop/Spark), **Kinesis** (streaming), **OpenSearch** (pencarian/log), **QuickSight** (BI).

#### **AI/ML**

* **SageMaker** (end-to-end ML), **Bedrock** (akses model generatif foundation dari AWS & partner, orchestration, guardrail).

#### **Migrasi & Hybrid/Edge**

* **Application Migration Service (MGN), Database Migration Service (DMS).**
* **Outposts / Local Zones / Wavelength / Snow Family**: kebutuhan on-prem, latensi rendah, atau lingkungan terbatas.

#### **Manajemen & Tata Kelola**

* **Organizations, Control Tower** (landing zone), **Systems Manager** (patch/ops)**, Service Catalog, Trusted Advisor, Backup.**

#### **Biaya & Tagging**

* **Cost Explorer, Budgets, CUR** (Cost & Usage Report), **Savings Plans/Reserved Instances/Spot** untuk hemat biaya.
* **Tagging** sumber daya penting untuk pelacakan biaya & kebijakan.

#### **Model Harga (Pricing)**

* **On-Demand:** bayar sesuai jam/detik/pemakaian (paling fleksibel).
* **Reserved Instances / Savings Plans**: komitmen 1–3 tahun → diskon besar.
* **Spot**: harga diskon untuk beban kerja yang toleran interupsi.
* **Free Tier**: kuota gratis terbatas (bulan pertama atau selalu gratis untuk layanan tertentu).

#### **Arsitektur Umum (Contoh)**

1. **Web server klasik (EC2)**

* ALB → Auto Scaling Group (EC2) → RDS (Aurora) → S3 (backup/static).
* Cocok jika perlu kendali penuh atas OS/runtime

**2. Aplikasi serverless**

* CloudFront + S3 (static web) → API Gateway → Lambda → DynamoDB
* EventBridge/SQS/SNS untuk integrasi → CloudWatch/CloudTrail untuk observasi.
* Cocok untuk skala dinamis & biaya pay-per-use.

**3. Microservices berbasis container**

* Route 53 → ALB → EKS/ECS(Fargate) → ECR (image) → RDS/DynamoDB.
* Service mesh (App Mesh), CI/CD (CodeCommit/CodeBuild/CodeDeploy/CodePipeline).

**4. Data lake & analitik**

* S3 (data lake) + Glue (catalog/ETL) + Athena (SQL) + EMR/Spark/Kinesis (streaming) + QuickSight (BI).

#### **Keamanan: Praktik Penting**

* Prinsip **least privilege** di IAM; gunakan **role** (bukan long-lived access key).
* Enkripsi **in transit** (TLS) & **at rest** (KMS).
* **Network segmentation** (subnet privat, security group, NACL).
* **Multi-account + SCP** (service control policy) di Organizations.
* Log & audit: **CloudTrail** on, **Config** on, **CloudWatch** alarm.
* **Patch rutin** (EC2/EKS) atau gunakan **managed/serverless** untuk kurangi beban patching.
* **Backup & DR** (AWS Backup, cross-Region S3 replication, RPO/RTO jelas).

#### **Kepatuhan & Data Residency**

AWS menyediakan banyak sertifikasi kepatuhan (ISO, SOC, PCI DSS, HIPAA, dll). Anda memilih **Region** untuk kontrol lokasi data. Untuk kebutuhan regulasi lokal, desain **isolasi data** dan kebijakan enkripsi yang sesuai.