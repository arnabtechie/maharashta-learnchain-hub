import { ArrowLeft, CheckCircle, Shield, Globe, Clock, Users, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VerifiableDiplomas = () => {
  const features = [
    {
      icon: Shield,
      title: "Tamper-Proof Security",
      description: "Cryptographic hashing ensures documents cannot be altered or forged"
    },
    {
      icon: Clock,
      title: "Instant Verification",
      description: "Real-time verification in seconds, reducing processing time from days to minutes"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Internationally accepted format for seamless student mobility"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Access",
      description: "Secure portals for students, employers, and educational institutions"
    }
  ];

  const benefits = [
    "Eliminates document fraud and forgery",
    "Reduces verification time by 99%",
    "Cuts administrative costs significantly",
    "Enables seamless international transfers",
    "Provides permanent, accessible records",
    "Ensures data privacy and security"
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
            <span className="text-foreground">Verifiable Diplomas & Transcripts</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-saffron/10 to-maharashtra-green/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-saffron/10 rounded-full text-sm font-medium text-saffron mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Blockchain-Powered Credentials
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Verifiable Diplomas &
                <span className="block bg-gradient-to-r from-saffron to-maharashtra-green bg-clip-text text-transparent">
                  Digital Transcripts
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Revolutionary blockchain technology ensuring tamper-proof, instantly verifiable academic credentials that empower students and build employer trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Get Your Digital Diploma
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="gov-outline" size="lg">
                  Verify Credentials
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
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our blockchain-powered system transforms traditional paper certificates into secure, verifiable digital credentials.
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

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  Key Benefits for All Stakeholders
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our blockchain-based credential system delivers unprecedented value to students, employers, and educational institutions alike.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-maharashtra-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-saffron/5 to-maharashtra-green/5 border-saffron/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-saffron" />
                      For Students
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Instant access to verified credentials</li>
                      <li>• Seamless job applications</li>
                      <li>• International mobility support</li>
                      <li>• Permanent digital records</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-maharashtra-green/5 to-saffron/5 border-maharashtra-green/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-maharashtra-green" />
                      For Employers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Instant credential verification</li>
                      <li>• Zero fraud risk</li>
                      <li>• Reduced hiring time</li>
                      <li>• Trusted candidate profiles</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-gradient-to-r from-saffron to-maharashtra-green rounded-2xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Ready to Go Digital?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of students and institutions already using our secure blockchain credential system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-saffron hover:bg-white/90">
                  Request Digital Diploma
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Learn More
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

export default VerifiableDiplomas;