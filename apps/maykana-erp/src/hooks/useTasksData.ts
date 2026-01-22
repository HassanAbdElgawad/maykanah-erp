// useTasksData Hook - Manages tasks state
import { useState } from 'react';
import { SAMPLE_TASKS, type Task } from '../data/tasks.data';

export const useTasksData = () => {
  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);

  return {
    tasks,
    setTasks,
  };
};
