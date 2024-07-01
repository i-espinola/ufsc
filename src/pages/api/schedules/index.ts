import { MySQL } from '@app/helpers';
import { NextApiRequest, NextApiResponse } from 'next';
import { ContractProcedures, Table } from '@app/types';
import { Schedules } from '@app/services';

const schedules = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const api = new Schedules();

  switch (method) {
    case 'GET':
      const getResponse = await api.get();

      res.status(200).json({ response: getResponse.response });
      break;
    case 'DELETE':
      const id = Number(req?.body?.id);
      const deleteResponse = await api.delete(id);

      return res.status(200).json({ response: deleteResponse.response });
    case 'POST':
      const { name, lastName, phone, schedule, address, procedures_id } =
        req?.body;
      const postResponse = await api.post({
        name,
        lastName,
        phone,
        schedule,
        address,
        procedures_id,
      });

      return res.status(201).json({ response: postResponse.response });
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default schedules;
