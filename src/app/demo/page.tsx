import { Metadata } from 'next'
import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { CrystallineHero } from '@/components/CrystallineHero'
import { Card } from '@/components/Card'
import { ServiceCard } from '@/components/ServiceCard'
import { TeamMemberCard } from '@/components/TeamMemberCard'
import { ResourceCard } from '@/components/ResourceCard'
import { EventCard } from '@/components/EventCard'
import { PostPreview } from '@/components/PostPreview'
import { CallToAction } from '@/components/CallToAction'
import { ContactForm } from '@/components/ContactForm'
import { NavigationBreadcrumbs } from '@/components/NavigationBreadcrumbs'
import { Pagination } from '@/components/Pagination'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'
import { Target, Rocket, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Component Demo - BTS Website',
  description: 'A showcase of all available components for the BTS corporate website',
}

export default function DemoPage() {
  // Sample data for components
  const sampleServices = [
    {
      title: 'Strategic Consulting',
      description: 'Expert guidance for business transformation and growth strategies.',
      icon: Target,
      href: '/services/strategic-consulting',
    },
    {
      title: 'Digital Innovation',
      description: 'Cutting-edge technology solutions to drive your business forward.',
      icon: Rocket,
      href: '/services/digital-innovation',
    },
    {
      title: 'Process Optimisation',
      description: 'Streamline operations and improve efficiency across your organisation.',
      icon: Zap,
      href: '/services/process-optimisation',
    },
  ]

  const sampleTeamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years of experience in strategic business development.',
      photo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'150\' viewBox=\'0 0 150 150\'%3E%3Crect width=\'150\' height=\'150\' fill=\'%236b7280\'/%3E%3Ctext x=\'75\' y=\'75\' font-family=\'Arial, sans-serif\' font-size=\'16\' fill=\'white\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3EPhoto%3C/text%3E%3C/svg%3E',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Technology expert passionate about digital transformation and innovation.',
      photo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'150\' viewBox=\'0 0 150 150\'%3E%3Crect width=\'150\' height=\'150\' fill=\'%236b7280\'/%3E%3Ctext x=\'75\' y=\'75\' font-family=\'Arial, sans-serif\' font-size=\'16\' fill=\'white\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3EPhoto%3C/text%3E%3C/svg%3E',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Operations',
      bio: 'Operations specialist focused on process improvement and team development.',
      photo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'150\' viewBox=\'0 0 150 150\'%3E%3Crect width=\'150\' height=\'150\' fill=\'%236b7280\'/%3E%3Ctext x=\'75\' y=\'75\' font-family=\'Arial, sans-serif\' font-size=\'16\' fill=\'white\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3EPhoto%3C/text%3E%3C/svg%3E',
    },
  ]

  const sampleResources = [
    {
      title: 'Annual Industry Report 2024',
      description: 'Comprehensive analysis of market trends and business opportunities.',
      fileType: 'PDF',
      fileSize: '2.4 MB',
      downloadUrl: '#',
    },
    {
      title: 'Digital Transformation Guide',
      description: 'Step-by-step framework for successful digital transformation initiatives.',
      fileType: 'PDF',
      fileSize: '1.8 MB',
      downloadUrl: '#',
    },
    {
      title: 'Case Study: Retail Innovation',
      description: 'How we helped a major retailer increase efficiency by 40%.',
      fileType: 'PDF',
      fileSize: '1.2 MB',
      downloadUrl: '#',
    },
  ]

  const sampleEvents = [
    {
      title: 'Future of Business Summit',
      date: '2024-03-15',
      location: 'Sydney Convention Centre',
      description: 'Join industry leaders for insights into emerging business trends.',
      registerUrl: '#',
    },
    {
      title: 'Digital Innovation Workshop',
      date: '2024-03-22',
      location: 'Melbourne Tech Hub',
      description: 'Hands-on workshop exploring cutting-edge digital solutions.',
      registerUrl: '#',
    },
    {
      title: 'Leadership Excellence Forum',
      date: '2024-04-05',
      location: 'Brisbane Business Centre',
      description: 'Develop your leadership skills with industry experts.',
      registerUrl: '#',
    },
  ]

  const samplePosts = [
    {
      title: 'The Future of Corporate Strategy in 2024',
      excerpt: 'Explore the key trends and strategies that will shape business success in the coming year.',
      date: '2024-01-15',
      tags: ['Strategy', 'Trends', 'Leadership'],
      slug: 'future-corporate-strategy-2024',
    },
    {
      title: 'Building Resilient Teams in Uncertain Times',
      excerpt: 'Learn how to create and maintain high-performing teams that can adapt to any challenge.',
      date: '2024-01-10',
      tags: ['Team Building', 'Leadership', 'Resilience'],
      slug: 'building-resilient-teams',
    },
    {
      title: 'Digital Transformation: Lessons from Success Stories',
      excerpt: 'Real-world examples of companies that successfully navigated digital transformation.',
      date: '2024-01-05',
      tags: ['Digital', 'Transformation', 'Case Studies'],
      slug: 'digital-transformation-success-stories',
    },
  ]

  const sampleMarkdown = `
# Sample Markdown Content

This demonstrates the **MarkdownRenderer** component with various formatting options.

## Features

- **Bold text** and *italic text*
- [Links](https://example.com)
- Lists and sublists
- Code blocks and inline \`code\`

## Code Example

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

> This is a blockquote demonstrating the component's capabilities.
`

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Demo', href: '/demo' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-16">
          <Container>
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Component Demo Gallery
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Explore all available components for the BTS corporate website
            </p>
          </Container>
        </section>

        {/* Hero Component */}
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Hero Component
            </h2>
            <Hero
              title="Transform Your Business"
              subtitle="Innovative solutions for the modern enterprise"
              ctaLabel="Get Started"
              ctaHref="/contact"
              imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Crect width='1200' height='600' fill='%233b82f6'/%3E%3Ctext x='600' y='300' font-family='Arial, sans-serif' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EHero Background%3C/text%3E%3C/svg%3E"
              imageAlt="Business transformation background"
            />
          </Container>
        </section>

        {/* Crystalline Hero */}
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Crystalline Hero Component
            </h2>
          </Container>
          <CrystallineHero />
        </section>

        {/* Service Cards */}
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Service Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </Container>
        </section>

        {/* Team Member Cards */}
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Team Member Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleTeamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </Container>
        </section>

        {/* Resource Cards */}
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Resource Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleResources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </Container>
        </section>

        {/* Event Cards */}
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Event Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </Container>
        </section>

        {/* Post Previews */}
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Post Previews
            </h2>
            <div className="space-y-6">
              {samplePosts.map((post, index) => (
                <PostPreview key={index} {...post} />
              ))}
            </div>
          </Container>
        </section>

        {/* Base Card Component */}
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Base Card Component
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-xl font-semibold mb-2">Sample Card 1</h3>
                <p className="text-gray-600">
                  This demonstrates the base Card component with custom content.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold mb-2">Sample Card 2</h3>
                <p className="text-gray-600">
                  Another example of the versatile Card component.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold mb-2">Sample Card 3</h3>
                <p className="text-gray-600">
                  The Card component provides consistent styling and spacing.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Navigation Breadcrumbs */}
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Navigation Breadcrumbs
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <NavigationBreadcrumbs items={breadcrumbItems} />
            </div>
          </Container>
        </section>

        {/* Pagination */}
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pagination Component
            </h2>
            <div className="flex justify-center">
              <Pagination
                currentPage={3}
                totalPages={10}
                onPageChange={(page) => console.log('Page changed to:', page)}
              />
            </div>
          </Container>
        </section>

        {/* Markdown Renderer */}
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Markdown Renderer
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <MarkdownRenderer content={sampleMarkdown} />
            </div>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Call to Action Component
            </h2>
            <CallToAction
              title="Ready to Get Started?"
              description="Join hundreds of businesses that have transformed their operations with our solutions."
              buttonLabel="Contact Us Today"
              buttonUrl="/contact"
            />
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact Form
            </h2>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </Container>
        </section>
      </main>
  )
}
