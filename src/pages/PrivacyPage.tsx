import PageHero from '../components/PageHero';

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <PageHero 
        title="Privacy Policy" 
        subtitle="Last Updated: June 2026"
        image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop"
      />
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <p className="lead text-xl text-slate-600 mb-8">
            Your privacy is critically important to us. This policy outlines how Elite Cricket Academy (ECA) collects, uses, and protects your personal information.
          </p>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">1. Information We Collect</h2>
          <p className="text-slate-600 mb-6">
            We collect information primarily to provide better services to our athletes and their families. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-6">
            <li><strong>Personal Information:</strong> Name, date of birth, contact details, email address, and emergency contact information provided during registration.</li>
            <li><strong>Medical Information:</strong> Relevant medical history, allergies, and physical conditions required for player safety.</li>
            <li><strong>Performance Data:</strong> Match statistics, fitness tracking, and skill assessments recorded during training programs.</li>
            <li><strong>Media:</strong> Photographs and videos captured during practice sessions and matches.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">2. How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-6">
            <li>To manage registrations, process payments, and organize training batches.</li>
            <li>To ensure the health and safety of athletes during academy activities.</li>
            <li>To track player progress, provide personalized feedback, and aid in talent development.</li>
            <li>To communicate important updates, schedule changes, and promotional offers.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">3. Data Protection & Security</h2>
          <p className="text-slate-600 mb-6">
            We adopt strict data collection, storage, and processing practices. We use appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our systems.
          </p>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">4. Sharing Your Information</h2>
          <p className="text-slate-600 mb-6">
            We do not sell, trade, or rent user personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners or trusted affiliates.
          </p>
          <p className="text-slate-600 mb-6">
            With explicit consent, we may use photographs or videos of players on our website, social media, or marketing materials to promote the academy.
          </p>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">5. Your Rights</h2>
          <p className="text-slate-600 mb-6">
            You have the right to request access to the personal data we hold about you. You can also request that we correct any inaccuracies or ask us to delete your personal information, subject to administrative, legal, or security obligations.
          </p>
          
          <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h3>
            <p className="text-slate-600">
              For any privacy-related concerns or data requests, please reach out to our team at <a href="mailto:privacy@elitecricket.com" className="text-red-600 font-bold hover:underline">privacy@elitecricket.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
