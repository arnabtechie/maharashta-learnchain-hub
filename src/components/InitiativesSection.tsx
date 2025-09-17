import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";

// Import generated icons
import diplomasIcon from "@/assets/icon-diplomas.jpg";
import teacherLicenseIcon from "@/assets/icon-teacher-license.jpg";
import scholarshipsIcon from "@/assets/icon-scholarships.jpg";
import assessmentsIcon from "@/assets/icon-assessments.jpg";
import microcredentialsIcon from "@/assets/icon-microcredentials.jpg";
import feedbackIcon from "@/assets/icon-feedback.jpg";
import hackathonsIcon from "@/assets/icon-hackathons.jpg";

const InitiativesSection = () => {
  const initiatives = [
    {
      id: "diplomas",
      title: "Verifiable Diplomas & Transcripts",
      description: "Tamper-proof issuance and instant verification of diplomas, transcripts, and test scores, simplifying student mobility and employer trust.",
      icon: diplomasIcon,
      benefits: ["Instant verification", "Fraud prevention", "Global recognition"],
      cta: "Verify Credentials",
      stakeholders: ["Students", "Employers", "Universities"]
    },
    {
      id: "teacher-licensing",
      title: "Teacher Licensure & Continuing Education",
      description: "Secure portal for teacher license issuance, endorsements, and continuing education credits with verification and revocation features.",
      icon: teacherLicenseIcon,
      benefits: ["Digital licensing", "Credit tracking", "Professional development"],
      cta: "Teacher Portal",
      stakeholders: ["Teachers", "Administrators", "Training Institutes"]
    },
    {
      id: "scholarships",
      title: "Scholarships & Grants Disbursement",
      description: "Transparent and auditable scholarship system using blockchain to prevent fraud and ensure merit-based distribution.",
      icon: scholarshipsIcon,
      benefits: ["Transparent distribution", "Merit-based selection", "Fraud prevention"],
      cta: "Apply for Scholarships",
      stakeholders: ["Students", "Government", "Donors"]
    },
    {
      id: "assessments",
      title: "Assessment Integrity & Exam Logistics",
      description: "Secure exam paper management, anti-tampering mechanisms, and digital proctoring logs for fair examinations.",
      icon: assessmentsIcon,
      benefits: ["Secure exam management", "Anti-tampering", "Fair assessment"],
      cta: "Exam Portal",
      stakeholders: ["Students", "Examiners", "Institutions"]
    },
    {
      id: "microcredentials",
      title: "Micro-Credentials & Skills Badges",
      description: "Digital badge ecosystem enabling students to earn and share verifiable skills badges recognized across Maharashtra and beyond.",
      icon: microcredentialsIcon,
      benefits: ["Skill verification", "Industry recognition", "Career advancement"],
      cta: "Explore Badges",
      stakeholders: ["Students", "Employers", "Training Centers"]
    },
    {
      id: "feedback",
      title: "Student-Teacher Feedback System",
      description: "Secure and trustworthy feedback platform with immutable audit trails to ensure transparency and improve teaching quality.",
      icon: feedbackIcon,
      benefits: ["Anonymous feedback", "Quality improvement", "Transparent evaluation"],
      cta: "Feedback Portal",
      stakeholders: ["Students", "Teachers", "Administrators"]
    },
    {
      id: "hackathons",
      title: "State-Level Hackathons",
      description: "Blockchain-managed participation, submission tracking, and winner certification for state-sponsored innovation competitions.",
      icon: hackathonsIcon,
      benefits: ["Fair competition", "Innovation tracking", "Verified achievements"],
      cta: "Join Hackathon",
      stakeholders: ["Students", "Developers", "Industry"]
    }
  ];

  return (
    <section id="initiatives" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
            Blockchain Initiatives
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Transforming Education Through
            <span className="block bg-gradient-to-r from-saffron to-maharashtra-green bg-clip-text text-transparent">
              Blockchain Innovation
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how Maharashtra is pioneering the future of education with secure, transparent, 
            and innovative blockchain-powered solutions for every stakeholder in the education ecosystem.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <Card 
              key={initiative.id} 
              className="group hover:shadow-card hover:border-saffron/20 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src={initiative.icon} 
                    alt={`${initiative.title} icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold group-hover:text-saffron transition-colors">
                    {initiative.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {initiative.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {initiative.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-saffron rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stakeholders */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">For:</h4>
                  <div className="flex flex-wrap gap-1">
                    {initiative.stakeholders.map((stakeholder, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md"
                      >
                        {stakeholder}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="gov-outline" 
                  className="w-full group-hover:bg-saffron group-hover:text-white group-hover:border-saffron"
                >
                  {initiative.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to Experience the Future of Education?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of students, teachers, and institutions already benefiting from our blockchain-powered education platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="maharashtra" size="lg">
                Get Started Today
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="ghost" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;