import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutLocationInputSchema } from './IncidentUpdateWithoutLocationInputSchema';
import { IncidentUncheckedUpdateWithoutLocationInputSchema } from './IncidentUncheckedUpdateWithoutLocationInputSchema';

export const IncidentUpdateWithWhereUniqueWithoutLocationInputSchema: z.ZodType<Prisma.IncidentUpdateWithWhereUniqueWithoutLocationInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateWithoutLocationInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutLocationInputSchema) ]),
});

export default IncidentUpdateWithWhereUniqueWithoutLocationInputSchema;
