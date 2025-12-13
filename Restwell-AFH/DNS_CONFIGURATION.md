# DNS Configuration for restwellafh.site on Vercel

This guide provides the DNS records you need to configure at your domain registrar to connect `restwellafh.site` to your Vercel deployment.

## Option 1: Using CNAME Records (Recommended)

This is the easiest method and works for most domain registrars.

### DNS Records to Add:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 3600 (or Auto) |
| A | @ | `76.223.126.88` | 3600 (or Auto) |
| CNAME | www | `cname.vercel-dns.com.` | 3600 (or Auto) |

**Note:** The A record IPs above are Vercel's standard IPs. However, **Vercel will provide you with specific IP addresses** when you add the domain in your Vercel dashboard. Always use the IPs provided by Vercel for your specific project.

### Step-by-Step Instructions:

1. **Get Your Vercel DNS Configuration:**
   - Log into your Vercel dashboard
   - Go to your project → Settings → Domains
   - Click "Add Domain" and enter `restwellafh.site`
   - Vercel will show you the exact DNS records to add

2. **Configure at Your Domain Registrar:**
   - Log into your domain registrar (where you bought restwellafh.site)
   - Navigate to DNS Management / DNS Settings
   - Add the records shown above

3. **Wait for DNS Propagation:**
   - DNS changes can take 24-48 hours to propagate globally
   - Usually works within 1-2 hours
   - You can check propagation status at: https://dnschecker.org

## Option 2: Using Only A Records

If your registrar doesn't support CNAME for the root domain (@), use these A records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 3600 |
| A | @ | `76.223.126.88` | 3600 |
| A | www | `76.76.21.21` | 3600 |
| A | www | `76.223.126.88` | 3600 |

**Important:** Replace the IP addresses above with the ones Vercel provides in your dashboard.

## Common Domain Registrars

### Namecheap
1. Go to Domain List → Manage → Advanced DNS
2. Add A Record: Host `@`, Value `76.76.21.21`, TTL Automatic
3. Add A Record: Host `@`, Value `76.223.126.88`, TTL Automatic
4. Add CNAME Record: Host `www`, Value `cname.vercel-dns.com.`, TTL Automatic

### GoDaddy
1. Go to My Products → DNS → Manage DNS
2. Add A Record: Type `A`, Name `@`, Value `76.76.21.21`, TTL 1 Hour
3. Add A Record: Type `A`, Name `@`, Value `76.223.126.88`, TTL 1 Hour
4. Add CNAME Record: Type `CNAME`, Name `www`, Value `cname.vercel-dns.com.`, TTL 1 Hour

### Google Domains / Squarespace Domains
1. Go to DNS Settings
2. Add A Record: Name `@`, IPv4 Address `76.76.21.21`
3. Add A Record: Name `@`, IPv4 Address `76.223.126.88`
4. Add CNAME Record: Name `www`, Canonical Name `cname.vercel-dns.com.`

### Cloudflare
1. Go to DNS → Records
2. Add A Record: Name `@`, IPv4 Address `76.76.21.21`, Proxy status: DNS only
3. Add A Record: Name `@`, IPv4 Address `76.223.126.88`, Proxy status: DNS only
4. Add CNAME Record: Name `www`, Target `cname.vercel-dns.com.`, Proxy status: DNS only

**Note:** If using Cloudflare, make sure to set Proxy status to "DNS only" (gray cloud) initially. You can enable the proxy (orange cloud) after Vercel confirms the domain is working.

## Verification

After adding the DNS records:

1. **Check in Vercel Dashboard:**
   - Vercel will automatically detect when DNS is configured correctly
   - Status will change from "Pending" to "Valid Configuration"
   - SSL certificate will be automatically provisioned

2. **Test Your Domain:**
   - Visit `https://restwellafh.site` (wait a few minutes after DNS propagation)
   - Visit `https://www.restwellafh.site`
   - Both should load your website

3. **Verify SSL:**
   - Vercel automatically provisions SSL certificates
   - Your site should load with HTTPS automatically

## Troubleshooting

### DNS Not Propagating
- Wait 24-48 hours for full propagation
- Clear your browser cache and DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)
- Check DNS propagation: https://dnschecker.org

### Domain Not Connecting
- Verify you used the exact IP addresses from Vercel dashboard
- Make sure there are no conflicting DNS records
- Check that your domain registrar isn't blocking the changes

### SSL Certificate Issues
- Vercel automatically provisions SSL after DNS is configured
- Wait 5-10 minutes after DNS is verified
- If issues persist, contact Vercel support

## Important Notes

⚠️ **Always use the DNS records provided by Vercel in your dashboard** - they may be project-specific and different from the examples above.

⚠️ **Don't delete existing DNS records** unless you're sure they're not needed for email or other services.

⚠️ **Keep your domain registrar account secure** - DNS changes can affect your entire website.

