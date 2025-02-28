import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Get the health endpoint handler
 *
 * See https://datatracker.ietf.org/doc/draft-inadarei-api-health-check for
 * more details on what this response should contain.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .setHeader('content-type', 'application/json')
    .setHeader('cache-control', 'no-store, max-age=0')
    .json({ status: 'pass' })
}
