import { UnorderedList, ListItem, Text, IconButton, Flex, Checkbox, HStack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

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
        <ListItem mb={2} p={1} borderBottom="1px solid #aaa" key={task.id}>
          <Flex justifyContent="space-between" alignItems="center">
            <HStack>
              <Checkbox size="lg" name="taskComplete" colorScheme="orange" isChecked={task.completed} onChange={() => completeTask(task.id)}></Checkbox>
              <Text fontSize="xl" pb="4px" cursor="pointer" textDecoration={task.completed ? 'line-through' : ''}>
                {task.description}
              </Text>
            </HStack>
            <HStack>
              <IconButton icon={<DeleteIcon />} aria-label="Delete Task" colorScheme="red" size="xs" onClick={() => deleteTask(task.id)} />
            </HStack>
          </Flex>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
