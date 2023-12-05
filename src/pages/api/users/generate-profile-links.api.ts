import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

const linksBodySchema = z.object({
  links: z.array(
    z.object({
      socialName: z.string(),
      socialUrl: z.string(),
      buttonColor: z.string(),
    }),
  ),
})
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }
  /**
   * const userSavedLinks = await prisma.userLink.findMany({
    select:{
      socialName: true
    },
    where: {
      user_id: session.user.id
    }
  })
   */
  await prisma.userLink.deleteMany({
    where: {
      user_id: session.user.id
    }
  })
  const { links } = linksBodySchema.parse(req.body)
  
  await Promise.all(
    links.map((link) => {
      return prisma.userLink.create({
        data: {
          user_id: session.user.id,
          socialName: link.socialName,
          socialUrl: link.socialUrl,
          buttonColor: link.buttonColor,
        },
      })
    }),
  )
  return res.status(201).end()
}
