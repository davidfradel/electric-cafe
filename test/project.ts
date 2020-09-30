import { EverHourClient } from '../src/index';
import * as chai from 'chai';

const expect = chai.expect;

test('list all projects', async () => {
    const everHourClient = new EverHourClient();
    const list = await everHourClient.projects.find();
    expect(list).to.be.a('array');
    expect(list[0]).to.include.all.keys('canSyncTasks', 'users', 'id', 'platform', 'name', 'createdAt', 'foreign', 'favorite', 'hasWebhook', 'status', 'type', 'estimatesType', 'editable');
});
