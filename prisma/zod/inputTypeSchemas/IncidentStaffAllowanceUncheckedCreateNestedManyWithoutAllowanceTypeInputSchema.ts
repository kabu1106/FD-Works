import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceCreateManyAllowanceTypeInputEnvelopeSchema } from './IncidentStaffAllowanceCreateManyAllowanceTypeInputEnvelopeSchema';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';

export const IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema).array(), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceCreateOrConnectWithoutAllowanceTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentStaffAllowanceCreateManyAllowanceTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema), z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema;
