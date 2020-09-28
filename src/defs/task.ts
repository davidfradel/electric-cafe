export default interface TaskRepresentation {
    iteration: string;
    projects: Array<string>;
    section: number;
    attributes: Array<string>;
    metrics: Array<string>;
    id: string;
    type: string;
    name: string;
    status: string;
    labels: Array<string>;
    createdAt: string;
    description: string;
    position: number;
}