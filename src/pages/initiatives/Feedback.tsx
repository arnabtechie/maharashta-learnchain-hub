import { ArrowLeft, MessageSquare, Shield, Users, TrendingUp, CheckCircle, ExternalLink, Star, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Feedback = () => {
  const features = [
    {
      icon: Shield,
      title: "Anonymous & Secure",
      description: "Blockchain-protected anonymous feedback ensuring honest evaluations"
    },
    {
      icon: BarChart3,
      title: "Immutable Audit Trails",
      description: "Permanent records of all feedback with tamper-proof blockchain storage"
    },
    {
      icon: TrendingUp,
      title: "Quality Improvement",
      description: "Data-driven insights to enhance teaching quality and student experience"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Platform",
      description: "Feedback exchange between students, teachers, and administrators"
    }
  ];

  const feedbackTypes = [
    {
      title: "Course Evaluation",
      description: "Student feedback on course content, delivery, and effectiveness",
      participants: "Students → Teachers",
      frequency: "End of Semester"
    },
    {
      title: "Teaching Assessment",
      description: "Evaluation of teaching methods, clarity, and engagement",
      participants: "Students → Teachers",
      frequency: "Continuous"
    },
    {
      title: "Peer Review",
      description: "Professional feedback between teaching colleagues",
      participants: "Teachers → Teachers",
      frequency: "Annual"
    },
    {
      title: "Administrative Feedback",
      description: "Institutional feedback on policies and procedures",
      participants: "Teachers/Students → Admin",
      frequency: "Quarterly"
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
            <span className="text-foreground">Student-Teacher Feedback System</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-maharashtra-green/10 to-saffron/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-maharashtra-green/10 rounded-full text-sm font-medium text-maharashtra-green mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                Transparent Communication Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Student-Teacher
                <span className="block bg-gradient-to-r from-maharashtra-green to-saffron bg-clip-text text-transparent">
                  Feedback System
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Secure, anonymous, and blockchain-protected feedback platform fostering honest communication and continuous improvement in Maharashtra's education system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Access Feedback Portal
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="gov-outline" size="lg">
                  View Analytics
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
                Trusted Feedback Platform
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building trust and transparency in education through secure, blockchain-backed feedback mechanisms.
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

        {/* Feedback Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Feedback Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive feedback system covering all aspects of the educational experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {feedbackTypes.map((feedback, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{feedback.title}</CardTitle>
                    <CardDescription className="mb-4">{feedback.description}</CardDescription>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-maharashtra-green border-maharashtra-green/20">
                        {feedback.participants}
                      </Badge>
                      <Badge variant="outline">
                        {feedback.frequency}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="gov-outline" className="w-full">
                      Provide Feedback
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  Privacy & Security First
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our blockchain-powered platform ensures complete anonymity while maintaining the integrity and authenticity of feedback data.
                </p>
                
                <div className="space-y-4">
                  {[
                    "End-to-end encrypted submissions",
                    "Anonymous identity protection",
                    "Immutable feedback records", 
                    "Zero-knowledge verification",
                    "GDPR compliant data handling",
                    "Transparent audit processes"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-maharashtra-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 dark:from-blue-950/20 dark:to-blue-900/20 dark:border-blue-800/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                      <Shield className="w-5 h-5 mr-2" />
                      Anonymous Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-300">
                      <li>• Identity obfuscation protocols</li>
                      <li>• Zero-trace submission system</li>
                      <li>• Confidential data encryption</li>
                      <li>• Secure feedback aggregation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 dark:from-green-950/20 dark:to-green-900/20 dark:border-green-800/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700 dark:text-green-300">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Data Integrity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-green-600 dark:text-green-300">
                      <li>• Blockchain immutability</li>
                      <li>• Tamper-proof storage</li>
                      <li>• Verified audit trails</li>
                      <li>• Real-time validation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Improvement Cycle */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Continuous Improvement Cycle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                How feedback drives meaningful improvements in teaching quality and student outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  step: "01", 
                  title: "Collect Feedback", 
                  desc: "Secure anonymous collection from students and peers",
                  icon: MessageSquare
                },
                { 
                  step: "02", 
                  title: "Analyze Patterns", 
                  desc: "AI-powered analysis identifies improvement areas",
                  icon: BarChart3
                },
                { 
                  step: "03", 
                  title: "Develop Plans", 
                  desc: "Collaborative action plans for enhancement",
                  icon: TrendingUp
                },
                { 
                  step: "04", 
                  title: "Monitor Progress", 
                  desc: "Track improvements and measure impact",
                  icon: Star
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-maharashtra-green to-saffron rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-gradient-to-r from-maharashtra-green to-saffron">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Platform Impact
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Driving educational excellence through transparent feedback and continuous improvement.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">2.5L+</div>
                <div className="opacity-90">Feedback Submissions</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="opacity-90">Anonymity Maintained</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="opacity-90">Quality Improvement</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Platform Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center shadow-card">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Share Your Voice
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your feedback matters. Help us build a better educational environment through honest, secure, and constructive communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Submit Feedback
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="ghost" size="lg">
                  View Guidelines
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

export default Feedback;