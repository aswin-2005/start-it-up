import { Users, Building2, Calendar, Rocket } from 'lucide-react';


export function Features() {
  return (
      <section id='features' className="bg-[#F4F4EE] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <Users className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Expert Mentorship</h3>
            <p className="text-gray-600">Learn from successful entrepreneurs who've been in your shoes</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <Calendar className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Workspace Access</h3>
            <p className="text-gray-600">Modern office space and a community of fellow founders</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <Rocket className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Scale Your MVP</h3>
            <p className="text-gray-600">Validate your idea and prepare for market launch</p>
          </div>
        </div>
      </div>
    </section>
  );
} 