import { Box, Input, Button } from '@chakra-ui/react';

interface TaskFormProps {
  singleTask: string;
  setSingleTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ singleTask, setSingleTask, addTask, handleKeyDown }) => {
  return (
    <Box>
      <Input mb={5} value={singleTask} onChange={e => setSingleTask(e.currentTarget.value)} onKeyDown={handleKeyDown} />
      <Button
        mb={4}
        onClick={() => {
          singleTask.trim() !== '' && addTask;
        }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
