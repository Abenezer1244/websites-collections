# Websites Collections

A monorepo containing hundreds of **independent, self-contained websites**. Each website is completely distinct with no shared files or dependencies between them.

## Repository Structure

This is a **monorepo** where:
- Each website has its own folder/directory
- Every website is **completely independent** - no shared code, assets, or configuration
- Websites do **not interact** with one another
- Each website is treated as a separate, standalone project
- All logic, styling, and functionality is isolated to that specific website

## Key Principle: Website Independence

**CRITICAL**: When working on ANY task:
1. **Only modify files** belonging to the specific website being worked on
2. **Never touch files** from other websites
3. **No cross-website dependencies** - each website stands alone
4. **Each website owns** all its own code and assets
5. **Changes are isolated** to that specific website's directory

## Working on a Website

When given a task:
1. Identify which website you're working on
2. Navigate to that website's directory
3. Make changes **only within that website's folder**
4. Do not modify any other website's files
5. Commit with reference to the specific website

## Example Structure
```
websites-collections/
├── website-1/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
├── website-2/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
├── website-3/
│   └── ... (completely separate files)
└── ...hundreds more websites
```

Each folder is **completely independent** from all others.

## Git Configuration

- **Remote**: `git@github.com:Abenezer1244/websites-collections.git`
- **Automatic Push**: Enabled via post-commit hook
- **Branch**: `main`

## Workflow Guidelines

See `CLAUDE.md` for the complete workflow process including:
- Planning tasks
- Creating todo lists
- Keeping changes simple
- Avoiding bugs through thorough debugging
- The "NO LAZINESS" principle

---

## Business Context: AFH Digital Solutions

**What is this?**

This monorepo builds websites for **Adult Family Homes (AFHs)** under the AFH Digital Solutions business model - a specialized web design agency targeting AFHs in Washington State.

**The Problem We Solve:**
- 90-95% of AFHs in Washington State lack professional websites
- Limits their ability to attract private-pay residents
- Forces them to rely on directory listings only
- Results in lower occupancy and lower rates

**The Solution:**
Affordable, AFH-specific website packages:
- **Essential**: $1,495 (5-page website) + $99/month maintenance
- **Premium**: $2,995 (8-page website with SEO, tours) + $199/month maintenance
- **Complete**: $4,995 (full digital marketing - Google Ads, social media) + $399/month

**Key Business Metrics:**
- Target market: 2,800-5,300+ licensed AFHs in Washington State
- Market gap: Only 5-10% currently have websites
- Value prop: Facilities WITH websites charge 15-25% premium rates
- ROI: One additional private-pay resident ($20K-$50K/year) pays for website 10x over

**Current Projects:**
- `ark-care afh/` - First production website (demo/portfolio piece for Premium package)

**Documentation:**
- Full business plan: `afh_web_services_business_plan.pdf` (Desktop - November 2025)
- Workflow process: `CLAUDE.md` (root directory)

---