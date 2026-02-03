import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.cuid().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
});

export default SessionUncheckedCreateWithoutUserInputSchema;
