# Ready to Sail Functional Audit

Date: 2026-07-20
Scope: current frontend at `/Users/julioespinoza/Documents/New project 3/ready-to-sail`
Method: static audit of visible menus, buttons, prompts, chat inputs and wired actions in `index.html` and `assets/js/app.js`

## Legend

- `OK`: the control performs a real in-app navigation, state change, view change or scripted conversation update.
- `SIM`: the control is wired, but only simulates the action with a toast or local mock response.
- `GAP`: the control is misleading, partial, or below the expected level for a “100% functional” demo.

## Executive Summary

- No dead visible controls were found. Every visible `data-view`, `data-nav`, `data-action`, `data-send` and `data-prompt` in the main app has an event path wired in [index.html](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/index.html:23) and [app.js](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/assets/js/app.js:2356).
- The main navigation shell is operational. Sidebar routes, contextual links, hidden child views like `matching`, `crew-profile` and `vessel-detail`, and Ready AI prompt sending all work.
- The largest remaining gap is not broken buttons, but shallow workflows. A large group of controls still stop at toast simulation instead of completing a richer flow. This is concentrated in filters, exports, admin actions, report generation, upload/compliance actions and several mission-level commands in [app.js](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/assets/js/app.js:2367).
- Search is functional but limited. It is a curated keyword router, not a full system search, in [app.js](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/assets/js/app.js:2288).
- Some operational dates shown in active screens are already in the past relative to Monday, July 20, 2026, which creates realism issues in a “live” demo. Examples appear in [index.html](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/index.html:359) and [app.js](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/assets/js/app.js:939).

## Findings

1. `P1` Many user-facing actions are simulation-only rather than end-to-end demo flows. The handler is present, but the result is just a toast for filters, exports, upload, report generation, admin controls, voice input, Ready AI settings, and several workflow CTAs. See [app.js](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/assets/js/app.js:2367).

2. `P1` Search is partial and hand-mapped rather than global. It only resolves a curated set of profiles, vessels and topic keywords, so a user can easily conclude the app is incomplete. See [app.js](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/assets/js/app.js:2288).

3. `P2` The top-right “Profile” control routes to `Administration`, not to a user profile or account surface, which is semantically confusing even though the click works. See [index.html](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/index.html:106).

4. `P2` Active mission windows include past dates while the shell looks live and current. This can undermine trust during a demo unless explicitly framed as a historical snapshot. See [index.html](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/index.html:359), [app.js](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/assets/js/app.js:939), and [app.js](/Users/julioespinoza/Documents/New%20project%203/ready-to-sail/assets/js/app.js:954).

## Menu-by-Menu Audit

### Global Shell

- Sidebar `Command Center` button: opens `command-center` view. `OK`
- Sidebar `Crew Changes` button: opens `crew-changes` list view. `OK`
- Sidebar `Planning` button: opens `planning` dynamic view. `OK`
- Sidebar `Crew` button: opens `crew` list view. `OK`
- Sidebar `Documents` button: opens `documents` view. `OK`
- Sidebar `Compliance` button: opens `compliance` dynamic view. `OK`
- Sidebar `Fleet` button: opens `fleet` view. `OK`
- Sidebar `Routes & Ports` button: opens `routes-ports` view. `OK`
- Sidebar `Alerts` button: opens `alerts` dynamic view. `OK`
- Sidebar `Ready AI` button: opens full chat workspace view. `OK`
- Sidebar `Reports` button: opens `reports` view. `OK`
- Sidebar `Administration` button: opens `admin` dynamic view. `OK`
- Sidebar footer gear button: routes to `admin`. `OK`
- Topbar notifications button: routes to `alerts`. `OK`
- Topbar help button: shows a help-center toast only. `SIM`
- Topbar profile button: routes to `admin`, not a real profile surface. `GAP`
- Topbar search input: resolves known profiles, vessels and keyword categories on Enter. `OK`
- Topbar search input as full app search: not global, not fuzzy, not comprehensive. `GAP`

### Command Center

- `Review all alerts`: routes to `alerts`. `OK`
- `Resolve now`: routes to hidden `matching` detail flow. `OK`
- `Review application`: opens Ferdi profile. `OK`
- `View fleet details`: routes to `fleet`. `OK`
- `Full operations schedule`: routes to `routes-ports`. `OK`
- `Detailed risk analysis`: routes to `compliance`. `OK`
- KPI cards in hero: presentational only, not clickable controls. `N/A`

### Crew Changes

- `Filter`: toast only. `SIM`
- `Export`: toast only. `SIM`
- `Open` on MT Scot Bremen: opens matching mission `bremen`. `OK`
- `View details` on MT Scot Stuttgart: opens matching mission `stuttgart`. `OK`
- `Resolve` on MT Scot Frankfurt: opens Rüştü profile instead of a mission resolution workflow. `GAP`
- `Review` on MT Scot Hamburg: opens Cenk profile. `OK`
- `View all 162 rotations`: routes to `planning`. `OK`
- Flight logistics cards: informational only. `N/A`
- Visa readiness meters: informational only. `N/A`

### Planning

- `Filter`: toast only. `SIM`
- `Export`: toast only. `SIM`
- `Open Matching` on open missions: opens matching for `bremen` or `stuttgart`. `OK`
- `Queued` on future missions: opens vessel context and toast, not a dedicated planning detail. `SIM`
- `Review` under Embarkation Timeline: opens active mission. `OK`
- `Resolve` under Embarkation Timeline: opens active mission. `OK`
- `Queue` under Embarkation Timeline: opens vessel context and toast. `SIM`

