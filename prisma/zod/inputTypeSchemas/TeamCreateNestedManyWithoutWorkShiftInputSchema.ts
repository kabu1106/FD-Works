import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutWorkShiftInputSchema } from './TeamCreateWithoutWorkShiftInputSchema';
import { TeamUncheckedCreateWithoutWorkShiftInputSchema } from './TeamUncheckedCreateWithoutWorkShiftInputSchema';
import { TeamCreateOrConnectWithoutWorkShiftInputSchema } from './TeamCreateOrConnectWithoutWorkShiftInputSchema';
import { TeamCreateManyWorkShiftInputEnvelopeSchema } from './TeamCreateManyWorkShiftInputEnvelopeSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';

export const TeamCreateNestedManyWithoutWorkShiftInputSchema: z.ZodType<Prisma.TeamCreateNestedManyWithoutWorkShiftInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutWorkShiftInputSchema), z.lazy(() => TeamCreateWithoutWorkShiftInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutWorkShiftInputSchema), z.lazy(() => TeamUncheckedCreateWithoutWorkShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutWorkShiftInputSchema), z.lazy(() => TeamCreateOrConnectWithoutWorkShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyWorkShiftInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
});

export default TeamCreateNestedManyWithoutWorkShiftInputSchema;
