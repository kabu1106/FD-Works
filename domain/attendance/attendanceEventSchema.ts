import { z } from "zod";
import { DateTimeSchema } from "../shared/dateschema";

export const WorkStartedSchema = z.object({
  eventType: z.literal("WorkStarted"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    at: DateTimeSchema,
  }),
});

export const BreakStartedSchema = z.object({
  eventType: z.literal("BreakStarted"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    at: DateTimeSchema,
  }),
});

export const BreakEndedSchema = z.object({
  eventType: z.literal("BreakEnded"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    at: DateTimeSchema,
  }),
});

export const WorkEndedSchema = z.object({
  eventType: z.literal("WorkEnded"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    at: DateTimeSchema,
  }),
});

export const AttendanceEventSchema = z.discriminatedUnion("eventType", [
    WorkStartedSchema,
    BreakStartedSchema,
    BreakEndedSchema,
    WorkEndedSchema,
  ]);
  
  export type AttendanceEventDTO =
    z.infer<typeof AttendanceEventSchema>;
  