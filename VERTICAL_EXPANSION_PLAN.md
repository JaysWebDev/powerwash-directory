# Vertical Expansion Plan

## Overview
The powerwash-directory codebase is designed as a **vertical template**. The entire site identity is controlled through `config/site.ts`, making expansion to new home service verticals straightforward.

## Expansion Strategy

### Phase 1: High-Value Verticals (Q1 2027)
1. **Gutter Cleaning** - `find.guttercare.com`
2. **Lawn Care** - `find.lawnservice.pro`
3. **Tree Service** - `find.treeexperts.pro`

### Phase 2: Specialty Services (Q2 2027)
4. **Pool Cleaning** - `find.poolclean.pro`
5. **Window Cleaning** - `find.windowwash.com`
6. **HVAC Cleaning** - `find.hvacclean.pro`

### Phase 3: Expansion Services (Q3 2027)
7. **Roofing** - `find.roofers.pro`
8. **Landscaping** - `find.landscape.pro`
9. **Handyman** - `find.handyman.services`

## Technical Implementation

### Per-Vertical Setup Process:
1. **Copy codebase** to new directory: `/home/j/_DEV/{vertical}-directory/`
2. **Edit config/site.ts**:
   - Brand name, colors, icon
   - Vertical slug, services, FAQs
   - SEO templates, descriptions
3. **Replace hero image**: `/public/hero-{vertical}.jpg`
4. **Set up Supabase**: New project or shared DB with `vertical_slug` column
5. **Deploy to Vercel**: New project with domain
6. **Configure scraper**: New YAML in `personal_scraper_lab/configs/`

### Shared Infrastructure:
- **Supabase**: Extend current schema with `vertical_slug` column
- **Scraper**: Add new vertical configs to scraper lab
- **AdSense**: Same account across all verticals (consolidated revenue)

## Domain Strategy
- **Pattern**: `find.{service}.{tld}`
- **Examples**: `find.guttercare.com`, `find.lawnservice.pro`
- **SEO benefit**: Service-specific domains rank better than subdomains

## Revenue Model
- **AdSense**: Same account, higher inventory = higher rates
- **Lead routing**: Quote forms feed same lead management system
- **Premium listings**: Featured placement across all verticals

## Scraper Configurations

### Gutter Cleaning Example:
```yaml
# configs/gutter.yaml
scraper:
  search_terms:
    - "gutter cleaning"
    - "gutter repair"
  pages_per_city: 10

output:
  table: companies
  conflict_col: slug
  csv_backup: true

vertical:
  slug: "gutter-cleaning"

cities:
  # Same 305 cities as powerwash
```

## Database Schema Updates
```sql
-- Add vertical support to existing schema
ALTER TABLE companies ADD COLUMN vertical_slug VARCHAR(50) DEFAULT 'power-washing';
ALTER TABLE leads ADD COLUMN vertical_slug VARCHAR(50);
CREATE INDEX idx_companies_vertical ON companies(vertical_slug);
```

## Next Steps (Immediate)
1. **Validate market demand**: Research search volume for target verticals
2. **Domain acquisition**: Secure domains for Phase 1 verticals
3. **Scraper expansion**: Add gutter cleaning config as proof of concept
4. **Database planning**: Design multi-vertical schema approach

## Success Metrics
- **Traffic goal**: 10x current traffic across all verticals by EOY 2027
- **Revenue target**: $5k/month AdSense + lead generation by Q4 2027
- **Coverage**: 3-5 verticals live by Q3 2027

## Risk Mitigation
- **Content dilution**: Each vertical maintains separate domain/brand
- **Resource management**: Shared scraper/DB infrastructure scales efficiently
- **SEO independence**: Separate domains prevent cross-vertical penalties