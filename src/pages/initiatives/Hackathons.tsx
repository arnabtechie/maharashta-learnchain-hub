import { ArrowLeft, Code, Trophy, Users, Zap, CheckCircle, ExternalLink, Calendar, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Hackathons = () => {
  const features = [
    {
      icon: Code,
      title: "Innovation Challenges",
      description: "Cutting-edge problem statements addressing real-world education challenges"
    },
    {
      icon: Trophy,
      title: "Blockchain Certification",
      description: "Winners receive tamper-proof digital certificates and achievement badges"
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Team formation, project submission, and mentor interaction in one place"
    },
    {
      icon: Zap,
      title: "Fast-Track Innovation",
      description: "48-72 hour intensive development cycles for rapid prototyping"
    }
  ];

  const upcomingHackathons = [
    {
      title: "EduTech Innovation Challenge 2024",
      theme: "AI-Powered Learning Solutions",
      date: "March 15-17, 2024",
      location: "Mumbai Tech Hub",
      prize: "₹5,00,000",
      participants: "500+ Teams",
      status: "Registration Open"
    },
    {
      title: "Blockchain for Education Summit",
      theme: "Decentralized Learning Platforms",
      date: "April 22-24, 2024", 
      location: "Pune Innovation Center",
      prize: "₹3,00,000",
      participants: "300+ Teams",
      status: "Coming Soon"
    },
    {
      title: "Smart Campus Hackathon",
      theme: "IoT & Smart Infrastructure",
      date: "May 10-12, 2024",
      location: "Nashik Technology Park",
      prize: "₹2,50,000",
      participants: "400+ Teams",
      status: "Planning Phase"
    }
  ];

  const tracks = [
    {
      title: "Education Technology",
      description: "Innovative solutions for digital learning and student engagement",
      icon: Lightbulb,
      color: "text-blue-600"
    },
    {
      title: "Blockchain Applications",
      description: "Leveraging blockchain for transparency and security in education",
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent systems for personalized learning and assessment",
      icon: Zap,
      color: "text-purple-600"
    },
    {
      title: "Social Innovation",
      description: "Solutions addressing educational inequality and accessibility",
      icon: Users,
      color: "text-orange-600"
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
            <span className="text-foreground">State-Level Hackathons</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-saffron/10 to-maharashtra-green/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-saffron/10 rounded-full text-sm font-medium text-saffron mb-6">
                <Code className="w-4 h-4 mr-2" />
                Innovation Competition Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6">
                State-Level
                <span className="block bg-gradient-to-r from-saffron to-maharashtra-green bg-clip-text text-transparent">
                  Hackathons
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join Maharashtra's premier innovation platform where students, developers, and entrepreneurs collaborate to solve education challenges and win blockchain-verified achievements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Register for Hackathon
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="gov-outline" size="lg">
                  View Past Winners
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
                Why Join Our Hackathons?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience cutting-edge innovation challenges with blockchain-verified achievements and industry recognition.
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

        {/* Upcoming Hackathons */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Upcoming Hackathons
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join the next wave of innovation competitions designed to transform education through technology.
              </p>
            </div>

            <div className="space-y-6">
              {upcomingHackathons.map((hackathon, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{hackathon.title}</CardTitle>
                        <CardDescription className="text-lg mb-4">{hackathon.theme}</CardDescription>
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            {hackathon.date}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="w-4 h-4 mr-2" />
                            {hackathon.participants}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Trophy className="w-4 h-4 mr-2" />
                            {hackathon.prize}
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`${hackathon.status === 'Registration Open' ? 'text-green-600 border-green-600/20' : 
                          hackathon.status === 'Coming Soon' ? 'text-orange-600 border-orange-600/20' : 
                          'text-blue-600 border-blue-600/20'}`}
                      >
                        {hackathon.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{hackathon.location}</span>
                      <Button 
                        variant={hackathon.status === 'Registration Open' ? 'maharashtra' : 'gov-outline'} 
                        disabled={hackathon.status === 'Planning Phase'}
                      >
                        {hackathon.status === 'Registration Open' ? 'Register Now' : 
                         hackathon.status === 'Coming Soon' ? 'Get Notified' : 'Coming Soon'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Tracks */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Innovation Tracks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose your focus area and compete with like-minded innovators in specialized tracks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tracks.map((track, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <track.icon className={`w-8 h-8 ${track.color}`} />
                    </div>
                    <CardTitle className="text-lg">{track.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{track.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Participation Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                How to Participate
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple registration process to join Maharashtra's premier innovation challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Register", desc: "Create account and select your hackathon track" },
                { step: "02", title: "Form Team", desc: "Connect with participants or register individually" },
                { step: "03", title: "Develop", desc: "Build innovative solutions during the event period" },
                { step: "04", title: "Present", desc: "Pitch your solution to industry expert judges" }
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
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  Participant Benefits
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Beyond cash prizes, our hackathons offer valuable opportunities for learning, networking, and career advancement.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Blockchain-verified achievement certificates",
                    "Mentorship from industry experts",
                    "Networking with tech leaders",
                    "Internship and job opportunities",
                    "Patent filing assistance",
                    "Startup incubation support"
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
                      <Trophy className="w-5 h-5 mr-2 text-saffron" />
                      Prize Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• First Place: ₹2,00,000 + Incubation</li>
                      <li>• Second Place: ₹1,50,000 + Mentorship</li>
                      <li>• Third Place: ₹1,00,000 + Certificates</li>
                      <li>• Special Categories: ₹50,000 each</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-maharashtra-green/5 to-saffron/5 border-maharashtra-green/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-maharashtra-green" />
                      Team Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Team size: 2-5 members</li>
                      <li>• Mixed skill sets encouraged</li>
                      <li>• Student teams get priority</li>
                      <li>• Diversity bonus points</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-gradient-to-r from-saffron to-maharashtra-green">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Innovation Impact
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Driving technological innovation and entrepreneurship across Maharashtra's youth.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="opacity-90">Hackathons Conducted</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="opacity-90">Participants</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">₹50L+</div>
                <div className="opacity-90">Total Prize Money</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="opacity-90">Startups Launched</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center shadow-card">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Ready to Innovate?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join Maharashtra's most exciting hackathons and turn your innovative ideas into reality with blockchain-verified achievements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="maharashtra" size="lg">
                  Join Next Hackathon
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="ghost" size="lg">
                  Become a Mentor
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

export default Hackathons;