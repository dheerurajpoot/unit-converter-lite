import Link from 'next/link'
import { 
  ArrowRight, 
  Zap, 
  MousePointer2, 
  Search, 
  Download, 
  Settings, 
  CircleCheckBig,
  LayoutGrid,
  Clock,
  Fingerprint
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'
import ConverterTool from '@/components/converter-tool'
import { SITE_NAME } from '@/lib/constant'


export default function Home() {
 
  const stats = [
    { label: 'Units Supported', value: '50+', icon: LayoutGrid },
    { label: 'Success Rate', value: '100%', icon: CircleCheckBig },
    { label: 'Processing Time', value: '< 1ms', icon: Clock },
    { label: 'Data Privacy', value: 'Locked', icon: Fingerprint },
  ]

  const faqs = [
    {
      question: `Is ${SITE_NAME} really free?`,
      answer: "Yes, 100% free. We don't charge anything, and there are no hidden premium features. Our goal is to provide the simplest conversion utility for everyone."
    },
    {
      question: "How accurate are the conversions?",
      answer: "We use internationally recognized standard formulas for all conversions. Results are accurate up to 6 decimal places, which is more than enough for most daily and professional use cases."
    },
    {
      question: "Do you store any of my data?",
      answer: "No. All conversions happen locally in your browser. We don't send your input values to any server, making our tool extremely private and secure."
    },
    {
      question: "Can I use it offline?",
      answer: "Once the page is loaded, the conversion logic works entirely offline as it runs in your browser. You can bookmark the page for quick access."
    },
    {
      question: "What unit categories are supported?",
      answer: "Currently, we support Length, Weight, Temperature, Volume, and Area. We are constantly working to add more categories like Speed, Time, and Digital Storage."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* HERO SECTION - REFINED AESTHETIC */}
        <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 z-[-1]">
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
          </div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
               <Zap className="w-3 h-3" /> New: Temperature Support Added
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Units Simplified. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">Instant Accuracy.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
              The professional utility for instant unit conversions. No registration, no ads, just pure functionality at your fingertips.
            </p>
          </div>
        </section>

        {/* TOOL SECTION - THE STAR OF THE SHOW */}
        <section className="relative py-12 sm:py-20">
           <div className="mx-auto max-w-7xl px-4">
             <div className="relative group transition-all duration-500">
                {/* Glow behind the tool */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                <ConverterTool />
             </div>
           </div>
        </section>

        {/* STATS SECTION - IMPRESSIVE NUMBERS */}
        <section className="py-16 sm:py-24 bg-card/30 border-y border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-border/50">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-foreground tracking-tighter">{stat.value}</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTIONS */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
                    Perfectly Engineered <br />
                    <span className="text-primary">Workflow</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Designed from the ground up to be the most efficient conversion tool on the web. Minimal clicks, maximal results.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: MousePointer2, title: "Choose Category", text: "Select from Length, Weight, Temperature and more." },
                    { icon: Search, title: "Enter Value", text: "Type your number and see results instantly as you type." },
                    { icon: Download, title: "Copy Result", text: "One click to get your converted value for your project." }
                  ].map((step, i) => (
                    <div key={step.title} className="flex gap-5 group">
                      <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-muted border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors text-muted-foreground group-hover:text-primary-foreground">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{step.title}</h3>
                        <p className="text-muted-foreground">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 border border-border/50 flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                   <Settings className="w-32 h-32 text-primary/30 animate-[spin_10s_linear_infinite]" />
                   <div className="absolute inset-x-0 bottom-10 px-10">
                      <div className="bg-card/80 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-2xl space-y-4">
                         <div className="h-4 w-1/3 bg-primary/20 rounded-full" />
                         <div className="space-y-2">
                           <div className="h-4 w-full bg-muted rounded-full" />
                           <div className="h-4 w-2/3 bg-muted rounded-full" />
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-20 sm:py-32 bg-secondary/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Everything you need to know about {SITE_NAME}</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border/50 rounded-2xl px-6">
                  <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary z-[-1]" />
          <div className="absolute inset-0 opacity-30 z-[-1]">
             <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-[100px]" />
             <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-[100px]" />
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black text-primary-foreground tracking-tight">
                Ready to Convert?
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-xl mx-auto">
                No strings attached. No signup. No credit card. Just pure conversion magic.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/converter">
                <Button size="xl" variant="secondary" className="px-10 h-16 rounded-2xl gap-3 text-lg font-black shadow-2xl hover:scale-105 transition-transform">
                  Go Full Screen <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="xl" variant="outline" className="px-10 h-16 rounded-2xl text-lg font-black bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
