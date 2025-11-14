
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">About LeaseLens</h3>
          <p className="text-sm mb-4">
            LeaseLens is an AI-powered tool designed to simplify rental agreements for tenants and small businesses. We believe in making legal documents accessible and understandable.
          </p>
          <p className="text-sm mb-4">Contact: <a href="mailto:contact@leaselens.ai" className="text-primary-600 hover:underline">contact@leaselens.ai</a></p>
          <p className="text-xs">&copy; {new Date().getFullYear()} LeaseLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
