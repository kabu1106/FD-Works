import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutDutyInputSchema } from './IncidentUpdateWithoutDutyInputSchema';
import { IncidentUncheckedUpdateWithoutDutyInputSchema } from './IncidentUncheckedUpdateWithoutDutyInputSchema';

export const IncidentUpdateWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.IncidentUpdateWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateWithoutDutyInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutDutyInputSchema) ]),
});

export default IncidentUpdateWithWhereUniqueWithoutDutyInputSchema;
