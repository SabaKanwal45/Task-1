import { createAsyncDelay } from '../../utils';
import { IProject } from 'store/modules/project/reducer';

export interface IError {
    message: string
}

const fetchProjectById = (projectId: string): Promise<IProject> => {
    return createAsyncDelay(1000).then(() => {
        if (!projectId) {
            throw new Error('Error case');
        }
        const tmpResult: IProject = {
            id: 'test',
            name: 'tester',
            createdAt: new Date(),
        };
        return tmpResult;
    });
};

export default {
    fetchProjectById
};
