import { UnorderedList, ListItem } from '@chakra-ui/react';

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  completeTask: (id: number) => void;
}

const TaskList = ({ tasks, completeTask }: TaskListProps) => {
  return (
    <UnorderedList styleType="none" pl={1} m={0}>
      {tasks.map(task => (
        <ListItem mb={2} borderBottom={'1px solid #aaa'} textDecoration={task.completed ? 'line-through' : ''} key={task.id} onClick={() => completeTask(task.id)}>
          {task.description}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default TaskList;
