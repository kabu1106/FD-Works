import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentCreateWithoutIncidentStaffEngagementsInputSchema } from './IncidentCreateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema';

export const IncidentCreateOrConnectWithoutIncidentStaffEngagementsInputSchema: z.ZodType<Prisma.IncidentCreateOrConnectWithoutIncidentStaffEngagementsInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentCreateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema) ]),
});

export default IncidentCreateOrConnectWithoutIncidentStaffEngagementsInputSchema;
