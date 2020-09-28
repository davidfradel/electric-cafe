export default interface Project {
    canSyncTasks: boolean;
    users: Array<number>;
    id: string;
    platform: string;
    name: string;
    createdAt: string;
    foreign: boolean;
    favorite: boolean;
    hasWebhook: boolean;
    status: string;
    type: string;
    estimatesType: string;
    editable: boolean;
}