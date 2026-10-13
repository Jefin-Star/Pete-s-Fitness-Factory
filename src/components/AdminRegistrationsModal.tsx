import React, { useState, useEffect } from 'react';
import { X, Trash2, CheckCircle2, Download, Search, UserCheck } from 'lucide-react';
import { RegistrationRecord } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminRegistrationsModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [records, setRecords] = useState<RegistrationRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      loadRecords();
    }
  }, [isOpen]);

  const loadRecords = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('petes_gym_registrations') || '[]');
      setRecords(stored);
    } catch {
      setRecords([]);
    }
  };

  const deleteRecord = (id: string) => {
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
    localStorage.setItem('petes_gym_registrations', JSON.stringify(updated));
  };

  const toggleStatus = (id: string) => {
    const updated = records.map((r) => {
      if (r.id === id) {
        const nextStatus: 'pending' | 'contacted' | 'confirmed' =
          r.status === 'pending' ? 'contacted' : r.status === 'contacted' ? 'confirmed' : 'pending';
        return { ...r, status: nextStatus };
      }
      return r;
    });
    setRecords(updated);
    localStorage.setItem('petes_gym_registrations', JSON.stringify(updated));
  };

  const exportCSV = () => {
    if (records.length === 0) return;
    const headers = ['ID', 'Full Name', 'Phone', 'Email', 'Plan', 'Start Date', 'Goal', 'Message', 'Status', 'Date'];
    const rows = records.map((r) => [
      r.id,
      `"${r.fullName.replace(/"/g, '""')}"`,
      r.phone,
      r.email,
      r.planId,
      r.preferredStartDate,
      `"${r.fitnessGoals.replace(/"/g, '""')}"`,
      `"${(r.message || '').replace(/"/g, '""')}"`,
      r.status,
      r.createdAt,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `petes_gym_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = records.filter(
    (r) =>
      r.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.phone.includes(searchQuery) ||
      r.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
              Pete's Fitness Factory · Internal Desk
            </span>
            <h3 className="font-display text-xl font-bold uppercase text-white mt-0.5">
              Member Registration Log
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, phone, email, ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={exportCSV}
              disabled={records.length === 0}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-xs font-medium text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Export CSV</span>
            </button>
            <span className="text-xs text-zinc-400 font-medium">
              Total: <strong className="text-white">{records.length}</strong>
            </span>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-y-auto p-4 flex-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 text-xs space-y-2">
              <UserCheck className="w-8 h-8 text-zinc-600 mx-auto" />
              <p>No member registrations recorded yet.</p>
              <p className="text-zinc-600">Submissions from the Registration Form appear here immediately.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((record) => (
                <div
                  key={record.id}
                  className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{record.fullName}</span>
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">
                        {record.id}
                      </span>
                      <button
                        onClick={() => toggleStatus(record.id)}
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded cursor-pointer ${
                          record.status === 'confirmed'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : record.status === 'contacted'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}
                        title="Click to advance status"
                      >
                        {record.status}
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-zinc-400">
                      <span>📞 {record.phone}</span>
                      <span>✉️ {record.email}</span>
                      <span className="text-amber-400">
                        Plan: {record.planId === 'personal-training' ? 'Personal Training + Diet' : 'General Gym'}
                      </span>
                      <span>Start: {record.preferredStartDate}</span>
                    </div>
                    {record.message && (
                      <p className="text-[11px] text-zinc-400 italic bg-zinc-950/60 p-2 rounded mt-1">
                        "{record.message}"
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => toggleStatus(record.id)}
                      className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                      title="Advance status"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </button>
                    <button
                      onClick={() => deleteRecord(record.id)}
                      className="p-1.5 rounded-lg bg-zinc-800 hover:bg-rose-900/50 text-zinc-400 hover:text-rose-400 transition-colors cursor-pointer"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/40 text-center">
          <p className="text-[11px] text-zinc-500">
            Internal storage saved directly on this browser · Pete's Fitness Factory Front Desk
          </p>
        </div>
      </div>
    </div>
  );
};
