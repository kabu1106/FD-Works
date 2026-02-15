import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentUpdateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUpdateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentCreateWithoutIncidentStaffEngagementsInputSchema } from './IncidentCreateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentWhereInputSchema } from './IncidentWhereInputSchema';

export const IncidentUpsertWithoutIncidentStaffEngagementsInputSchema: z.ZodType<Prisma.IncidentUpsertWithoutIncidentStaffEngagementsInput> = z.strictObject({
  update: z.union([ z.lazy(() => IncidentUpdateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentCreateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema) ]),
  where: z.lazy(() => IncidentWhereInputSchema).optional(),
});

export default IncidentUpsertWithoutIncidentStaffEngagementsInputSchema;
