export enum Table {
  Procedures = 'procedures',
  Schedules = 'schedules',
}

export type TableProcedures = {
  id: number;
  name: string;
  available: number;
}[];

export type TableSchedules = {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  address: string;
  schedule: string;
  procedures_id: number;
}[];

export type ContractProcedures = {
  id: number;
  name: string;
  available: boolean;
};

export type ContractSchedules = {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  address: string;
  schedule: string;
  procedures_id: string;
};

export type PostSchedules = {
  name: string;
  lastName: string;
  phone: string;
  address: string;
  schedule: string;
  procedures_id: number;
};

export type PostProcedures = {
  name: string;
  available: boolean;
};
