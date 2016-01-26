// Generated using typescript-generator version 1.4.152 on 2016-01-25 15:30:28.

interface Record {
    id: number;
    project: string;
    description: string;
    inhouse: boolean;
    startTime: Date;
    endTime: Date;
}

interface SummaryProjectDayDTO {
    time: number;
    tasks: string;
    project: string;
    date: Date;
    outputTime: number;
}

interface SummaryDayDTO {
    entries: SummaryProjectDayDTO[];
    date: Date;
    sum: number;
}
