import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutDestinationInputSchema } from './IncidentUpdateWithoutDestinationInputSchema';
import { IncidentUncheckedUpdateWithoutDestinationInputSchema } from './IncidentUncheckedUpdateWithoutDestinationInputSchema';

export const IncidentUpdateWithWhereUniqueWithoutDestinationInputSchema: z.ZodType<Prisma.IncidentUpdateWithWhereUniqueWithoutDestinationInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateWithoutDestinationInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutDestinationInputSchema) ]),
});

export default IncidentUpdateWithWhereUniqueWithoutDestinationInputSchema;
