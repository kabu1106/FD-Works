import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateManyDepartmentsInputSchema } from './TeamCreateManyDepartmentsInputSchema';

export const TeamCreateManyDepartmentsInputEnvelopeSchema: z.ZodType<Prisma.TeamCreateManyDepartmentsInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TeamCreateManyDepartmentsInputSchema), z.lazy(() => TeamCreateManyDepartmentsInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TeamCreateManyDepartmentsInputEnvelopeSchema;
