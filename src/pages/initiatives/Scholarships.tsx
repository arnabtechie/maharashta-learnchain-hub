import { ArrowLeft, DollarSign, Users, Shield, Zap, CheckCircle, ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Scholarships = () => {
  const features = [
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "Blockchain technology eliminates fraudulent applications and ensures merit-based selection"
    },
    {
      icon: TrendingUp,
      title: "Transparent Distribution",
      description: "Complete transparency in fund allocation and distribution processes"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Automated smart contracts enable faster scholarship disbursement"
    },
    {
      icon: Users,
      title: "Inclusive Access",
      description: "Equal opportunity platform accessible to students from all backgrounds"
    }
  ];

  const scholarshipTypes = [
    {
      title: "Merit-Based Scholarships",
      description: "For academically excellent students",
      amount: "₹50,000 - ₹2,00,000",
      eligibility: "Top 10% academic performance"
    },
    {
      title: "Need-Based Financial Aid",
      description: "For economically disadvantaged students",
      amount: "₹25,000 - ₹1,50,000", 
      eligibility: "Family income < ₹3 lakhs"
    },
    {
      title: "Research Grants",
      description: "For innovative research projects",
      amount: "₹1,00,000 - ₹5,00,000",
      eligibility: "Approved research proposal"
    },
    {
      title: "Technical Skills Development",
      description: "For vocational and technical training",
      amount: "₹15,000 - ₹75,000",
      eligibility: "Enrolled in technical courses"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Scholarships & Grants Disbursement</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-saffron/10 to-maharashtra-green/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-saffron/10 rounded-full text-sm font-medium text-saffron mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Transparent Funding Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Scholarships &
                <span className="block bg-gradient-to-r from-saffron to-maharashtra-green bg-clip-text text-transparent">
                  Grants Disbursement
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Blockchain-powered scholarship system ensuring transparent, fraud-free, and merit-based distribution of educational funding to deserving students.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Apply for Scholarship
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="gov-outline" size="lg">
                  Track Application
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Revolutionary Scholarship System
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our blockchain technology ensures every rupee reaches the right student through a completely transparent and auditable process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-saffron" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scholarship Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Available Scholarships
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive funding opportunities designed to support students at every level of their educational journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {scholarshipTypes.map((scholarship, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{scholarship.title}</CardTitle>
                        <CardDescription>{scholarship.description}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-saffron border-saffron/20">
                        {scholarship.amount}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <CheckCircle className="w-4 h-4 text-maharashtra-green mr-2" />
                      {scholarship.eligibility}
                    </div>
                    <Button variant="gov-outline" className="w-full">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Application Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent, and secure scholarship application process powered by blockchain technology.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Submit Application", desc: "Complete online form with required documents" },
                { step: "02", title: "Blockchain Verification", desc: "Automated verification of credentials and eligibility" },
                { step: "03", title: "Merit Assessment", desc: "AI-powered evaluation based on transparent criteria" },
                { step: "04", title: "Fund Disbursement", desc: "Direct transfer to verified beneficiary accounts" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-saffron to-maharashtra-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-gradient-to-r from-saffron to-maharashtra-green">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Our Impact
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Transforming lives through transparent and accessible educational funding.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">₹50+ Cr</div>
                <div className="opacity-90">Scholarships Disbursed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25,000+</div>
                <div className="opacity-90">Students Benefited</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="opacity-90">Fraud Prevention</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">72 hrs</div>
                <div className="opacity-90">Average Processing Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center shadow-card">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Ready to Apply?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't let financial constraints limit your educational dreams. Apply for scholarships today and join thousands of successful students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Start Application
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="ghost" size="lg">
                  View Eligibility Criteria
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Scholarships;