import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';
import { IncidentUpdateManyMutationInputSchema } from './IncidentUpdateManyMutationInputSchema';
import { IncidentUncheckedUpdateManyWithoutDestinationInputSchema } from './IncidentUncheckedUpdateManyWithoutDestinationInputSchema';

export const IncidentUpdateManyWithWhereWithoutDestinationInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithWhereWithoutDestinationInput> = z.strictObject({
  where: z.lazy(() => IncidentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateManyMutationInputSchema), z.lazy(() => IncidentUncheckedUpdateManyWithoutDestinationInputSchema) ]),
});

export default IncidentUpdateManyWithWhereWithoutDestinationInputSchema;
