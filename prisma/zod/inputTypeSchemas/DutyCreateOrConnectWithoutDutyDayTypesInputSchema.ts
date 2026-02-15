import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyCreateWithoutDutyDayTypesInputSchema } from './DutyCreateWithoutDutyDayTypesInputSchema';
import { DutyUncheckedCreateWithoutDutyDayTypesInputSchema } from './DutyUncheckedCreateWithoutDutyDayTypesInputSchema';

export const DutyCreateOrConnectWithoutDutyDayTypesInputSchema: z.ZodType<Prisma.DutyCreateOrConnectWithoutDutyDayTypesInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyCreateWithoutDutyDayTypesInputSchema), z.lazy(() => DutyUncheckedCreateWithoutDutyDayTypesInputSchema) ]),
});

export default DutyCreateOrConnectWithoutDutyDayTypesInputSchema;
