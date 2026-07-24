# GitHub Setup and Publishing Guide

## 1. Create the GitHub profile repository

Create a new public repository whose name exactly matches your GitHub username:

```text
pareshmaheshwari910/pareshmaheshwari910
```

Copy `profile/README.md` into the root of that repository as `README.md`.

## 2. Create the portfolio website repository

Recommended repository name:

```text
github-portfolio
```

Copy this starter project into that repository.

## 3. Replace placeholders

Search the entire repository for:

```text
pareshmaheshwari910
https://www.linkedin.com/in/paresh-maheshwari-26395112b/
paresh.15392@gmail.com
assets/Paresh_Maheshwari_Senior_Data_BI_Analyst_Resume copy.pdf
```

Replace each value before publishing.

## 4. Enable GitHub Pages

This starter uses the `/docs` publishing pattern.

In the repository:

1. Open **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch.
5. Select the `/docs` folder.
6. Save.

The website should appear at:

```text
https://pareshmaheshwari910.github.io/github-portfolio/
```

## 5. Preview locally

From the repository root:

```bash
python3 -m http.server 8000 --directory docs
```

Open:

```text
http://localhost:8000
```

## 6. Publish changes

```bash
git init
git add .
git commit -m "Create GitHub portfolio starter"
git branch -M main
git remote add origin https://github.com/pareshmaheshwari910/github-portfolio.git
git push -u origin main
```

## 7. Pin the strongest repositories

Pin up to six repositories on your GitHub profile. Recommended order:

1. AI Job Application Agent
2. Marketplace Pricing Decomposition
3. Seller Adoption and Cohort Analytics
4. Executive KPI and WBR Framework
5. Healthcare Data Quality Analytics
6. Automated Order Reconciliation

## 8. Add visual proof

Each repository should eventually include:

- A hero screenshot
- Architecture or data-flow diagram
- Dashboard screenshots
- Sample output
- Reproducible setup
- Tests or validation evidence
