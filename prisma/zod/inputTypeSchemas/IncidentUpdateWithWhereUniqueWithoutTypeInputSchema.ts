import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutTypeInputSchema } from './IncidentUpdateWithoutTypeInputSchema';
import { IncidentUncheckedUpdateWithoutTypeInputSchema } from './IncidentUncheckedUpdateWithoutTypeInputSchema';

export const IncidentUpdateWithWhereUniqueWithoutTypeInputSchema: z.ZodType<Prisma.IncidentUpdateWithWhereUniqueWithoutTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateWithoutTypeInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutTypeInputSchema) ]),
});

export default IncidentUpdateWithWhereUniqueWithoutTypeInputSchema;
