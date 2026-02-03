import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';
import { IncidentUpdateManyMutationInputSchema } from './IncidentUpdateManyMutationInputSchema';
import { IncidentUncheckedUpdateManyWithoutTypeInputSchema } from './IncidentUncheckedUpdateManyWithoutTypeInputSchema';

export const IncidentUpdateManyWithWhereWithoutTypeInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithWhereWithoutTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateManyMutationInputSchema), z.lazy(() => IncidentUncheckedUpdateManyWithoutTypeInputSchema) ]),
});

export default IncidentUpdateManyWithWhereWithoutTypeInputSchema;
