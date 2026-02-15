import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutIncidentStaffEngagementsInputSchema } from './IncidentCreateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentCreateOrConnectWithoutIncidentStaffEngagementsInputSchema } from './IncidentCreateOrConnectWithoutIncidentStaffEngagementsInputSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';

export const IncidentCreateNestedOneWithoutIncidentStaffEngagementsInputSchema: z.ZodType<Prisma.IncidentCreateNestedOneWithoutIncidentStaffEngagementsInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentCreateOrConnectWithoutIncidentStaffEngagementsInputSchema).optional(),
  connect: z.lazy(() => IncidentWhereUniqueInputSchema).optional(),
});

export default IncidentCreateNestedOneWithoutIncidentStaffEngagementsInputSchema;
