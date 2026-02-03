import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';
import { IncidentUpdateManyMutationInputSchema } from './IncidentUpdateManyMutationInputSchema';
import { IncidentUncheckedUpdateManyWithoutLocationInputSchema } from './IncidentUncheckedUpdateManyWithoutLocationInputSchema';

export const IncidentUpdateManyWithWhereWithoutLocationInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithWhereWithoutLocationInput> = z.strictObject({
  where: z.lazy(() => IncidentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateManyMutationInputSchema), z.lazy(() => IncidentUncheckedUpdateManyWithoutLocationInputSchema) ]),
});

export default IncidentUpdateManyWithWhereWithoutLocationInputSchema;
