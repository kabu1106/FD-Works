import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateManyWorkGroupInputSchema } from './OvertimeSlotCreateManyWorkGroupInputSchema';

export const OvertimeSlotCreateManyWorkGroupInputEnvelopeSchema: z.ZodType<Prisma.OvertimeSlotCreateManyWorkGroupInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OvertimeSlotCreateManyWorkGroupInputSchema), z.lazy(() => OvertimeSlotCreateManyWorkGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OvertimeSlotCreateManyWorkGroupInputEnvelopeSchema;
