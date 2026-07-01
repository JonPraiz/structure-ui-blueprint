import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Building, Calendar, Users, FileText, BarChart, Sparkles, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <header className="px-4 lg:px-12 h-20 flex items-center bg-background/80 backdrop-blur-xl sticky top-0 z-50 border-b border-primary/5">
        <Link to="/" className="flex items-center justify-center gap-2 group">
          <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary-foreground font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-foreground">Structure</span>
        </Link>
        <nav className="ml-auto flex items-center gap-8">
          <Link to="#features" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hidden md:block">Features</Link>
          <Link to="#pricing" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hidden md:block">Pricing</Link>
          <Link to="/login" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Login</Link>
          <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            <Link to="/signup">Get Started Free</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/5 blur-[100px] rounded-full" />
          </div>
          
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold mb-4"
              >
                <Sparkles size={16} />
                <span>The world's first AI Operating System for Organizations</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter max-w-4xl leading-[0.9]"
              >
                Automate your <span className="text-primary">Impact.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-[700px] text-muted-foreground md:text-2xl font-medium leading-relaxed"
              >
                The all-in-one platform for churches, NGOs, and businesses. 
                Manage members, plan events, and generate documents with enterprise-grade AI.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="rounded-full px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                  <Link to="/signup">
                    Launch your Organization
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg border-2">
                  <Link to="/login">Watch Demo</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="w-full py-24 bg-muted/30 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Built for Scale, Powered by AI</h2>
              <p className="max-w-[800px] text-muted-foreground text-lg">
                Structure brings all your essential modules into one unified, intelligent workspace.
              </p>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { title: "Smart Event Planner", icon: Calendar, desc: "Generate schedules, budgets, and marketing plans with one prompt." },
                { title: "Member Intelligence", icon: Users, desc: "AI-powered directory with volunteer matching and engagement insights." },
                { title: "Document Automation", icon: FileText, desc: "Generate professional proposals, reports, and letters in seconds." },
                { title: "Intelligent Analytics", icon: BarChart, desc: "Strategic summaries and growth predictions based on your data." },
                { title: "Enterprise Security", icon: Shield, desc: "Granular permissions and data encryption you can trust." },
                { title: "Real-time AI OS", icon: Bot, desc: "A floating assistant ready to automate any task, anywhere." }
              ].map((f, i) => (
                <motion.div key={i} variants={item} className="p-8 rounded-3xl bg-background border border-primary/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <f.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI OS Promo */}
        <section className="py-24 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="bg-primary rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 skew-x-12 translate-x-1/2" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-primary-foreground">
                            <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">AI-FIRST DESIGN</Badge>
                            <h2 className="text-4xl md:text-6xl font-black leading-none">The Operating System your team actually enjoys.</h2>
                            <p className="text-xl text-primary-foreground/80 leading-relaxed">
                                Don't just manage. Orchestrate. Structure AI learns your organization's patterns to provide strategic recommendations that actually matter.
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 font-bold">Start Building</Button>
                                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-8">Learn More</Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-3 w-3 rounded-full bg-red-400" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <div className="h-3 w-3 rounded-full bg-green-400" />
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse" />
                                    <div className="h-4 bg-white/20 rounded w-full animate-pulse [animation-delay:0.2s]" />
                                    <div className="h-20 bg-white/10 rounded w-full border border-white/10 flex items-center justify-center italic text-white/50 text-sm">
                                        "AI is generating your event plan..."
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-20 bg-white/20 rounded animate-pulse [animation-delay:0.4s]" />
                                        <div className="h-20 bg-white/20 rounded animate-pulse [animation-delay:0.5s]" />
                                        <div className="h-20 bg-white/20 rounded animate-pulse [animation-delay:0.6s]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-card py-20 border-t border-primary/5">
        <div className="container px-4 md:px-12 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
                <Link to="/" className="flex items-center gap-2 mb-6">
                    <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">S</span>
                    </div>
                    <span className="text-xl font-bold">Structure</span>
                </Link>
                <p className="text-muted-foreground max-w-sm">
                    Empowering organizations with intelligent automation and strategic insights. 
                    The future of organizational management is here.
                </p>
            </div>
            <div>
                <h4 className="font-bold mb-6">Product</h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                    <li><Link to="#" className="hover:text-primary transition-colors">Features</Link></li>
                    <li><Link to="#" className="hover:text-primary transition-colors">AI OS</Link></li>
                    <li><Link to="#" className="hover:text-primary transition-colors">Security</Link></li>
                    <li><Link to="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                    <li><Link to="#" className="hover:text-primary transition-colors">About</Link></li>
                    <li><Link to="#" className="hover:text-primary transition-colors">Blog</Link></li>
                    <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
                    <li><Link to="#" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/5 gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Structure AI Technologies. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
