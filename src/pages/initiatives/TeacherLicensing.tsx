import { ArrowLeft, Award, BookOpen, Shield, Clock, Users, GraduationCap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TeacherLicensing = () => {
  const features = [
    {
      icon: Award,
      title: "Digital License Issuance",
      description: "Secure blockchain-based teacher licenses with instant verification capabilities"
    },
    {
      icon: BookOpen,
      title: "Continuing Education Tracking",
      description: "Automated tracking of professional development credits and certifications"
    },
    {
      icon: Shield,
      title: "Secure Endorsements",
      description: "Tamper-proof subject endorsements and specialization credentials"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant license status updates and renewal notifications"
    }
  ];

  const portalFeatures = [
    "Digital license management",
    "Professional development tracking",
    "Endorsement applications",
    "Renewal notifications",
    "Compliance monitoring",
    "Career progression tracking"
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
            <span className="text-foreground">Teacher Licensure & Continuing Education</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-maharashtra-green/10 to-saffron/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-maharashtra-green/10 rounded-full text-sm font-medium text-maharashtra-green mb-6">
                <GraduationCap className="w-4 h-4 mr-2" />
                Professional Development Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Teacher Licensure &
                <span className="block bg-gradient-to-r from-maharashtra-green to-saffron bg-clip-text text-transparent">
                  Continuing Education
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Comprehensive digital platform for teacher license management, professional development tracking, and career advancement in Maharashtra's education system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Access Teacher Portal
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="gov-outline" size="lg">
                  Apply for License
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
                Complete License Management
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our blockchain-powered platform streamlines every aspect of teacher licensing and professional development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-maharashtra-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-maharashtra-green" />
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

        {/* Portal Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  Comprehensive Teacher Portal
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Everything teachers need to manage their professional credentials, track development, and advance their careers in one secure platform.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {portalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-maharashtra-green rounded-full mr-3"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button variant="maharashtra" size="lg">
                    Explore Portal Features
                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-maharashtra-green/5 to-saffron/5 border-maharashtra-green/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2 text-maharashtra-green" />
                      License Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Digital license issuance</li>
                      <li>• Automatic renewal reminders</li>
                      <li>• Status verification</li>
                      <li>• Endorsement tracking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-saffron/5 to-maharashtra-green/5 border-saffron/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-saffron" />
                      Professional Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• CE credit tracking</li>
                      <li>• Training recommendations</li>
                      <li>• Certification management</li>
                      <li>• Career pathway guidance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-saffron mb-2">50,000+</div>
                <div className="text-muted-foreground">Licensed Teachers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-maharashtra-green mb-2">98%</div>
                <div className="text-muted-foreground">License Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-saffron mb-2">24/7</div>
                <div className="text-muted-foreground">Portal Access</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-maharashtra-green mb-2">100%</div>
                <div className="text-muted-foreground">Secure Verification</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-gradient-to-r from-maharashtra-green to-saffron rounded-2xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Advance Your Teaching Career
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join the digital transformation of education with secure, blockchain-powered professional credentials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-maharashtra-green hover:bg-white/90">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Support
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

export default TeacherLicensing;