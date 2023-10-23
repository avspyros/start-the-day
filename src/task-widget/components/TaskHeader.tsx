import { Flex, HStack, Heading, IconButton, CircularProgress, CircularProgressLabel, Tooltip } from '@chakra-ui/react';
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
        <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }}>
          Tasks for the day
        </Heading>
        <CircularProgress value={tasksProgress()} color="orange.500" thickness="10px" size="3rem">
          <CircularProgressLabel fontSize="0.75rem">
            {completedTasksCount}/{tasks.length}
          </CircularProgressLabel>
        </CircularProgress>
      </HStack>
      <HStack>
        <Tooltip label="Clear Tasks" aria-label="A tooltip" borderRadius="8px" placement="left-start" openDelay={800}>
          <IconButton
            icon={<RepeatIcon />}
            aria-label="Delete Task"
            colorScheme="red"
            size="sm"
            fontSize="1rem"
            onClick={() => clearTasks()}
          />
        </Tooltip>
      </HStack>
    </Flex>
  );
}

export default TaskHeader;
