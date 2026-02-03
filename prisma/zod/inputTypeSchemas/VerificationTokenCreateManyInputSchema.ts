import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.strictObject({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
});

export default VerificationTokenCreateManyInputSchema;
