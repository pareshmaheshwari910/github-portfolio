# Marketplace Pricing Decomposition

## Portfolio objective

Show advanced SQL/Python analysis, weighted-average decomposition, business interpretation, and executive communication.

## Business problem

A marketplace observes a change in average shipping price or cost. Leadership needs to know whether the change was driven by:

- Actual rate changes within comparable segments
- A change in shipment mix across segments
- Interaction effects or data-quality issues

## Analytical method

Define a segment using dimensions such as carrier, service level, weight band, zone, and seller cohort.

For each segment:

```text
Rate Effect = (Current Rate - Prior Rate) × Prior Mix
Mix Effect  = (Current Mix - Prior Mix) × Prior Rate
Interaction = (Current Rate - Prior Rate) × (Current Mix - Prior Mix)
```

## Suggested outputs

- Executive summary waterfall
- Contribution by carrier and service level
- Segment-level driver table
- Volume and data-quality checks
- Sensitivity analysis
- Recommended commercial or operational actions

## Suggested tools

- SQL for aggregation and comparable-segment logic
- Python for decomposition and visualization
- Tableau or Power BI for an executive dashboard
