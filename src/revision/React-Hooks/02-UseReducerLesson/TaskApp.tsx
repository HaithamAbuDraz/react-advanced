import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import type { Task, TaskAction } from './types';

function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${(action as { type: string }).type}`);
    }
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text,
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Task App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;

const initialTasks: Task[] = [
  { id: 0, text: 'Task 1', done: true },
  { id: 1, text: 'Task 2', done: false },
  { id: 2, text: 'Task 3', done: false },
];