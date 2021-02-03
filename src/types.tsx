export interface Event {
  id: string;
  date: string | Date;
  limitDate: string | Date;
  createdAt: string | Date;
  limitTime?: string;
  description: string;
  name: string;
  type: ExamType;
  data?: {
    answeredItems: number;
    itemsTotal: number;
  }
}

export type ExamType = 'SIMULATED' | 'EXAM';

export interface Answer {
  [questonId: string]: string;
}

export interface Proof {
  id: string;
  events: Event;
  exam: ExamType;
}

export interface Student {
  id: string;
  exam: {
    description: string;
    name: string;
    type: ExamType;
  };
  answers?: Answer;
}