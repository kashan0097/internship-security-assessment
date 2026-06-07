# Internship Security Assessment

## Overview
Security assessment and fixes for OWASP Juice Shop web application.

## Week 1: Security Assessment
- Set up OWASP Juice Shop locally
- Performed XSS testing - stored XSS payload confirmed
- Performed SQL Injection - admin bypass successful using `' OR 1=1--`
- Ran OWASP ZAP automated scan - found 6 vulnerabilities
- Documented findings in `internship_findings.md`

## Week 2: Security Fixes
Implemented in `security-fixes.js`:
- Input validation using `validator` library
- Password hashing using `bcrypt` (salt rounds: 10)
- JWT token authentication using `jsonwebtoken`
- HTTP security headers using `helmet`

## Week 3: Advanced Security
- Network scan using Nmap - identified open ports
- Logging implemented using `winston` - see `security.log`

## Tools Used
- OWASP ZAP 2.17.0
- Nmap 7.98
- Node.js libraries: validator, bcrypt, jsonwebtoken, helmet, winston

## GitHub Repository
https://github.com/kashan0097/internship-security-assessment
