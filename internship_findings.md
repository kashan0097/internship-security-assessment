# Security Assessment Report
## Target: OWASP Juice Shop (localhost:3000)
## Date: 22 May 2026
## Tool: OWASP ZAP 2.17.0

---

## 1. Manual Testing Results

### 1.1 XSS (Cross-Site Scripting)
- **Test Location:** Product Review Section, Customer Feedback Page
- **Payload Used:** `<iframe src="javascript:alert('xss')">`
- **Result:** Payload stored in database (Stored XSS confirmed)
- **Risk:** High — attacker can inject malicious scripts affecting all users

### 1.2 SQL Injection
- **Test Location:** Login Page (email field)
- **Payload Used:** `' OR 1=1--`
- **Result:** SUCCESSFUL — bypassed authentication, logged in as Admin
- **Risk:** Critical — complete authentication bypass possible

---

## 2. OWASP ZAP Automated Scan Results

### Medium Risk
| Vulnerability | Description |
|---|---|
| CSP Header Not Set | No Content Security Policy configured — XSS attacks easier |
| Cross-Domain Misconfiguration | CORS set to `*` — any domain can read responses |

### Low Risk
| Vulnerability | Description |
|---|---|
| Timestamp Disclosure | Unix timestamps exposed in responses |

### Informational
| Vulnerability | Description |
|---|---|
| Information Disclosure - Suspicious Comments | Source code comments visible |
| Modern Web Application | Angular SPA detected |

---

## 3. Areas of Improvement
- Implement Content Security Policy headers
- Restrict CORS to trusted domains only
- Sanitize all user inputs to prevent XSS
- Use parameterized queries to prevent SQL injection
- Remove sensitive comments from production code
- Hash passwords using bcrypt
