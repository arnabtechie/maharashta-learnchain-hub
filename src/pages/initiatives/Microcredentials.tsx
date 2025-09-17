import { ArrowLeft, Award, Star, Briefcase, TrendingUp, Users, CheckCircle, ExternalLink, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Microcredentials = () => {
  const skillCategories = [
    {
      icon: Target,
      title: "Technical Skills",
      description: "Programming, AI, Data Science, Cybersecurity",
      badges: "500+",
      color: "text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Professional Skills",
      description: "Leadership, Communication, Project Management",
      badges: "300+",
      color: "text-green-600"
    },
    {
      icon: Star,
      title: "Creative Skills",
      description: "Design, Digital Marketing, Content Creation",
      badges: "250+",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Business Skills",
      description: "Entrepreneurship, Finance, Strategy",
      badges: "200+",
      color: "text-orange-600"
    }
  ];

  const featuredBadges = [
    {
      title: "AI & Machine Learning Specialist",
      issuer: "Maharashtra Tech Institute",
      level: "Advanced",
      duration: "6 months",
      enrolled: "2,500+"
    },
    {
      title: "Digital Marketing Expert",
      issuer: "State Skill Development Board",
      level: "Intermediate",
      duration: "3 months",
      enrolled: "5,000+"
    },
    {
      title: "Blockchain Developer",
      issuer: "Maharashtra University",
      level: "Advanced",
      duration: "8 months",
      enrolled: "1,200+"
    },
    {
      title: "Data Analytics Professional",
      issuer: "Government Training Center",
      level: "Intermediate",
      duration: "4 months",
      enrolled: "3,800+"
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
            <span className="text-foreground">Micro-Credentials & Skills Badges</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-saffron/10 to-maharashtra-green/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-saffron/10 rounded-full text-sm font-medium text-saffron mb-6">
                <Award className="w-4 h-4 mr-2" />
                Digital Skills Recognition
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Micro-Credentials &
                <span className="block bg-gradient-to-r from-saffron to-maharashtra-green bg-clip-text text-transparent">
                  Skills Badges
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Earn blockchain-verified digital badges that showcase your skills and competencies, recognized by employers across Maharashtra and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Explore Skills Badges
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="gov-outline" size="lg">
                  View My Badges
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Skills Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover badges across diverse skill categories designed to meet industry demands and career aspirations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-saffron border-saffron/20">
                      {category.badges} Available Badges
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Badges */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Featured Skills Badges
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Popular badges currently in high demand by employers and aligned with Maharashtra's skill development goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredBadges.map((badge, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{badge.title}</CardTitle>
                        <CardDescription className="mb-2">{badge.issuer}</CardDescription>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="secondary" 
                            className={`${badge.level === 'Advanced' ? 'text-red-600 border-red-600/20' : 'text-blue-600 border-blue-600/20'}`}
                          >
                            {badge.level}
                          </Badge>
                          <Badge variant="outline">
                            {badge.duration}
                          </Badge>
                        </div>
                      </div>
                      <Award className="w-8 h-8 text-saffron" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-maharashtra-green mr-2" />
                        {badge.enrolled} Enrolled
                      </div>
                    </div>
                    <Button variant="gov-outline" className="w-full">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                How Skills Badges Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple process to earn, verify, and showcase your blockchain-backed skills credentials.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Choose Skills", desc: "Select from 1000+ available skills badges across various domains" },
                { step: "02", title: "Complete Training", desc: "Engage in hands-on learning with industry experts and mentors" },
                { step: "03", title: "Assessment", desc: "Demonstrate competency through practical projects and evaluations" },
                { step: "04", title: "Earn Badge", desc: "Receive blockchain-verified digital badge for your achievements" }
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

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  Why Choose Our Skills Badges?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our blockchain-verified badges provide real value to learners and employers, creating a trusted skills ecosystem.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Industry-recognized credentials",
                    "Blockchain verification prevents fraud",
                    "Stackable badges for career progression",
                    "Direct employer recognition",
                    "Portable across organizations",
                    "Real-time skills validation"
                  ].map((benefit, index) => (
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
                      For Learners
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Validate and showcase skills</li>
                      <li>• Enhance career prospects</li>
                      <li>• Build credible digital portfolio</li>
                      <li>• Access exclusive opportunities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-maharashtra-green/5 to-saffron/5 border-maharashtra-green/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-maharashtra-green" />
                      For Employers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Verify candidate skills instantly</li>
                      <li>• Reduce hiring time and costs</li>
                      <li>• Access skilled talent pool</li>
                      <li>• Support employee development</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-gradient-to-r from-saffron to-maharashtra-green">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Skills Ecosystem Impact
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Empowering Maharashtra's workforce with verifiable digital skills.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">1,250+</div>
                <div className="opacity-90">Available Badges</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">75,000+</div>
                <div className="opacity-90">Badges Earned</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="opacity-90">Partner Employers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="opacity-90">Employer Recognition</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center shadow-card">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Start Your Skills Journey
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take the first step towards building a verifiable skills portfolio that employers trust and value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Browse All Badges
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="ghost" size="lg">
                  Create Skills Profile
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

export default Microcredentials;