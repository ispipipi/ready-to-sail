# Ready to Sail Functional Closure Plan

Date: Monday, July 20, 2026
Base audit: `/Users/julioespinoza/Documents/New project 3/ready-to-sail/FUNCTIONAL_AUDIT_2026-07-20.md`

## Objective

Close the gap between a navigable demo and a functionally convincing product prototype, preserving the approved UI while converting the highest-value simulated interactions into visible, stateful workflows.

## Priority Order

### Priority 1

- Make `Crew Matching` actions stateful.
- Make `Compliance` approvals and rule changes stateful.
- Make `Alerts` resolution actions remove or downgrade the underlying issue.
- Make `Administration` show a live audit trail fed by user actions.

Acceptance criteria:

- Selecting a candidate changes visible mission state.
- Finalizing an assignment changes visible mission state.
- Approving or declining an exception changes visible exception state.
- Resolving an alert updates the alert queue.
- At least one shared audit trail reflects those changes across modules.

### Priority 2

- Make `Documents` actions stateful.
- Make `Reports` actions create visible generated artifacts or history entries.
- Make `Upload Document`, `Bulk Validate`, `Generate Compliance Report`, and export actions leave visible evidence in the interface.

Acceptance criteria:

- A document action changes document status, queue state, or visible history.
- A report action adds a generated report entry or updates an existing one.
- The user can tell what changed without relying on a transient toast.

### Priority 3

- Expand search beyond hand-mapped routing.
- Normalize semantic mismatches in shell actions.
- Improve queued mission handling in planning and vessel views.

Acceptance criteria:

- Search covers the main visible dataset consistently.
- “Profile”, “Generate Brief”, and similar controls match user expectation.
- Future or queued missions open a dedicated context rather than only a message.

### Priority 4

- Decide whether the demo is a live operational view or a historical scenario.
- Normalize dates, time labels and freshness signals accordingly.

Acceptance criteria:

- No visible contradiction between the shell date and operational sample dates.
- Historical mode or live mode is explicit and consistent.

## Current Execution Block

This turn starts Priority 1:

- Live mission state in `Crew Matching`
- Live exception state in `Compliance`
- Live resolution state in `Alerts`
- Shared activity feed in `Administration`

## Next Recommended Block

After validating Priority 1, continue with:

1. `Documents`
2. `Reports`
3. Search
4. Date normalization
