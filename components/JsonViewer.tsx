
import React from 'react';
import { LeaseData } from '../types';

interface JsonViewerProps {
  data: LeaseData;
}

const JsonViewer: React.FC<JsonViewerProps> = ({ data }) => {
  return (
    <pre className="bg-slate-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
      <code>
        {JSON.stringify(data, null, 2)}
      </code>
    </pre>
  );
};

export default JsonViewer;
