import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';
import { IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema';

export const IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema) ]),
});

export default IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema;