### Crew

- `Filter`: toast only. `SIM`
- `Export`: toast only. `SIM`
- `Review` buttons for Merih, Nihat, Emre, Cenk, Rüştü, Arda, Ozan, Kerem, Ferdi: open the corresponding profile view. `OK`
- `Assign` on Hakan: opens Bremen matching mission. `OK`
- `View original crew roster sample`: toast only. `SIM`

### Crew Profile

- `Back to Crew`: routes to `crew`. `OK`
- `Assign to Mission`: opens the mission mapped from the current profile vessel. `OK`
- `Ready Check`: toast only. `SIM`
- `Upload Document`: toast only. `SIM`
- `Compliance Report`: toast only. `SIM`
- Tabs `Overview`, `Certificates`, `Documents`, `Travel`, `Compliance`, `Assignments`, `Timeline`, `Notes`: all switch content inside the profile view. `OK`
- Document cards under `Documents`: open mock document toast. `SIM`
- `Why? Deep Dive Analysis`: sends a Ready AI prompt into the thread. `OK`

### Documents

- `Export`: toast only. `SIM`
- `Bulk Validate`: toast only. `SIM`
- `View` document: mock open toast. `SIM`
- `Renew` document: toast only. `SIM`
- `Request` document: toast only. `SIM`
- `Resolve` pending visa: opens Stuttgart matching mission. `OK`
- `Review` endorsement: toast only. `SIM`
- `View all operational documents`: toast only. `SIM`

### Fleet

- `Filter`: toast only. `SIM`
- `Export`: toast only. `SIM`
- All vessel row actions `View`, `Review`, `Intervene`: open vessel-detail for the specific vessel. `OK`
- Risk/watch cards below the table: informational only. `N/A`

### Vessel Detail

- `Back to Fleet`: routes to `fleet`. `OK`
- `Open Crew Change` for vessels with active mission detail: opens matching. `OK`
- `Open Planning Context` for vessels without active matching detail: opens vessel detail again with queue toast via shared handler. This is wired, but not a dedicated planning drill-down. `SIM`
- `Open Profile` from crew-on-board rows: opens linked crew profile. `OK`

### Routes & Ports

- `Filter`: toast only. `SIM`
- `Export`: toast only. `SIM`
- `View` on Bremen and Dresden: opens vessel detail. `OK`
- `Review` on Stuttgart: opens matching mission. `OK`
- `Intervene` on Frankfurt: opens vessel detail. `OK`
- Route strip and watch cards: informational only. `N/A`

### Alerts

- `Back to Dashboard`: routes to `command-center`. `OK`
- `Renew`: toast only. `SIM`
- `Schedule`: toast only. `SIM`
- `Find`: opens Stuttgart matching mission. `OK`

### Compliance

- Tabs `Rules`, `Exceptions`, `Audit Log`: switch subviews correctly. `OK`
- `New Rule`: toast only. `SIM`
- Rule toggle pills: mutate local state and rerender the table. `OK`
- `Approve` exception: toast only. `SIM`
- `Decline` exception: toast only. `SIM`

### Reports

- `Filter`: toast only. `SIM`
- `New Report`: toast only. `SIM`
- `Open` report buttons: toast only. `SIM`
- `Review` on compliance exceptions row: routes to `documents`. `OK`
- `Generate` report: toast only. `SIM`
- `View` vessel readiness matrix: opens Bremen vessel detail. `OK`
- Quick export library cards `Daily Brief`, `Weekly Summary`, `Compliance`, `Crew Plan`, `Doc Forecast`: toast only. `SIM`

### Ready AI

- Main chat send button: appends user prompt and scripted system answer. `OK`
- Main chat Enter key: same as send. `OK`
- Suggested question buttons: inject predefined prompts and answers. `OK`
- Quick actions `Open Crew Changes`, `Review Documents`, `Generate Brief`, `Inspect Fleet Risk`: navigate to the target module. `OK`
- `Generate Brief` naming is slightly misleading because it navigates to `reports`, it does not generate a brief directly. `GAP`
- Voice input buttons: toast only. `SIM`
- Ready AI settings button in right rail: toast only. `SIM`
- Side copilot send button: appends scripted conversation. `OK`
- Side copilot Enter key: appends scripted conversation. `OK`

### Administration

- `Manage` notification routing: toast only. `SIM`
- `Review` user access: toast only. `SIM`
- `Review` export policy: toast only. `SIM`
- Audit trail cards: informational only. `N/A`

## Verdict by Functional Level

- Navigation shell: `Pass`
- Cross-linking between modules: `Pass`
- Dynamic detail views: `Pass`
- Scripted Ready AI interaction: `Pass`
- Filters/exports/admin/report utilities: `Simulation only`
- Document operations: `Simulation only`
- Mission completion actions like finalization and assignment pack: `Simulation only`
- Search breadth: `Partial`

## Recommended Next Steps

1. Replace toast-only actions with visible demo flows, starting with `Finalize Assignment`, `Upload Document`, `Bulk Validate`, `New Report`, `Export` and admin actions.
2. Convert `show-future-mission` into a real planning detail panel instead of reusing vessel detail with a toast.
3. Expand search beyond hand-mapped names and keywords.
4. Decide whether the app is a historical snapshot or a live workspace, then normalize the dates accordingly.
