export class Todo {
  id: number;
  name: string;
  description: string;
  createdDate: Date;
  dueDate: Date;
  status: number;

  constructor(id: number, name: string, description: string, dueDate: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdDate = new Date();
    this.dueDate = dueDate;
    this.status = 0;
  }
}
