import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutTeamInputSchema } from './DutyCreateWithoutTeamInputSchema';
import { DutyUncheckedCreateWithoutTeamInputSchema } from './DutyUncheckedCreateWithoutTeamInputSchema';
import { DutyCreateOrConnectWithoutTeamInputSchema } from './DutyCreateOrConnectWithoutTeamInputSchema';
import { DutyCreateManyTeamInputEnvelopeSchema } from './DutyCreateManyTeamInputEnvelopeSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';

export const DutyUncheckedCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.DutyUncheckedCreateNestedManyWithoutTeamInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutTeamInputSchema), z.lazy(() => DutyCreateWithoutTeamInputSchema).array(), z.lazy(() => DutyUncheckedCreateWithoutTeamInputSchema), z.lazy(() => DutyUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DutyCreateOrConnectWithoutTeamInputSchema), z.lazy(() => DutyCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DutyCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DutyWhereUniqueInputSchema), z.lazy(() => DutyWhereUniqueInputSchema).array() ]).optional(),
});

export default DutyUncheckedCreateNestedManyWithoutTeamInputSchema;
