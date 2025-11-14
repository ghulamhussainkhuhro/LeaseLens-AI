
import React, { useState } from 'react';
import { LeaseData } from '../types';
import { analyzeLeaseText } from '../services/leaseAnalyzer';
import JsonViewer from './JsonViewer';
import TableView from './TableView';
import { LoaderIcon } from './icons/FeatureIcons';

type ViewMode = 'json' | 'table';

const AppPage: React.FC = () => {
  const [leaseText, setLeaseText] = useState('');
  const [result, setResult] = useState<LeaseData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('table');

  const handleAnalyze = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await analyzeLeaseText(leaseText);
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const ViewModeButton: React.FC<{ mode: ViewMode, label: string }> = ({ mode, label }) => (
    <button
      onClick={() => setViewMode(mode)}
      className={`px-4 py-2 text-sm font-medium rounded-md ${
        viewMode === mode
          ? 'bg-primary-600 text-white'
          : 'bg-white text-slate-700 hover:bg-slate-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200/80">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Lease Analyzer</h2>
        <p className="text-slate-600 mb-6">
          Paste the full text of your rental agreement below to extract key information.
        </p>
        <textarea
          value={leaseText}
          onChange={(e) => setLeaseText(e.target.value)}
          placeholder="Paste your lease text here..."
          className="w-full h-64 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow duration-200 resize-y"
          disabled={isLoading}
        />
        <div className="mt-6 text-center">
          <button
            onClick={handleAnalyze}
            disabled={isLoading || !leaseText}
            className="w-full sm:w-auto bg-primary-600 text-white px-12 py-3 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all shadow-sm disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
          >
            {isLoading ? (
              <>
                <LoaderIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Analyzing...
              </>
            ) : (
              'Analyze'
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {result && (
        <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border border-slate-200/80">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-800">Analysis Results</h3>
            <div className="flex space-x-2 p-1 bg-slate-100 rounded-lg">
              <ViewModeButton mode="table" label="Table" />
              <ViewModeButton mode="json" label="JSON" />
            </div>
          </div>
          {viewMode === 'table' ? <TableView data={result} /> : <JsonViewer data={result} />}
        </div>
      )}
    </div>
  );
};

export default AppPage;
