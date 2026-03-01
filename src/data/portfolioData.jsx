import {
  FaJava, FaPython, FaDocker, FaGitAlt, FaGithub, FaLinkedin, FaInstagram, FaAws,
  FaDatabase, FaEnvelope, FaGlobe, FaCertificate
} from 'react-icons/fa';
import {
  SiSpring, SiSpringboot, SiSpringsecurity, SiApachekafka, SiPostgresql, SiMysql,
  SiRedis, SiNumpy, SiPandas, SiHtml5, SiCss3, SiJavascript, SiIntellijidea,
  SiPostman, SiApachemaven, SiHibernate, SiCplusplus,
  SiAmazons3, SiAmazonec2, SiOracle
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbApi, TbBrandLeetcode } from 'react-icons/tb';

export const personalInfo = {
  name: 'Raj Jaiswal',
  roles: [
    'Backend Engineer',
    'Distributed Systems Developer',
    'Cloud-Native Builder',
    'Data Science Enthusiast',
  ],
  email: 'jaiswalraj7804@gmail.com',
  github: 'https://github.com/Rajj23/',
  linkedin: 'https://www.linkedin.com/in/raj-jaiswal-lpu/',
  instagram: 'https://www.instagram.com/rajjaiswal23_27/',
  leetcode: 'https://leetcode.com/u/Rajjaiswal23_27/',
  gfg: 'https://www.geeksforgeeks.org/profile/rajjaiswal23',
  website: 'https://rajjaiswal.online',
  resumeLink: '/Raj_Jaiswal_Resume.pdf',
};

export const stats = [
  { number: '680+', label: 'Problems Solved' },
  { number: '3', label: 'Systems Engineered' },
  { number: 'AWS', label: 'Certified' },
];

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: <FaAws />,
  },
  {
    title: 'OCI AI Foundations Associate',
    issuer: 'Oracle',
    icon: <SiOracle />,
  },
];

export const education = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech in Computer Science & Engineering',
    duration: '2023 — 2027',
  },
  {
    institution: 'Herman Gmeiner School, Varanasi',
    degree: 'Intermediate (XII)',
    duration: '2020 — 2022',
  },
  {
    institution: 'St. Xavier High School, Mau',
    degree: 'Matriculation (X)',
    duration: '2018 — 2020',
  },
];

export const skills = {
  languages: {
    title: 'Languages',
    items: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Python', icon: <FaPython /> },
    ]
  },
  frameworks: {
    title: 'Backend & Frameworks',
    items: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Spring Security', icon: <SiSpringsecurity /> },
      { name: 'Spring Cloud', icon: <SiSpring /> },
      { name: 'Hibernate / JPA', icon: <SiHibernate /> },
      { name: 'Apache Kafka', icon: <SiApachekafka /> },
      { name: 'REST APIs', icon: <TbApi /> },
      { name: 'JWT', icon: <TbApi /> },
      { name: 'Microservices', icon: <TbApi /> },
      { name: 'RBAC', icon: <TbApi /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Pandas', icon: <SiPandas /> },
    ]
  },
  databases: {
    title: 'Data Stores',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'H2', icon: <FaDatabase /> },
    ]
  },
  cloud: {
    title: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'EC2', icon: <SiAmazonec2 /> },
      { name: 'S3', icon: <SiAmazons3 /> },
      { name: 'API Gateway', icon: <TbApi /> },
    ]
  },
  tools: {
    title: 'Developer Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea /> },
      { name: 'VS Code', icon: <VscCode /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Maven', icon: <SiApachemaven /> },
    ]
  }
};

export const projects = [
  {
    title: 'PayFlux',
    subtitle: 'Distributed Microservices Payment Platform',
    description: [
      'A production-grade distributed payment system handling peer-to-peer transfers with guaranteed consistency across isolated services',
      'Architected 6-microservice payment platform sustaining 29.6 req/s at 255ms p50 under 100 concurrent users with 0% error rate',
      'Engineered compensation-based Saga pattern for distributed consistency — automatic sender refund on receiver failure',
      'Prevented double-spend via JPA PESSIMISTIC_WRITE locks with idempotent Kafka consumers across 2 consumer groups',
      'Secured API Gateway with JWT auth and Redis-backed rate limiting (10 req/s sustained, burst 20)',
      'Containerized all 6 services with Docker Compose enabling single-command full-stack orchestration',
    ],
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'Redis', 'Docker', 'JWT', 'PostgreSQL', 'JPA / Hibernate'],
    githubLink: 'https://github.com/Rajj23/PayFlux',
    image: '/PayFlux.png',
  },
  {
    title: 'TaskFlow',
    subtitle: 'Real-Time Workflow Engine',
    description: [
      'A real-time task management platform with live deadline notifications and high-performance prefix search',
      'Built custom TaskTrie search engine achieving O(k) prefix lookup; filter API sustained 95 req/s at 64ms avg under 230 concurrent users',
      'Delivered real-time task alerts via STOMP WebSocket with @Scheduled overdue detection and deduplication',
      'Secured dual-role access (USER → ADMIN) via custom OncePerRequestFilter JWT validation',
      'Designed paginated REST API with role-scoped data access enforced at service layer',
      'Shipped via multi-stage Docker build (JDK 21 → JRE 21) with environment-based config injection',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'WebSocket', 'RBAC', 'Docker', 'PostgreSQL'],
    githubLink: 'https://github.com/Rajj23/TaskFlow',
    liveLink: 'https://taskflow.rajjaiswal.online/',
    image: '/TaskFlow.png',
  },
  {
    title: 'BlockVerse',
    subtitle: 'Hierarchical Collaborative Workspace API',
    description: [
      'A Notion-inspired collaborative workspace API with infinitely nestable block structures and multi-tenant access control',
      'Engineered adjacency-list block tree with BIGINT gap ordering enabling O(1) mid-list inserts and O(n) reconstruction via single flat-fetch query',
      'Designed optimistic concurrency control via JPA @Version preventing lost updates under concurrent edits',
      'Enforced 3-tier RBAC (Owner → Admin → Member) with atomic @Transactional ownership transfer across 14 endpoints',
      'Optimized block retrieval via composite index on (document_id, position) — single-query full tree load regardless of depth',
      'Covered critical paths with JUnit 5 — concurrency, RBAC boundaries, and reordering edge cases',
    ],
    tech: ['Java', 'Spring Boot', 'JPA / Hibernate', 'REST APIs', 'PostgreSQL', 'JUnit 5'],
    githubLink: 'https://github.com/Rajj23/BlockVerse',
    image: '/BlockVerse.png',
  },
];
