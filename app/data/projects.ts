export type Project = {
  date: string;
  title: string;
  description: string;
  tags: string[];
  sector: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    date: "Q3 2023",
    title: "Industrial Automation Audit",
    description:
      "Comprehensive end-to-end quality audit for a precision robotics line, resulting in a 15% reduction in defect rates.",
    tags: ["ISO 9001", "Automation"],
    sector: "Manufacturing",
    outcome: "15% defect reduction",
  },
  {
    date: "Q1 2024",
    title: "SOP Modernization Project",
    description:
      "Restructuring of standard operating procedures for a mid-size assembly plant, achieving 100% compliance during external inspection.",
    tags: ["Compliance", "RCA"],
    sector: "Assembly",
    outcome: "100% compliance",
  },
  {
    date: "Ongoing",
    title: "Supply Chain Verification",
    description:
      "Development of a vendor scoring system to ensure raw material consistency and reduce production bottlenecks by 12%.",
    tags: ["Six Sigma", "Vendors"],
    sector: "Supply Chain",
    outcome: "12% bottleneck reduction",
  },
  {
    date: "Q4 2022",
    title: "ERP Migration Validation",
    description:
      "Led UAT and regression testing for a multi-module ERP rollout, validating 2,400+ test cases with zero critical post-go-live defects.",
    tags: ["UAT", "SQL", "JIRA"],
    sector: "Enterprise Software",
    outcome: "Zero critical defects",
  },
  {
    date: "Q2 2023",
    title: "Cleanroom Compliance Review",
    description:
      "Conducted ISO 14644-aligned environmental monitoring audits for a medical device production facility.",
    tags: ["ISO 14644", "Auditing"],
    sector: "Medical Devices",
    outcome: "Audit-ready certification",
  },
  {
    date: "Q3 2024",
    title: "Automated Test Framework",
    description:
      "Built a Selenium-based regression framework integrated with CI/CD, cutting manual regression cycles from 5 days to 8 hours.",
    tags: ["Selenium", "CI/CD", "PyTest"],
    sector: "FinTech",
    outcome: "85% cycle time saved",
  },
];
