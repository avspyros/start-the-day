import { UnorderedList, ListItem, Text, Button, Flex } from '@chakra-ui/react';

const listItemStyles = {
  mb: 4,
  borderBottom: '1px solid #aaa'
};

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  completeTask: (id: number) => void;
}

export default function TaskList({ tasks, completeTask }: TaskListProps) {
  return (
    <UnorderedList styleType="none" pl={1} m={0}>
      {tasks.map(task => (
        <ListItem sx={listItemStyles} key={task.id}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text cursor="pointer" textDecoration={task.completed ? 'line-through' : ''} onClick={() => completeTask(task.id)}>
              {task.description}
            </Text>
            <Button colorScheme="red" size="xs">
              Delete
            </Button>
          </Flex>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
