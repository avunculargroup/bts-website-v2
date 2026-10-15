import { generateVideoSchema } from '@/lib/structured-data';
import { ORGANIZATION_ID, services } from '@/lib/site';

export function HomePageStructuredData() {
  const heroVideoSchema = generateVideoSchema({
    name: "Bitcoin Treasury Solutions - Structured Learning For Professionals",
    description: "Learn about Bitcoin Treasury Solutions and our structured Bitcoin learning programs for Australia's professionals.",
    videoId: "KLC-0dgBjEA",
  });

  // Service structured data, linked to the Organization node in the root layout
  const serviceSchemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.serviceType,
    "name": service.name,
    "description": service.description,
    "provider": { "@id": ORGANIZATION_ID },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.name} topics`,
      "itemListElement": service.features.map((feature) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": feature }
      }))
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": service.url
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(heroVideoSchema),
        }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
