import { MySQL } from '@app/helpers';
import { NextApiRequest, NextApiResponse } from 'next';
import { ContractProcedures, Table } from '@app/types';

import { Procedures } from '@app/services';

const procedures = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const procedures = new Procedures();

  switch (method) {
    case 'GET':
      const getResponse = await procedures.get();

      return res.status(200).json({ response: getResponse.response });
    case 'DELETE':
      const id = Number(req?.body?.id);
      const deleteResponse = await procedures.delete(id);

      return res.status(200).json({ response: deleteResponse.response });
    case 'POST':
      const { name, available } = req?.body;
      const postResponse = await procedures.post({ name, available });

      return res.status(201).json({ response: postResponse.response });
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default procedures;
