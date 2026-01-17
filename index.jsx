import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Star, Wand2, Layout, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumePlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            The World's Most Powerful <span className="text-indigo-600">Free Resume Platform</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Build, optimize, rate, design, and professionally rewrite your resume using
            ATS-aligned intelligence — completely free.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Build My Resume</Button>
            <Button variant="outline" size="lg">Upload & Optimize</Button>
          </div>
        </motion.div>

        {/* Core Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: FileText,
              title: "Smart Resume Builder",
              desc: "Guided resume creation with role-specific prompts and best-practice structure."
            },
            {
              icon: Wand2,
              title: "AI Resume Optimization",
              desc: "Keyword alignment, impact rewriting, and ATS optimization in real time."
            },
            {
              icon: Star,
              title: "Resume Rating Engine",
              desc: "Get an instant score across ATS, impact, clarity, and seniority alignment."
            }
          ].map((f, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <f.icon className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <Layout className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Elite Resume Design</h3>
              <p className="text-slate-600 mb-4">
                Clean, professional, recruiter-approved templates tailored for US, UK, EU,
                and global markets.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>ATS-safe layouts</li>
                <li>One-page & executive formats</li>
                <li>PDF & DOCX export</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <ShieldCheck className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Privacy & Trust</h3>
              <p className="text-slate-600 mb-4">
                No paywalls. No hidden upsells. Your data stays private and encrypted.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>No account required to start</li>
                <li>GDPR-friendly by design</li>
                <li>Delete data anytime</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Your Resume Is Your First Interview</h2>
          <p className="text-slate-600 mb-6">
            Make it impossible to ignore — without paying a cent.
          </p>
          <Button size="lg">Get Started Free</Button>
        </motion.div>
      </div>
    </div>
  );
}
