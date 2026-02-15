/**
 * Splits a time range into segments that do not cross UTC date boundaries.
 * Assumes startAt < endAt and both are valid ISO strings.
 */
export function splitByDateBoundary(
    startAt: string,
    endAt: string
  ): { startAt: string; endAt: string }[] {
    const start = new Date(startAt);
    const end = new Date(endAt);
  
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      throw new Error("Invalid date input");
    }
  
    if (start >= end) {
      throw new Error("startAt must be before endAt");
    }
  
    const result: { startAt: string; endAt: string }[] = [];
    let cursor = new Date(start);
  
    while (cursor < end) {
      const nextMidnight = new Date(cursor);
      nextMidnight.setUTCHours(24, 0, 0, 0);
  
      const segmentEnd = nextMidnight < end ? nextMidnight : end;
  
      result.push({
        startAt: cursor.toISOString(),
        endAt: segmentEnd.toISOString(),
      });
  
      cursor = segmentEnd;
    }
  
    return result;
  }
  