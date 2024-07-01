import { MySQL } from '@app/helpers';
import { Table, PostSchedules } from '@app/types';

class Schedules {
  private readonly table: Table;

  constructor() {
    this.table = Table.Schedules;
  }

  private execute = async (query: string) => {
    try {
      const mysql = await MySQL();
      const [data] = await mysql.execute(query);

      await mysql.end();

      return { response: data };
    } catch (error) {
      return { error };
    }
  };

  post = async (data: PostSchedules) => {
    const { name, lastName, phone, schedule, address, procedures_id } = data;
    const query = `INSERT INTO ${this.table} (name, lastName, phone, schedule, address, procedures_id) VALUES (
        '${name}',
        '${lastName}',
        '${phone}',
        '${schedule}',
        '${address}',
        '${procedures_id}')`;
    const response = await this.execute(query);

    if (response.error) {
      return response;
    }

    return { response: 'ok' };
  };

  get = async () => {
    const query = `SELECT * FROM ${this.table}`;
    const response = await this.execute(query);

    return response;
  };

  delete = async (id: number) => {
    const query = `DELETE FROM ${this.table} WHERE (id = ${id})`;
    const response = await this.execute(query);

    if (response.error) {
      return response;
    }

    return { response: 'ok' };
  };
}

export default Schedules;
export { Schedules };
