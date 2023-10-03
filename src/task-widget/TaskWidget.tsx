import { useState } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export default function TaskWidget() {
  const [singleTask, setSingleTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: 'first task', completed: false },
    { id: 2, description: 'second task', completed: false }
  ]);

  const addTask = () => {
    const newTask: Task = { id: Date.now(), description: singleTask, completed: false };
    setTasks([...tasks, newTask]);
    setSingleTask('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (singleTask.trim() !== '') {
        addTask();
      }
    }
  };

  const completeTask = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <Center w="100%" h="100vh">
      <Box bg="blackAlpha.700" borderRadius="10px" boxShadow="0 0 24px 2px rgba(0, 0, 100, 0.8)" w="100%" p={4} color="white">
        <Heading as="h3" fontSize="1.25rem" mb={4}>
          Tasks for the day
        </Heading>
        <TaskForm singleTask={singleTask} setSingleTask={setSingleTask} addTask={addTask} handleKeyDown={handleKeyDown} />
        <TaskList tasks={tasks} completeTask={completeTask} />
      </Box>
    </Center>
  );
}
