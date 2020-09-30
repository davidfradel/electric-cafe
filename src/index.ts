import { defaultBaseUrl, defaultApiKey } from './utils/constants';
import { Projects } from './resources/project';
import { Sections } from './resources/section';
import { Tasks } from './resources/task';

import { AxiosRequestConfig } from 'axios';

export interface ConnectionConfig {
    baseUrl?: string;
    apiKey?: string;
    requestConfig?: AxiosRequestConfig;
}

export class EverHourClient {
    // Resources
    public projects: Projects;
    public sections: Sections;
    public tasks: Tasks;

    public baseUrl: string;
    private apiKey: string;
    private requestConfig?: AxiosRequestConfig;

    constructor(connectionConfig?: ConnectionConfig) {
        this.baseUrl =
            (connectionConfig && connectionConfig.baseUrl) || defaultBaseUrl;
        this.apiKey = connectionConfig && connectionConfig.apiKey || defaultApiKey;
        this.requestConfig = connectionConfig && connectionConfig.requestConfig;

        // Initialize resources
        this.projects = new Projects(this);
        this.sections = new Sections(this);
        this.tasks = new Tasks(this);
    }


    public getAccessToken() {
        return this.apiKey;
    }

    public getRequestConfig() {
        return this.requestConfig;
    }

    public setConfig(connectionConfig: ConnectionConfig) {
        if (
            typeof connectionConfig.baseUrl === 'string' &&
            connectionConfig.baseUrl
        ) {
            this.baseUrl = connectionConfig.baseUrl;
        }

        if (
            typeof connectionConfig.apiKey === 'string' &&
            connectionConfig.apiKey
        ) {
            this.apiKey = connectionConfig.apiKey;
        }
    }
}
