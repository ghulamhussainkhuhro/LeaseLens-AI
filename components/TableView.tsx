
import React from 'react';
import { LeaseData } from '../types';

interface TableViewProps {
  data: LeaseData;
}

const TableRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <tr className="border-b border-slate-200 last:border-b-0">
    <td className="py-3 pr-4 font-semibold text-slate-600 align-top">{label}</td>
    <td className="py-3 text-slate-800">{value}</td>
  </tr>
);

const TableView: React.FC<TableViewProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <tbody>
          <TableRow 
            label="Rent" 
            value={`${data.rentAmount ? new Intl.NumberFormat('en-US', { style: 'currency', currency: data.rentCurrency }).format(data.rentAmount) : 'Not found'}`} 
          />
          <TableRow 
            label="Security Deposit" 
            value={`${data.securityDeposit ? new Intl.NumberFormat('en-US', { style: 'currency', currency: data.rentCurrency }).format(data.securityDeposit) : 'Not found'}`} 
          />
          <TableRow label="Lease Start Date" value={data.leaseStartDate || 'Not found'} />
          <TableRow label="Lease End Date" value={data.leaseEndDate || 'Not found'} />
          <TableRow label="Notice Period" value={data.noticePeriodDays ? `${data.noticePeriodDays} days` : 'Not found'} />
          <TableRow label="Late Fee Policy" value={data.lateFee || 'Not found'} />
          <TableRow 
            label="Termination Rules" 
            value={
              data.terminationRules && data.terminationRules.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {data.terminationRules.map((rule, index) => <li key={index}>{rule}</li>)}
                </ul>
              ) : 'Not found'
            } 
          />
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
