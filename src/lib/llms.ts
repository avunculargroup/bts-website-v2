import { faqData } from '@/lib/faq';
import { SITE_URL, founders, keyPages, services, site } from '@/lib/site';

/**
 * llms.txt (https://llmstxt.org): a Markdown summary of the site written for
 * AI assistants, so they can describe and cite BTS accurately.
 */

function header() {
  return `# ${site.name}

> ${site.summary}

- Location: ${site.address.streetAddress}, ${site.address.addressLocality} ${site.address.addressRegion} ${site.address.postalCode}, Australia. Workshops are run in Melbourne; interstate on request.
- Audience: Australian professionals, SMEs, public companies, accountants, treasury teams, and curious investors aged 35+.
- Contact: ${site.email} · Book a call: ${site.bookingUrl}
- Operated by ${site.parentOrganization.name} (ABN ${site.parentOrganization.abn}).
- Material on this site is general information only, not personal financial advice.
`;
}

function servicesSection() {
  return `## Services

${services
  .map(
    s => `### ${s.name}

${s.description}

${s.features.map(f => `- ${f}`).join('\n')}

More: ${s.url}`
  )
  .join('\n\n')}
`;
}

function foundersSection() {
  return `## Directors

${founders.map(f => `- **${f.name}**, ${f.jobTitle}. ${f.bio} (${f.linkedin})`).join('\n')}
`;
}

function pagesSection() {
  return `## Key pages

${keyPages.map(p => `- [${p.title}](${SITE_URL}${p.path}): ${p.description}`).join('\n')}
`;
}

export function llmsTxt() {
  return `${header()}
${pagesSection()}
## Optional

- [Full content for LLMs](${SITE_URL}/llms-full.txt): services, directors and the complete Bitcoin FAQ in one file.
- [Privacy Policy](${SITE_URL}/privacy)
- [Terms of Service](${SITE_URL}/terms)
`;
}

export function llmsFullTxt() {
  return `${header()}
${servicesSection()}
${foundersSection()}
## Mission

Make Bitcoin education accessible, practical and grounded in reality. BTS believes knowledge builds trust, risk must be understood, empowerment beats hype (no fast fortunes, no product pushing), Bitcoin sits alongside traditional assets in a diversified strategy, and trust is earned locally and in person.

${pagesSection()}
## Bitcoin FAQ

Source: ${SITE_URL}/resources#faqs

${faqData.map(f => `### ${f.question}\n\n${f.answer}`).join('\n\n')}
`;
}
