import { EverHourClient } from '../src/index';
import * as chai from 'chai';

const expect = chai.expect;

let projectId: string;


test('return projects list', async () => {
    const everHourClient = new EverHourClient();
    const list = await everHourClient.projects.find();
    projectId = list[0].id;
    expect(list).to.be.a('array');
    expect(list[0]).to.include.all.keys('canSyncTasks', 'users', 'id', 'platform', 'name', 'createdAt', 'foreign', 'favorite', 'hasWebhook', 'status', 'type', 'estimatesType', 'editable');
});

test('return one project', async () => {
    const everHourClient = new EverHourClient();
    const oneProject = await everHourClient.projects.findOne({ id: projectId });
    expect(oneProject).to.be.a('object');
    expect(oneProject).to.include.all.keys('canSyncTasks', 'users', 'id', 'platform', 'name', 'createdAt', 'foreign', 'favorite', 'hasWebhook', 'status', 'type', 'estimatesType', 'editable');

});

test('return sections list', async () => {
    const everHourClient = new EverHourClient();
    const list = await everHourClient.projects.listSection({ id: projectId });
    expect(list).to.be.a('array');
    expect(list[0]).to.include.all.keys('project', 'id', 'name', 'position', 'status');
});