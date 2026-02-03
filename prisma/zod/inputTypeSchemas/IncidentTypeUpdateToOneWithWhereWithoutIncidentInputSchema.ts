import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeWhereInputSchema } from './IncidentTypeWhereInputSchema';
import { IncidentTypeUpdateWithoutIncidentInputSchema } from './IncidentTypeUpdateWithoutIncidentInputSchema';
import { IncidentTypeUncheckedUpdateWithoutIncidentInputSchema } from './IncidentTypeUncheckedUpdateWithoutIncidentInputSchema';

export const IncidentTypeUpdateToOneWithWhereWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentTypeUpdateToOneWithWhereWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentTypeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IncidentTypeUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentTypeUncheckedUpdateWithoutIncidentInputSchema) ]),
});

export default IncidentTypeUpdateToOneWithWhereWithoutIncidentInputSchema;
