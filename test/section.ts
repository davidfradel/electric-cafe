import { EverHourClient } from '../src/index';
import * as chai from 'chai';

const expect = chai.expect;

let projectId: string;
let sectionId: number;


test('return projects list', async () => {
    const everHourClient = new EverHourClient();
    const list = await everHourClient.projects.find();
    projectId = list[0].id;
    expect(list).to.be.a('array');
    expect(list[0]).to.include.all.keys('canSyncTasks', 'users', 'id', 'platform', 'name', 'createdAt', 'foreign', 'favorite', 'hasWebhook', 'status', 'type', 'estimatesType', 'editable');
});

test('return sections list', async () => {
    const everHourClient = new EverHourClient();
    const list = await everHourClient.projects.listSection({ id: projectId });
    sectionId = list[0].id;
    expect(list).to.be.a('array');
    expect(list[0]).to.include.all.keys('project', 'id', 'name', 'position', 'status');
});

test('return one section', async () => {
    const everHourClient = new EverHourClient();
    const oneSection = await everHourClient.sections.findOne({ id: sectionId })
    expect(oneSection).to.be.a('object');
    expect(oneSection).to.include.all.keys('project', 'id', 'name', 'position', 'status');
});
