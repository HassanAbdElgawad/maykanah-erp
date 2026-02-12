import { useState, useEffect } from 'react';
import { leaveRequestsData, LeaveRequest } from '@/data/hr/leaves-attendance-emp.data';

export const useLeavesAttendanceEmpData = () => {
  const [data, setData] = useState<LeaveRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(leaveRequestsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
