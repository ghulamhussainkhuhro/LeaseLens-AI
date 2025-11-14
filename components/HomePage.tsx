
import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, FileJson, Briefcase } from './icons/FeatureIcons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200/50">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
          Extract Lease Terms in Seconds.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-8">
          Paste your rental agreement and get structured, reliable data instantly.
        </p>
        <Link 
          to="/app"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          Try LeaseLens
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={<BrainCircuit className="w-6 h-6" />} title="AI-Powered Extraction">
            Leverage cutting-edge AI to accurately identify and extract key clauses, dates, and figures from complex legal text.
          </FeatureCard>
          <FeatureCard icon={<FileJson className="w-6 h-6" />} title="Instant JSON Output">
            Receive clean, structured JSON data that's ready for use in your applications, spreadsheets, or analysis tools.
          </FeatureCard>
          <FeatureCard icon={<Briefcase className="w-6 h-6" />} title="For Tenants & Businesses">
            Perfect for renters who want to understand their lease, and for small businesses managing multiple properties.
          </FeatureCard>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
