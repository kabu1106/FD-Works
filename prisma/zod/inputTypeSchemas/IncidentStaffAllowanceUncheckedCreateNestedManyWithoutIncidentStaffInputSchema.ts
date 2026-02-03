import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceCreateManyIncidentStaffInputEnvelopeSchema } from './IncidentStaffAllowanceCreateManyIncidentStaffInputEnvelopeSchema';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';

export const IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema).array(), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffAllowanceCreateManyIncidentStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema;
