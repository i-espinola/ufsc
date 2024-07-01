import { MySQL } from '@app/helpers';
import { Table, PostProcedures } from '@app/types';

class Procedures {
  private readonly table: Table;

  constructor() {
    this.table = Table.Procedures;
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

  post = async (data: PostProcedures) => {
    const { name, available } = data;
    const query = `INSERT INTO ${this.table} (name, available) VALUES (
        '${name}',
        '${available}')`;
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

export default Procedures;
export { Procedures };
