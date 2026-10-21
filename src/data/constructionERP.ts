import type { PortfolioMode } from "@/hooks/use-portfolio-mode";

export const constructionCopy = {
  bro: {
    eyebrow: "Siyaratech · Founding Engineer · Flagship work",
    intro: "A construction ERP where the hard part is making every moving piece agree. I built across budgets, materials, billing, people, and the interfaces connecting them.",
    featured: "The full stack. The whole site.",
    summary: "Built connected workflows for costing, procurement, billing, attendance, and site operations — with the backend rules and frontend detail to make them work together.",
    cta: "Inside the ERP build",
    scope: "A lot more than a dashboard.",
    scopeIntro: "The work went from business rules and integrations to the small interface details people use every day.",
    decisions: "The details that made the difference.",
    outcome: "What the work made possible",
  },
  munna: {
    eyebrow: "Siyaratech · Founding Engineer · Apna bada kaam",
    intro: "Construction site pe sab connected hai, bhai — budget, maal, billing aur log. ERP mein bhi in sabko joda, backend ke hisaab se lekar frontend ke har form tak.",
    featured: "Site ka poora hisaab, ek saath.",
    summary: "Budget se maal ki kharidaari, billing se attendance tak — connected workflows banaye. Backend ke rules aur frontend ka experience, dono pe kaam kiya.",
    cta: "ERP ki poori kahaani",
    scope: "Sirf screen nahi, poora kaam sambhala.",
    scopeIntro: "Har module ka apna hisaab tha. Apun ne unke beech ka connection bhi banaya, taaki site pe kaam aasaan ho.",
    decisions: "Chhoti details, zaroori farak.",
    outcome: "Is kaam se kya aasaan hua",
  },
  professional: {
    eyebrow: "Siyaratech · Founding Engineer · Featured engineering work",
    intro: "End-to-end engineering across a construction ERP, connecting cost planning, procurement, billing, workforce operations, and quality workflows through coordinated backend and frontend development.",
    featured: "Engineering connected construction operations.",
    summary: "Developed and evolved ERP workflows across budgeting, procurement, inventory, billing, attendance, and site operations, combining domain logic, integrations, and frontend implementation.",
    cta: "View ERP case study",
    scope: "Engineering scope across the ERP.",
    scopeIntro: "Selected contributions span business logic, data synchronization, device integration, workflow controls, and interface consistency.",
    decisions: "Key engineering decisions.",
    outcome: "Outcome",
  },
} satisfies Record<PortfolioMode, Record<string, string>>;

