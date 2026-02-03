import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';
import { IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema';

export const IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema) ]),
});

export default IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema;
