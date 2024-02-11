import { Box, Input, Button, Flex } from '@chakra-ui/react';
import { FormEvent } from 'react';

interface TaskFormProps {
  singleTask: string;
  setSingleTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ singleTask, setSingleTask, addTask }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    singleTask.trim() !== '' && addTask();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input
            mb="2rem"
            mr={2}
            p={2}
            focusBorderColor="orange.400"
            name="taskInput"
            value={singleTask}
            onChange={e => setSingleTask(e.currentTarget.value)}
          />
          <Button
            fontSize={{ base: '0.9rem', md: '1rem' }}
            type="submit"
            mb={4}
            onClick={() => singleTask.trim() !== '' && addTask()}
          >
            Add Task
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default TaskForm;
