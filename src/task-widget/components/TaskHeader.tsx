import { Flex, HStack, Heading, IconButton, Text } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskHeaderProps {
  tasks: Task[];
  clearTasks: () => void;
}

function TaskHeader({ tasks, clearTasks }: TaskHeaderProps) {
  const completedTasksCount = tasks.filter(task => task.completed).length;

  return (
    <Flex mb="2rem" justifyContent="space-between" alignItems="center">
      <Heading as="h3" fontSize="2xl">
        Tasks for the day
      </Heading>
      <HStack>
        <Text fontSize="2xl" color={'green.500'}>
          {completedTasksCount}
        </Text>{' '}
        <Text fontSize="2xl" color={'gray.400'}>
          /
        </Text>{' '}
        <Text fontSize="2xl" color={'red.500'} mr={2}>
          {tasks.length}
        </Text>
      </HStack>
      <IconButton icon={<RepeatIcon />} aria-label="Delete Task" colorScheme="red" size="xs" onClick={() => clearTasks()} />
    </Flex>
  );
}

export default TaskHeader;
