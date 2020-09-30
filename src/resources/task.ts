import Resource from './resource';
import { EverHourClient } from '..';
import TaskRepresentation from '../defs/task';

export interface ProjectQuery {
    name?: string;
}

export class Tasks extends Resource {

    public create = this.makeRequest<TaskRepresentation, { id: string }>({
        method: 'POST',
        returnResourceIdInLocationHeader: { field: 'id' },
    });

    public findOne = this.makeRequest<{ id: string }, TaskRepresentation>({
        method: 'GET',
        path: '/{id}',
        urlParamKeys: ['id'],
        catchNotFound: true,
    });

    public del = this.makeRequest<{ id: string }, void>({
        method: 'DELETE',
        path: '/{id}',
        urlParamKeys: ['id'],
    });

    constructor(client: EverHourClient) {
        super(client, {
            path: '/tasks',
            getBaseUrl: () => client.baseUrl,
        });
    }
}