# Confidentiality and Repository Hygiene

## Never publish

- Employer source code
- Internal SQL copied from production
- Nonpublic schemas or architecture
- Customer, seller, patient, or employee data
- Credentials, tokens, cookies, or API keys
- Internal URLs, ticket IDs, contact names, or distribution lists
- Confidential screenshots
- Proprietary documents or presentations
- Production query results
- Personally identifiable or protected health information

## Use instead

- Synthetic data
- Public datasets
- Fictional companies and entities
- Generalized field names
- Materially transformed examples
- Rebuilt logic based on your own understanding
- Approximate or illustrative metrics clearly labeled as examples

## Recommended `.gitignore`

```gitignore
.env
.env.*
!.env.example
*.pem
*.key
credentials.json
token.json
secrets/
data/raw/
data/private/
outputs/private/
__pycache__/
.pytest_cache/
.venv/
.DS_Store
```

## Before every push

```bash
git status
git diff --cached
```

Also review:

- File names
- Notebook outputs
- Screenshots
- Commit history
- Configuration files
- Sample data
- Log files

## Secret scanning

Consider using:

- GitHub secret scanning
- `gitleaks`
- `trufflehog`
- pre-commit hooks

Example:

```bash
gitleaks detect --source .
```

## If a secret was committed

Removing it from the latest file is not enough. Immediately:

1. Revoke or rotate the credential.
2. Remove it from Git history.
3. Force-push only when appropriate.
4. Review logs for unauthorized use.
5. Enable secret scanning.

## Portfolio confidentiality statement

Add this to each repository:

> This project uses synthetic, public, or materially transformed data. It does not contain confidential employer data, proprietary code, credentials, or internal documentation.
