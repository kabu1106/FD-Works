import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutDestinationInputSchema } from './IncidentUpdateWithoutDestinationInputSchema';
import { IncidentUncheckedUpdateWithoutDestinationInputSchema } from './IncidentUncheckedUpdateWithoutDestinationInputSchema';
import { IncidentCreateWithoutDestinationInputSchema } from './IncidentCreateWithoutDestinationInputSchema';
import { IncidentUncheckedCreateWithoutDestinationInputSchema } from './IncidentUncheckedCreateWithoutDestinationInputSchema';

export const IncidentUpsertWithWhereUniqueWithoutDestinationInputSchema: z.ZodType<Prisma.IncidentUpsertWithWhereUniqueWithoutDestinationInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentUpdateWithoutDestinationInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutDestinationInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentCreateWithoutDestinationInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutDestinationInputSchema) ]),
});

export default IncidentUpsertWithWhereUniqueWithoutDestinationInputSchema;
