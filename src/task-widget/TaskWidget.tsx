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
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fake data

  // { id: 1, description: 'first task', completed: false },
  // { id: 2, description: 'second task', completed: false }

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

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Center w="100%" h="100vh">
      <Box w="100%" bg="blackAlpha.700" p={4} borderRadius="10px" boxShadow="0 0 12px 2px rgba(0, 0, 100, 0.7)" color="white">
        <Heading as="h3" fontSize="2xl" mb="2rem">
          Tasks for the day
        </Heading>
        <TaskForm singleTask={singleTask} setSingleTask={setSingleTask} addTask={addTask} handleKeyDown={handleKeyDown} />
        <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </Box>
    </Center>
  );
}
