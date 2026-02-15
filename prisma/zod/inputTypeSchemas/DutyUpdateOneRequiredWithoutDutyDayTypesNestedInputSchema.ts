import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutDutyDayTypesInputSchema } from './DutyCreateWithoutDutyDayTypesInputSchema';
import { DutyUncheckedCreateWithoutDutyDayTypesInputSchema } from './DutyUncheckedCreateWithoutDutyDayTypesInputSchema';
import { DutyCreateOrConnectWithoutDutyDayTypesInputSchema } from './DutyCreateOrConnectWithoutDutyDayTypesInputSchema';
import { DutyUpsertWithoutDutyDayTypesInputSchema } from './DutyUpsertWithoutDutyDayTypesInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateToOneWithWhereWithoutDutyDayTypesInputSchema } from './DutyUpdateToOneWithWhereWithoutDutyDayTypesInputSchema';
import { DutyUpdateWithoutDutyDayTypesInputSchema } from './DutyUpdateWithoutDutyDayTypesInputSchema';
import { DutyUncheckedUpdateWithoutDutyDayTypesInputSchema } from './DutyUncheckedUpdateWithoutDutyDayTypesInputSchema';

export const DutyUpdateOneRequiredWithoutDutyDayTypesNestedInputSchema: z.ZodType<Prisma.DutyUpdateOneRequiredWithoutDutyDayTypesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutDutyDayTypesInputSchema), z.lazy(() => DutyUncheckedCreateWithoutDutyDayTypesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutDutyDayTypesInputSchema).optional(),
  upsert: z.lazy(() => DutyUpsertWithoutDutyDayTypesInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DutyUpdateToOneWithWhereWithoutDutyDayTypesInputSchema), z.lazy(() => DutyUpdateWithoutDutyDayTypesInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutDutyDayTypesInputSchema) ]).optional(),
});

export default DutyUpdateOneRequiredWithoutDutyDayTypesNestedInputSchema;
