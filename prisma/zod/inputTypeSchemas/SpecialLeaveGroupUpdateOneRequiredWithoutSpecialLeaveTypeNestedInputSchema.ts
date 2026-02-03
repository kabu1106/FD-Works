import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupCreateOrConnectWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupCreateOrConnectWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupUpsertWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUpsertWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupWhereUniqueInputSchema } from './SpecialLeaveGroupWhereUniqueInputSchema';
import { SpecialLeaveGroupUpdateToOneWithWhereWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUpdateToOneWithWhereWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUpdateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupUncheckedUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUncheckedUpdateWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveGroupUpdateOneRequiredWithoutSpecialLeaveTypeNestedInputSchema: z.ZodType<Prisma.SpecialLeaveGroupUpdateOneRequiredWithoutSpecialLeaveTypeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SpecialLeaveGroupCreateOrConnectWithoutSpecialLeaveTypeInputSchema).optional(),
  upsert: z.lazy(() => SpecialLeaveGroupUpsertWithoutSpecialLeaveTypeInputSchema).optional(),
  connect: z.lazy(() => SpecialLeaveGroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SpecialLeaveGroupUpdateToOneWithWhereWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveGroupUpdateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveGroupUncheckedUpdateWithoutSpecialLeaveTypeInputSchema) ]).optional(),
});

export default SpecialLeaveGroupUpdateOneRequiredWithoutSpecialLeaveTypeNestedInputSchema;
