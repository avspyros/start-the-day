import { Flex, HStack, Heading, IconButton, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
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
  const tasksProgress = () => {
    if (tasks.length !== 0) {
      return (completedTasksCount * 100) / tasks.length;
    }
  };

  return (
    <Flex mb="2rem" justifyContent="space-between" alignItems="center">
      <HStack spacing="1rem">
        <Heading as="h3" fontSize="2xl">
          Tasks for the day
        </Heading>
        <CircularProgress value={tasksProgress()} color="orange.500" thickness="10px" size="3rem">
          <CircularProgressLabel fontSize="0.75rem">
            {completedTasksCount}/{tasks.length}
          </CircularProgressLabel>
        </CircularProgress>
      </HStack>
      <HStack>
        <IconButton icon={<RepeatIcon />} aria-label="Delete Task" colorScheme="red" size="sm" fontSize="1rem" onClick={() => clearTasks()} />
      </HStack>
    </Flex>
  );
}

export default TaskHeader;
