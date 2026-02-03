import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';
import { IncidentUpdateManyMutationInputSchema } from './IncidentUpdateManyMutationInputSchema';
import { IncidentUncheckedUpdateManyWithoutDutyInputSchema } from './IncidentUncheckedUpdateManyWithoutDutyInputSchema';

export const IncidentUpdateManyWithWhereWithoutDutyInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithWhereWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => IncidentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateManyMutationInputSchema), z.lazy(() => IncidentUncheckedUpdateManyWithoutDutyInputSchema) ]),
});

export default IncidentUpdateManyWithWhereWithoutDutyInputSchema;
