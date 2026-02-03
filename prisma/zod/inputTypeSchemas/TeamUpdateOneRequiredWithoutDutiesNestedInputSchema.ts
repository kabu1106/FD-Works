import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutDutiesInputSchema } from './TeamCreateWithoutDutiesInputSchema';
import { TeamUncheckedCreateWithoutDutiesInputSchema } from './TeamUncheckedCreateWithoutDutiesInputSchema';
import { TeamCreateOrConnectWithoutDutiesInputSchema } from './TeamCreateOrConnectWithoutDutiesInputSchema';
import { TeamUpsertWithoutDutiesInputSchema } from './TeamUpsertWithoutDutiesInputSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateToOneWithWhereWithoutDutiesInputSchema } from './TeamUpdateToOneWithWhereWithoutDutiesInputSchema';
import { TeamUpdateWithoutDutiesInputSchema } from './TeamUpdateWithoutDutiesInputSchema';
import { TeamUncheckedUpdateWithoutDutiesInputSchema } from './TeamUncheckedUpdateWithoutDutiesInputSchema';

export const TeamUpdateOneRequiredWithoutDutiesNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneRequiredWithoutDutiesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutDutiesInputSchema), z.lazy(() => TeamUncheckedCreateWithoutDutiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutDutiesInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutDutiesInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutDutiesInputSchema), z.lazy(() => TeamUpdateWithoutDutiesInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutDutiesInputSchema) ]).optional(),
});

export default TeamUpdateOneRequiredWithoutDutiesNestedInputSchema;
