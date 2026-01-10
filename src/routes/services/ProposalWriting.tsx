import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, FileText, Users, Award, Clock } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { LINKS } from "../../lib/constants";

const colorTeams = [
  { name: "Blue", color: "bg-blue-600", phase: "Strategy", desc: "Outline and win themes" },
  { name: "Pink", color: "bg-pink-400", phase: "Storyboard", desc: "60% draft review" },
  { name: "Red", color: "bg-red-600", phase: "Evaluation", desc: "Score like the government" },
  { name: "Gold", color: "bg-yellow-500", phase: "Polish", desc: "Final quality check" },
];

export default function ServicesProposalWriting() {
  return (
    <>
      <Helmet>
        <title>Proposal Writing — GovCon Inc.</title>
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Services</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              Proposal Writing
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We write proposals that win. From compliance matrices to final production, 
              our team follows the Shipley method to deliver evaluation-ready submissions.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg">
                Start Your Proposal
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="p-6" hover>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
                <FileText size={24} />
              </div>
              <h3 className="mt-4 font-bold text-lg text-gov-navy">Full Proposal Development</h3>
              <p className="mt-2 text-sm text-slate-600">
                End-to-end proposal writing from RFP analysis to submission. 
                We handle technical, management, past performance, and pricing volumes.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-sm text-slate-500">Starting at </span>
                <span className="font-bold text-gov-navy">$5,000</span>
              </div>
            </Card>

            <Card className="p-6" hover>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-crimson/10 text-gov-crimson">
                <Users size={24} />
              </div>
              <h3 className="mt-4 font-bold text-lg text-gov-navy">Red Team Reviews</h3>
              <p className="mt-2 text-sm text-slate-600">
                Independent evaluation of your draft proposal. We score it exactly 
                like the government would and provide actionable feedback.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-sm text-slate-500">Starting at </span>
                <span className="font-bold text-gov-navy">$1,500</span>
              </div>
            </Card>

            <Card className="p-6" hover>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-gold/20 text-gov-gold">
                <Award size={24} />
              </div>
              <h3 className="mt-4 font-bold text-lg text-gov-navy">Past Performance Support</h3>
              <p className="mt-2 text-sm text-slate-600">
                PPQ collection, reference formatting, and relevance mapping to 
                strengthen your past performance volume.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-sm text-slate-500">Starting at </span>
                <span className="font-bold text-gov-navy">$750</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <Section title="Our Shipley Process" kicker="Color Team Reviews">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-slate-600">
              The Shipley method uses "Color Teams" to review proposals at specific 
              milestones. Each review catches issues before they become rejection-worthy problems.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {colorTeams.map((team) => (
                <div key={team.name} className="flex items-center gap-3">
                  <div className={`h-4 w-4 rounded-full ${team.color}`} />
                  <div>
                    <div className="font-semibold text-gov-navy">{team.name} Team</div>
                    <div className="text-xs text-slate-500">{team.phase}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-6" hover={false}>
            <h3 className="font-semibold text-gov-navy">Our Deliverables</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Compliance Matrix",
                "Technical Approach Volume",
                "Management Plan",
                "Staffing Plan",
                "Past Performance Volume",
                "Pricing Volume",
                "Executive Summary",
                "Final Production Package",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle size={16} className="text-gov-green" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Timeline */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-6 w-6 text-gov-blue" />
            <h2 className="font-display text-2xl font-bold text-gov-navy">Typical Timeline</h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { week: "Week 1", task: "RFP Analysis & Strategy", desc: "Compliance matrix, win themes, outline" },
              { week: "Week 2", task: "Content Development", desc: "Technical writing, SME interviews" },
              { week: "Week 3", task: "Review & Revision", desc: "Pink/Red team reviews, feedback integration" },
              { week: "Week 4", task: "Polish & Submit", desc: "Final review, production, submission" },
            ].map((item, idx) => (
              <Card key={item.week} className="p-5" hover={false}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gov-blue text-white text-sm font-bold">
                  {idx + 1}
                </div>
                <div className="mt-3 text-xs font-bold uppercase tracking-wider text-gov-blue">{item.week}</div>
                <h3 className="mt-2 font-semibold text-gov-navy">{item.task}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
          
          <p className="mt-6 text-sm text-slate-500 text-center">
            * Timeline varies based on RFP complexity and response time available
          </p>
        </div>
      </section>

      {/* What We Need */}
      <Section title="What We Need From You" kicker="Collaboration">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6" hover={false}>
            <h3 className="font-semibold text-gov-navy">Before We Start</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Complete RFP/RFQ package",
                "Company capabilities overview",
                "Key personnel resumes",
                "Past performance references (3-5)",
                "Pricing inputs / labor rates",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-gov-crimson" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-6" hover={false}>
            <h3 className="font-semibold text-gov-navy">During Development</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Access to subject matter experts",
                "Timely review of drafts",
                "Decision authority for approach",
                "Pricing approval",
                "Final sign-off",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-gov-crimson" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section title="Have an RFP to Respond To?" kicker="Let's Win" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We can start within 48 hours
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Send us your RFP and we'll provide a scope, timeline, and fixed-price 
                quote within 24 hours.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Start Proposal
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
