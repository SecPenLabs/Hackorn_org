export default function About() {
  return (
    <section className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* ✅ Left: Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-brand drop-shadow-[0_0_5px_#39ff14]">
            About Hackor[n]
          </h2>
          <p className="text-neutral-300 mb-6 text-base sm:text-lg leading-relaxed">
            Hackor[n] is a student-led cybersecurity initiative powered by <strong>SecPen Labs</strong>.
            It builds a federated network of university chapters enabling students to engage in
            ethical hacking, CTFs, and collaborative research under expert mentorship.
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-neutral-400 mb-8">
            <li>Federated student chapters across India</li>
            <li>Hands-on cybersecurity workshops & Capture the Flag (CTF) events</li>
            <li>Mentorship-driven open collaboration & research</li>
            <li>Run by students, supported by professionals</li>
          </ul>

          {/* 🔒 Commented Sections for Later */}
          {/*
          <h3 className="text-xl font-semibold mt-6 mb-2 text-white">Our Mission</h3>
          <p className="text-neutral-400 mb-4">
            To empower students with real-world exposure and grow a secure, ethical hacking culture.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-white">How It Works</h3>
          <ul className="list-disc list-inside text-neutral-400 text-sm space-y-2 mb-6">
            <li>Apply to start a chapter</li>
            <li>Form a team with faculty and student leads</li>
            <li>Access resources, mentors & exclusive events</li>
            <li>Host events, build your chapter's presence</li>
          </ul>
          */}

          <a
            href="/contact"
            className="inline-block bg-brand hover:bg-brand/80 text-black font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Join Us
          </a>
        </div>

        {/* ✅ Right: Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/Images/about_hackor_n.png"
            alt="Hackor[n] Cybersecurity Graphic"
            className="w-full h-auto rounded-xl shadow-xl border border-neutral-800"
          />
        </div>
      </div>
    </section>
  );
}
