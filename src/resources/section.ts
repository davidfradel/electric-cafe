import Resource from './resource';
import { EverHourClient } from '..';
import SectionRepresentation from '../defs/section';

export interface ProjectQuery {
    name?: string;
}

export class Sections extends Resource {

    public create = this.makeRequest<SectionRepresentation, { id: string }>({
        method: 'POST',
        returnResourceIdInLocationHeader: { field: 'id' },
    });

    public findOne = this.makeRequest<{ id: number }, SectionRepresentation>({
        method: 'GET',
        path: '/{id}',
        urlParamKeys: ['id'],
        catchNotFound: true,
    });

    public del = this.makeRequest<{ id: number }, void>({
        method: 'DELETE',
        path: '/{id}',
        urlParamKeys: ['id'],
    });

    constructor(client: EverHourClient) {
        super(client, {
            path: '/sections',
            getBaseUrl: () => client.baseUrl,
        });
    }
}