import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, Award, ArrowRight, MapPin } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering cutting-edge blockchain solutions to transform education technology in Maharashtra."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Ensuring complete visibility and accountability in all educational processes and transactions."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making quality education and secure credentialing accessible to every citizen of Maharashtra."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in educational services and technological implementation."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            About Maharashtra's
            <span className="block bg-gradient-to-r from-saffron to-maharashtra-green bg-clip-text text-transparent">
              Blockchain Education Initiative
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading the digital transformation of education through secure, transparent, 
            and innovative blockchain technology solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Transforming Education for a Digital Future
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Maharashtra State Educational Department is at the forefront of educational innovation, 
                implementing blockchain technology to create a more secure, transparent, and efficient 
                learning ecosystem for our state's 12 crore citizens.
              </p>
              
              <p>
                Our blockchain-powered platform ensures that every educational achievement, credential, 
                and transaction is securely recorded, instantly verifiable, and completely tamper-proof. 
                This revolutionary approach builds trust among students, educators, employers, and institutions.
              </p>
              
              <p>
                By leveraging cutting-edge technology, we're creating new opportunities for students, 
                streamlining processes for educators, and establishing Maharashtra as a global leader 
                in educational innovation.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="maharashtra" size="lg">
                Learn More About Our Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="ghost" size="lg">
                View Technical Documentation
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <Card className="text-center p-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-saffron">
                  12 Cr+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Citizens Served</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-maharashtra-green">
                  50,000+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Educational Institutions</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-blockchain-blue">
                  1M+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Verified Credentials</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-blockchain-purple">
                  100%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Security Guarantee</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-12">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <Card 
                  key={index}
                  className="text-center p-6 hover:shadow-card transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-saffron rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-maharashtra rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            Ready to Transform Education in Your Institution?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of educational institutions across Maharashtra in embracing 
            the future of secure, blockchain-powered education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Mantralaya, Mumbai, Maharashtra</span>
            </div>
            <Button variant="secondary" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;