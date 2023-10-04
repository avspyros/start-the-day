import { UnorderedList, ListItem, Text, Button, Flex } from '@chakra-ui/react';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskList({ tasks, completeTask, deleteTask }: TaskListProps) {
  if (tasks.length === 0) return <Text color={'gray.400'}>No tasks for the day...</Text>;

  return (
    <UnorderedList minH="10rem" styleType="none" pl={1} m={0}>
      {tasks.map(task => (
        <ListItem mb={4} borderBottom="1px solid #aaa" key={task.id}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="xl" pb="4px" cursor="pointer" textDecoration={task.completed ? 'line-through' : ''} onClick={() => completeTask(task.id)}>
              {task.description}
            </Text>
            <Button colorScheme="red" size="xs" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </Flex>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
