import { EverHourClient } from '../src/index';
import * as chai from 'chai';

const expect = chai.expect;

let projectId: string;
let taskId: string;


test('return projects list', async () => {
    const everHourClient = new EverHourClient();
    const list = await everHourClient.projects.find();
    projectId = list[0].id;
    expect(list).to.be.a('array');
    expect(list[0]).to.include.all.keys('canSyncTasks', 'users', 'id', 'platform', 'name', 'createdAt', 'foreign', 'favorite', 'hasWebhook', 'status', 'type', 'estimatesType', 'editable');
});

test('return sections list', async () => {
    const everHourClient = new EverHourClient();
    const list = await everHourClient.projects.listTask({ id: projectId });
    taskId = list[0].id;
    expect(list).to.be.a('array');
    expect(list[0]).to.include.all.keys('id', 'name', 'type', 'status', 'iteration', 'description', 'projects', 'position', 'createdAt', 'labels', 'section');
});

test('return one section', async () => {
    const everHourClient = new EverHourClient();
    const oneTask = await everHourClient.tasks.findOne({ id: taskId })
    expect(oneTask).to.be.a('object');
    expect(oneTask).to.include.all.keys('iteration', 'projects', 'section', 'attributes', 'metrics', 'id', 'type', 'name', 'status', 'labels', 'createdAt', 'description', 'position');
});


