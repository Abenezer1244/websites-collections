export default function FAQ() {
  const faqs = [
    {
      category: "Admission & Application",
      questions: [
        {
          q: "What is the admission process?",
          a: "The admission process begins with a tour of our facility and a consultation with our team. During this visit, we discuss your care needs, answer your questions, and determine if Ark Care AFH is the right fit. If both parties agree to move forward, we complete paperwork and schedule a start date."
        },
        {
          q: "What information do I need to provide for admission?",
          a: "We require medical history, current medications, emergency contacts, insurance information, and healthcare provider details. We maintain all information securely according to HIPAA regulations."
        },
        {
          q: "Is there a waiting list?",
          a: "Our capacity is limited to provide personalized care. Please contact us to inquire about current availability and to schedule a tour."
        },
        {
          q: "Can I visit before making a decision?",
          a: "Absolutely! We encourage potential residents and families to tour our facility and meet our staff. Tours can be scheduled by calling or completing our contact form."
        }
      ]
    },
    {
      category: "Services & Care",
      questions: [
        {
          q: "What services are included in the care plan?",
          a: "Services include 24/7 professional care, medication management, personal care, meal preparation, laundry, housekeeping, activities, and transportation. We create customized care plans based on individual needs."
        },
        {
          q: "Can you accommodate special dietary needs?",
          a: "Yes, we accommodate various dietary restrictions and preferences. Our meals are prepared with attention to nutrition, taste, and individual requirements."
        },
        {
          q: "What happens if my medical needs change?",
          a: "We regularly review and adjust care plans as needed. If your needs change, we work with you and your healthcare providers to modify your care plan accordingly."
        },
        {
          q: "Do you provide medication management?",
          a: "Yes, trained staff members administer medications as prescribed and maintain detailed health records. We coordinate with your healthcare providers to ensure proper medication management."
        }
      ]
    },
    {
      category: "Family Involvement",
      questions: [
        {
          q: "Can family members visit anytime?",
          a: "We have flexible visiting hours to accommodate family schedules. We encourage regular family involvement and communication. Please discuss visiting preferences during the admission process."
        },
        {
          q: "How do I communicate with staff about my loved one?",
          a: "We maintain open communication through regular updates, care plan meetings, and available staff during business hours. You can reach us by phone for urgent concerns."
        },
        {
          q: "Are there activities for family visits?",
          a: "Yes! Families are welcome to participate in activities, meals, and outings with residents. We encourage family involvement in the resident's life."
        },
        {
          q: "What if I have concerns about the care?",
          a: "We take all concerns seriously. Please speak with our staff or owner directly. We're committed to addressing concerns promptly and working together for the best outcome."
        }
      ]
    },
    {
      category: "Cost & Payment",
      questions: [
        {
          q: "What are the costs?",
          a: "Costs vary based on the level of care and services provided. Please contact us for detailed pricing information and to discuss payment options."
        },
        {
          q: "Do you accept insurance or government programs?",
          a: "We work with various payment methods including private pay, insurance, and certain government programs. Please contact us to discuss your specific situation."
        },
        {
          q: "Is financial assistance available?",
          a: "We recommend discussing financial options during the admission process. We can provide information about resources and programs that may be available."
        }
      ]
    },
    {
      category: "Safety & Compliance",
      questions: [
        {
          q: "What safety measures are in place?",
          a: "We maintain a secure, clean environment with fire safety equipment, emergency protocols, grab bars, and accessible design. Staff is trained in emergency response and first aid."
        },
        {
          q: "Are you licensed and regulated?",
          a: "Yes, we comply with all state and local regulations for adult family homes. Our owner holds necessary licenses and certifications."
        },
        {
          q: "How is privacy and confidentiality maintained?",
          a: "We strictly comply with HIPAA regulations. All medical information and personal details are kept confidential and secure."
        },
        {
          q: "What is your policy on medication storage?",
          a: "All medications are securely stored in a locked cabinet and administered only as prescribed. We maintain detailed medication records."
        }
      ]
    },
    {
      category: "Activities & Lifestyle",
      questions: [
        {
          q: "What kinds of activities are available?",
          a: "We offer a variety of activities including games, crafts, outdoor outings, movies, reading, and social gatherings. Activities are tailored to individual interests and abilities."
        },
        {
          q: "Can residents maintain hobbies and interests?",
          a: "Absolutely! We encourage residents to pursue their interests and hobbies. Our staff supports residents in activities that bring them joy and purpose."
        },
        {
          q: "Are residents able to leave the facility for outings?",
          a: "Yes, we support residents going on community outings. We provide transportation assistance for medical appointments and recreational activities."
        }
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            Find answers to common questions about Ark Care AFH
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                  {section.category}
                </h2>

                <div className="space-y-4">
                  {section.questions.map((item, qIdx) => (
                    <details
                      key={qIdx}
                      className="bg-card rounded-lg border border-border p-6 hover:shadow-sm transition-shadow"
                    >
                      <summary className="cursor-pointer font-semibold text-foreground flex justify-between items-center">
                        <span>{item.q}</span>
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0 ml-2 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </summary>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're here to help! Contact us anytime to discuss your specific needs or to schedule a tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/gallery"
              className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
