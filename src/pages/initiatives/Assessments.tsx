import { ArrowLeft, FileCheck, Shield, Eye, Clock, Users, CheckCircle, ExternalLink, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Assessments = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Exam Papers",
      description: "Cryptographically secured exam papers with anti-tampering mechanisms"
    },
    {
      icon: Eye,
      title: "Digital Proctoring",
      description: "AI-powered proctoring with blockchain-recorded audit trails"
    },
    {
      icon: FileCheck,
      title: "Exam Integrity",
      description: "End-to-end verification of examination processes and results"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Live monitoring and instant alerts for any irregularities"
    }
  ];

  const examTypes = [
    {
      title: "State Board Examinations",
      description: "SSC, HSC, and other state board exams",
      students: "5,00,000+",
      security: "Maximum"
    },
    {
      title: "Competitive Exams",
      description: "Entrance exams for colleges and universities",
      students: "2,50,000+",
      security: "High"
    },
    {
      title: "Professional Certifications",
      description: "Teacher and professional licensing exams",
      students: "75,000+",
      security: "High"
    },
    {
      title: "Internal Assessments",
      description: "School and college internal examinations",
      students: "10,00,000+",
      security: "Standard"
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
            <span className="text-foreground">Assessment Integrity & Exam Logistics</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-maharashtra-green/10 to-saffron/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-maharashtra-green/10 rounded-full text-sm font-medium text-maharashtra-green mb-6">
                <FileCheck className="w-4 h-4 mr-2" />
                Secure Examination Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Assessment Integrity &
                <span className="block bg-gradient-to-r from-maharashtra-green to-saffron bg-clip-text text-transparent">
                  Exam Logistics
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Revolutionary blockchain-powered examination system ensuring complete fairness, security, and transparency in all assessments across Maharashtra.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Access Exam Portal
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="gov-outline" size="lg">
                  Exam Schedule
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
                Uncompromising Exam Security
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our blockchain-powered platform ensures every examination is conducted with the highest level of integrity and security.
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

        {/* Exam Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Examination Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive security coverage across all types of examinations in the Maharashtra education system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {examTypes.map((exam, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{exam.title}</CardTitle>
                        <CardDescription>{exam.description}</CardDescription>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`${exam.security === 'Maximum' ? 'text-red-600 border-red-600/20' : 
                          exam.security === 'High' ? 'text-orange-600 border-orange-600/20' : 
                          'text-green-600 border-green-600/20'}`}
                      >
                        {exam.security} Security
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Users className="w-4 h-4 text-maharashtra-green mr-2" />
                      {exam.students} Students Annually
                    </div>
                    <Button variant="gov-outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  Multi-Layer Security Architecture
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our comprehensive security framework ensures examination integrity at every level, from question paper creation to result publication.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Blockchain-secured question paper distribution",
                    "AI-powered anomaly detection during exams",
                    "Immutable digital proctoring logs",
                    "Real-time integrity monitoring",
                    "Cryptographic result verification",
                    "Automated fraud detection algorithms"
                  ].map((measure, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-maharashtra-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 dark:from-red-950/20 dark:to-red-900/20 dark:border-red-800/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-700 dark:text-red-300">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Pre-Exam Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-red-600 dark:text-red-300">
                      <li>• Encrypted question paper storage</li>
                      <li>• Secure distribution protocols</li>
                      <li>• Access control verification</li>
                      <li>• Tamper-evident sealing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 dark:from-orange-950/20 dark:to-orange-900/20 dark:border-orange-800/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-700 dark:text-orange-300">
                      <Eye className="w-5 h-5 mr-2" />
                      During Exam Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-orange-600 dark:text-orange-300">
                      <li>• Live proctoring monitoring</li>
                      <li>• Behavioral analysis</li>
                      <li>• Environmental scanning</li>
                      <li>• Real-time alert system</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-gradient-to-r from-maharashtra-green to-saffron">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Examination Statistics
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Maintaining the highest standards of examination integrity across Maharashtra.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">15L+</div>
                <div className="opacity-90">Students Examined</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="opacity-90">Fraud Prevention</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Security Monitoring</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="opacity-90">Digital Integrity</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center shadow-card">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Experience Fair Examinations
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join millions of students who trust our blockchain-secured examination system for fair and transparent assessments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Register for Exam
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="ghost" size="lg">
                  View Exam Guidelines
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

export default Assessments;