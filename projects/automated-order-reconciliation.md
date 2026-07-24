# Automated Order Reconciliation

## Portfolio objective

Demonstrate ETL, SQL controls, exception classification, operational reporting, and automation.

## Business problem

Order and financial systems contain timing differences, duplicates, missing records, and value mismatches. Manual reconciliation is slow and inconsistent.

## Proposed workflow

1. Ingest source extracts.
2. Standardize keys, dates, currencies, and status fields.
3. Match records using deterministic rules.
4. Apply tolerance rules.
5. Classify exceptions.
6. Route unresolved items for review.
7. Produce control totals and audit output.

## Example exception categories

- Missing in source A
- Missing in source B
- Amount mismatch
- Quantity mismatch
- Status mismatch
- Duplicate transaction
- Timing difference
- Invalid reference key

## Suggested implementation

- SQL Server or PostgreSQL
- Stored procedures or dbt models
- Python or SSIS orchestration
- Power BI reconciliation dashboard
