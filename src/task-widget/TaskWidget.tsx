import { useState } from 'react';
import { Box, Center, Heading, UnorderedList, ListItem, Input, Button } from '@chakra-ui/react';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export default function TaskWidget() {
  const [singleTask, setSingleTask] = useState<string>('');
  const [tasks, setTasks] = useState([
    { id: 1, description: 'first task', completed: false },
    { id: 2, description: 'second task', completed: false }
  ]);

  const addTask = () => {
    const newTask: Task = { id: Date.now(), description: singleTask, completed: false };
    setTasks([...tasks, newTask]);
    setSingleTask('');
  };

  const completeTask = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <Center w="100%" h="100vh">
      <Box bg="blackAlpha.700" borderRadius="10px" boxShadow="0 0 24px 2px rgba(0, 0, 100, 0.8)" w="100%" p={4} color="white">
        <Heading as="h3" fontSize="1.25rem" mb={2}>
          Tasks for the day
        </Heading>
        <Input mb={2} value={singleTask} onChange={e => setSingleTask(e.currentTarget.value)} />
        <Button mb={4} onClick={addTask}>
          Add Task
        </Button>
        <UnorderedList>
          {tasks.map(task => (
            <ListItem color={task.completed ? 'red' : ''} key={task.id} onClick={() => completeTask(task.id)}>
              {task.description}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Center>
  );
}
