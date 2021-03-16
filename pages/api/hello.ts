import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
  await new Promise((r) => setTimeout(r, 500))
  res.status(200).json({ name: 'John Doe' })
}
