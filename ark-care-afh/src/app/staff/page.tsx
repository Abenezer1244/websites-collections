export default function Staff() {
  const team = [
    {
      name: "Sarah Johnson",
      title: "Owner & Care Coordinator",
      qualifications: ["RN License", "10+ years AFH experience", "CPR/First Aid Certified"],
      bio: "Sarah founded Ark Care AFH with a passion for providing quality, compassionate care in a home setting. Her nursing background and dedication to excellence ensure the highest standards of care."
    },
    {
      name: "Michelle Chen",
      title: "Lead Caregiver",
      qualifications: ["HCA Certification", "Dementia Care Specialist", "CPR/First Aid"],
      bio: "Michelle brings 8 years of professional caregiving experience and a genuine commitment to supporting residents with compassion and respect. She specializes in person-centered care."
    },
    {
      name: "David Martinez",
      title: "Caregiver",
      qualifications: ["HCA Certification", "Physical Therapy Assistant", "CPR/First Aid"],
      bio: "David is dedicated to helping residents maintain independence and mobility. His background in rehabilitation support enables him to provide specialized care for residents with mobility needs."
    },
    {
      name: "Jennifer Williams",
      title: "Caregiver",
      qualifications: ["HCA Certification", "Activity Coordinator", "CPR/First Aid"],
      bio: "Jennifer creates meaningful activities and social opportunities for residents. Her enthusiasm for engaging activities helps residents enjoy enriching experiences at our home."
    },
    {
      name: "Robert Taylor",
      title: "Caregiver",
      qualifications: ["HCA Certification", "Nutrition Support", "CPR/First Aid"],
      bio: "Robert ensures residents receive nutritious, delicious meals prepared with care. His background in nutrition helps support the health and wellness of all residents."
    },
    {
      name: "Lisa Anderson",
      title: "Administrative Coordinator",
      qualifications: ["Healthcare Administration Certification", "HIPAA Training"],
      bio: "Lisa manages administrative operations and ensures smooth communication with families and healthcare providers. She maintains detailed records and coordinates care planning."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            Meet our dedicated, qualified staff committed to providing compassionate care
          </p>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Our Care Team
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Our team consists of trained, certified professionals who are passionate about providing quality care. Every staff member is committed to treating residents with dignity, respect, and compassion.
          </p>
          <p className="text-lg text-muted-foreground">
            All staff members maintain current CPR/First Aid certification and participate in ongoing professional development to ensure they provide the highest standard of care.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Avatar Placeholder */}
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-primary/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.title}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>

                  {/* Qualifications */}
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-foreground mb-3">
                      QUALIFICATIONS
                    </p>
                    <ul className="space-y-2">
                      {member.qualifications.map((qual, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <svg
                            className="w-4 h-4 text-primary flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Development */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Professional Development
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Ongoing Training
                </h3>
                <p className="text-muted-foreground">
                  All staff participate in regular training on care best practices, resident rights, safety protocols, and specialized care techniques.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Certification Maintenance
                </h3>
                <p className="text-muted-foreground">
                  We ensure all required certifications are kept current, including CPR/First Aid, health certifications, and specialized care training.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Continuing Education
                </h3>
                <p className="text-muted-foreground">
                  Our team stays current with latest practices in geriatric care, dementia support, and person-centered care methodologies through seminars and workshops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
