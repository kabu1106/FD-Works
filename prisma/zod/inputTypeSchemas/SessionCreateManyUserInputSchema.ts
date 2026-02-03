import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.strictObject({
  id: z.cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
});

export default SessionCreateManyUserInputSchema;
