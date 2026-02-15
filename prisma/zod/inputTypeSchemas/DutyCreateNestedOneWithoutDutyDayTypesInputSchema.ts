import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutDutyDayTypesInputSchema } from './DutyCreateWithoutDutyDayTypesInputSchema';
import { DutyUncheckedCreateWithoutDutyDayTypesInputSchema } from './DutyUncheckedCreateWithoutDutyDayTypesInputSchema';
import { DutyCreateOrConnectWithoutDutyDayTypesInputSchema } from './DutyCreateOrConnectWithoutDutyDayTypesInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';

export const DutyCreateNestedOneWithoutDutyDayTypesInputSchema: z.ZodType<Prisma.DutyCreateNestedOneWithoutDutyDayTypesInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutDutyDayTypesInputSchema), z.lazy(() => DutyUncheckedCreateWithoutDutyDayTypesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutDutyDayTypesInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
});

export default DutyCreateNestedOneWithoutDutyDayTypesInputSchema;
