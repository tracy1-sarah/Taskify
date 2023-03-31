export interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }
  

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean
}

