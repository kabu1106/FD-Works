import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.strictObject({
  id: z.cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
});

export default SessionCreateWithoutUserInputSchema;
