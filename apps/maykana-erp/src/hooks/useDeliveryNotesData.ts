import { useState } from 'react';
import { deliveryNotesData, type DeliveryNote } from '../data/delivery-notes.data';

export const useDeliveryNotesData = () => {
  const [deliveryNotes, setDeliveryNotes] = useState<DeliveryNote[]>(deliveryNotesData);

  return {
    deliveryNotes,
    setDeliveryNotes,
  };
};
