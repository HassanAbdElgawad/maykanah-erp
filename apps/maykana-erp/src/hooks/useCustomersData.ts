// useCustomersData Hook - Manages customers state
import { useState } from 'react';
import { MOCK_CUSTOMERS, type Customer } from '../data/customers.data';

export const useCustomersData = () => {
  const [customers, setCustomers] = useState<Customer[]>(MOCK_CUSTOMERS);

  return {
    customers,
    setCustomers,
  };
};
