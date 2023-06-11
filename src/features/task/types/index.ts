export interface TaskItem {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface TaskRequest {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
}
