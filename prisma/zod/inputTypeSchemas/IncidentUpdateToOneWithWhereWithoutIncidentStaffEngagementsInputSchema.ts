import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereInputSchema } from './IncidentWhereInputSchema';
import { IncidentUpdateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUpdateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema';

export const IncidentUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema: z.ZodType<Prisma.IncidentUpdateToOneWithWhereWithoutIncidentStaffEngagementsInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IncidentUpdateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema) ]),
});

export default IncidentUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema;
