// app/data/mockData.ts
export interface Tutor {
  id: string;
  name: string;
  subject: string;
  nextSession: string;
  avatar?: string;
}

export interface EnrolledClass {
  id: string;
  name: string;
  tutor: string;
  schedule: string;
  status: 'ongoing' | 'upcoming' | 'completed';
}

export interface AvailableTutor {
  id: string;
  name: string;
  subject: string;
  description: string;
  pricePerHour: number;
  rating?: number;
  avatar?: string;
}

export const mockTutors: Tutor[] = [
  {
    id: '1',
    name: 'Sarah Leah',
    subject: 'Mathematics',
    nextSession: 'Oct 15, 2:00pm',
  },
  {
    id: '2',
    name: 'Sarah Leah',
    subject: 'Mathematics',
    nextSession: 'Oct 15, 2:00pm',
  },
];

export const mockEnrolledClasses: EnrolledClass[] = [
  {
    id: '1',
    name: 'Physic 101',
    tutor: 'Sarah Lee',
    schedule: 'Mon, Wed, Fri - 4:00pm',
    status: 'ongoing',
  },
  {
    id: '2',
    name: 'Physic 101',
    tutor: 'Sarah Lee',
    schedule: 'Mon, Wed, Fri - 4:00pm',
    status: 'ongoing',
  },
];

export const mockAvailableTutors: AvailableTutor[] = [
  {
    id: '1',
    name: 'Brtukan Bolete',
    subject: 'Mathematics',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.',
    pricePerHour: 300,
  },
  {
    id: '2',
    name: 'Melaku Mola',
    subject: 'Physics',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.',
    pricePerHour: 300,
  },
  {
    id: '3',
    name: 'Hebrew Language',
    subject: 'Language',
    description:
      'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.',
    pricePerHour: 300,
  },
];