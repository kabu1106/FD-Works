import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryCreateManyAllowanceTypeInputEnvelopeSchema } from './IncidentAllowanceSummaryCreateManyAllowanceTypeInputEnvelopeSchema';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';

export const IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema).array(), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentAllowanceSummaryCreateManyAllowanceTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema;