export const erpModules = [
  {
    id: "cost-planning", title: "Rate analysis, budgets & overheads", label: "Cost planning",
    summary: "Connected bill-of-quantities pricing, budgets, and indirect costs while preserving the rates entered by project teams.",
    contributions: [
      "Separated rate-analysis reference values from operator-entered internal rates, so a rate refresh preserves manual overrides.",
      "Restructured overhead pools and linked overhead purposes to budget line items, with project-wise allocation based on direct costs.",
      "Updated allocation calculations to work independently of the calendar month and included miscellaneous costs in direct-cost totals.",
    ],
    result: "A connected costing model that keeps reference rates, project decisions, and overhead allocation distinct.",
  },
  {
    id: "procurement", title: "Procurement & material inventory", label: "Materials",
    summary: "Built the path from a site material request to stock issue, approval, and procurement when inventory is short.",
    contributions: [
      "Developed a miscellaneous-material library with task-level requests, approvals, purchasing, and rate-analysis connections.",
      "Implemented first-in, first-out (FIFO) stock issue while respecting requested brands or variants; unconstrained requests use the oldest available stock.",
      "Connected stock shortages to draft purchase requests, with shortage visibility for storekeepers and purchase-order receipt tracking on dashboards.",
      "Added a purchase-order-based receipt workflow for materials arriving before a formal goods receipt note is available.",
    ],
    result: "Site demand, available stock, and purchasing now connect through explicit operational workflows.",
  },
  {
    id: "billing", title: "Client & subcontractor billing", label: "Billing",
    summary: "Aligned billable quantities and cost information with the way teams measure and certify work on site.",
    contributions: [
      "Connected client billing quantities with task-level bill-of-quantities (BOQ) data and surfaced direct and indirect cost totals.",
      "Implemented unit conversion for subcontractor billing when subcontractor and client BOQ units differ, using item-level conversion factors.",
      "Updated planning views to show remaining BOQ quantities instead of the original total, and exposed budget references in the work breakdown structure.",
    ],
    result: "Billing and planning views reflect outstanding quantities and the units used by different project participants.",
  },
  {
    id: "attendance", title: "Biometric attendance & device sync", label: "Workforce",
    summary: "Reworked attendance-device integration across the synchronization service, HR workflows, and web interface.",
    contributions: [
      "Replaced the legacy bridge dependency with polling-based device communication and added multiple check-in/check-out and multi-device support.",
      "Implemented face-template synchronization, photo-based enrollment distribution, device-specific deletion, and sync-status visibility.",
      "Addressed concurrent backup/restore writes using atomic write-and-rename behavior, alongside connection and polling fixes.",
    ],
    result: "HR can manage enrollment and synchronization across registered devices through a connected workflow.",
  },
  {
    id: "assets", title: "Asset rental & inter-project transfers", label: "Assets",
    summary: "Kept machinery rental costs aligned with the project actually using an asset.",
    contributions: [
      "Developed linked close-out and opening rental records when equipment moves between project sites.",
      "Coordinated transfer behavior across budgets, asset operations, and the frontend to prevent rental double-counting during transfers.",
      "Brought active rentals and machinery logs into a consolidated operational dashboard.",
    ],
    result: "A transfer has an explicit cost handover between the sending and receiving projects.",
  },
  {
    id: "labour", title: "Labour & machinery usage controls", label: "Site operations",
    summary: "Added document lifecycle controls to daily resource records used by site and billing teams.",
    contributions: [
      "Implemented submit, cancel, and amend workflows for daily labour and machinery usage in Frappe and the frontend.",
      "Locked submitted records against accidental edits and connected labour challan details with task views.",
      "Refined resource-usage forms, dashboard actions, timestamps, and project context across related modules.",
    ],
    result: "Resource usage follows a controlled lifecycle as records move into reconciliation and billing.",
  },
  {
    id: "quality", title: "Quality inspections & approvals", label: "Quality",
    summary: "Modernized inspection forms, signature capture, templates, and reviewer workflows.",
    contributions: [
      "Updated RFI workflows with client-signature tables, template selection, department fields, and internal-signature population.",
      "Refined execution fields and quality-inspection report print formats.",
      "Extended approval templates to include client approvers and aligned the frontend review flow with backend changes.",
    ],
    result: "Inspection and approval records carry clearer participant, signature, and template context.",
  },
  {
    id: "frontend", title: "Frontend engineering & design consistency", label: "Product experience",
    summary: "Made a broad ERP interface more consistent while delivering the screens behind operational changes.",
    contributions: [
      "Standardized typography weights, border radii, shadow depth, and header/sidebar alignment through shared design tokens.",
      "Improved table column selection, readable names in place of internal IDs, form defaults, and workspace-specific filters.",
      "Shipped coordinated frontend and backend changes across costing, procurement, HR, and quality workflows.",
    ],
    result: "Related workflows share a clearer visual language and reflect the same business rules across the product.",
  },
];

export const erpDecisions = [
  { title: "A rate refresh should preserve a project decision.", before: "Rate-analysis values and manually entered rates can change for different reasons.", decision: "Kept reference rates and internal rates as separate values, and updated synchronization to preserve overrides.", effect: "Teams can refresh the pricing reference without losing an intentional internal rate." },
  { title: "Equipment moves. Its cost needs to move too.", before: "A transfer can leave both projects accruing rent during the handover.", decision: "Linked the source rental close-out and destination rental opening as one transfer operation.", effect: "The rental record follows the asset, with a clear boundary between project costs." },
  { title: "Stock rules need to handle real requests.", before: "A request may specify a brand, or it may simply need the material.", decision: "Applied FIFO within the required brand or variant when specified, and across available stock otherwise.", effect: "Stock allocation respects the request while retaining oldest-stock-first behavior." },
];
