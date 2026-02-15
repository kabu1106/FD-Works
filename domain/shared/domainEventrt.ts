import { AttendanceEvent } from "../attendance/attendance-events";
import { DutyEvent } from "../duty/duty-events";
import { IncidentEvent } from "../incident/incident-events";

export type DomainEvent =
  | DutyEvent
  | IncidentEvent
  | AttendanceEvent;
