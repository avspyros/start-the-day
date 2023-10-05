import { useState, useEffect } from 'react';
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
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const addTask = () => {
    const newTask: Task = { id: Date.now(), description: singleTask, completed: false };
    setTasks([...tasks, newTask]);
    setSingleTask('');
  };

  const completeTask = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Center w="100%" h="100vh">
      <Box w="100%" bg="blackAlpha.700" p={4} borderRadius="10px" boxShadow="0 0 12px 2px rgba(0, 0, 100, 0.7)" color="white">
        <Heading as="h3" fontSize="2xl" mb="2rem">
          Tasks for the day
        </Heading>
        <TaskForm singleTask={singleTask} setSingleTask={setSingleTask} addTask={addTask} />
        <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </Box>
    </Center>
  );
}
