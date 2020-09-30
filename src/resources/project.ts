import Resource from './resource';
import { EverHourClient } from '..';
import ProjectRepresentation from '../defs/project';
import SectionRepresentation from '../defs/section';
import TaskRepresentation from '../defs/task';


export interface ProjectQuery {
    email?: string;
    first?: number;
    firstName?: string;
    lastName?: string;
    max?: number;
    search?: string;
    username?: string;
}

export class Projects extends Resource {

    /**
    * Projects
    */

    public find = this.makeRequest<ProjectQuery, ProjectRepresentation[]>({
        method: 'GET',
    });

    public create = this.makeRequest<ProjectRepresentation, { id: string }>({
        method: 'POST',
        returnResourceIdInLocationHeader: { field: 'id' },
    });

    public findOne = this.makeRequest<{ id: string }, ProjectRepresentation>({
        method: 'GET',
        path: '/{id}',
        urlParamKeys: ['id'],
        catchNotFound: true,
    });

    public update = this.makeUpdateRequest<
        { id: string },
        ProjectRepresentation,
        void
    >({
        method: 'PUT',
        path: '/{id}',
        urlParamKeys: ['id'],
    });

    public del = this.makeRequest<{ id: string }, void>({
        method: 'DELETE',
        path: '/{id}',
        urlParamKeys: ['id'],
    });


    /**
    * Sections
    */

    public listSection = this.makeRequest<{ id: string }, SectionRepresentation[]>({
        method: 'GET',
        path: '/{id}/sections',
        urlParamKeys: ['id'],
        payloadKey: 'sections',
    });

    /**
    * Tasks
    */

    public listTask = this.makeRequest<{ id: string }, TaskRepresentation[]>({
        method: 'GET',
        path: '/{id}/tasks',
        urlParamKeys: ['id'],
        payloadKey: 'sections',
    });

    constructor(client: EverHourClient) {
        super(client, {
            path: '/projects',
            getBaseUrl: () => client.baseUrl,
        });
    }


}