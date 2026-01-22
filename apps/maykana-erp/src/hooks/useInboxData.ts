// useInboxData Hook - Manages inbox messages state
import { useState } from 'react';
import { MOCK_MESSAGES, type Message } from '../data/inbox.data';

export const useInboxData = () => {
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);

  return {
    messages,
    setMessages,
  };
};
