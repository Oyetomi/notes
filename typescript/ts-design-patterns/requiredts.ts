enum PRIORITY { // @ts-ignore
  DEFAULT, // @ts-ignore
  LOW, // @ts-ignore
  HIGH, // @ts-ignore
}

interface TodoItemProps {
  title: string;
  description: string;
  priority: PRIORITY;
}

type OriginalTodoItemProps = Required<TodoItemProps>;
