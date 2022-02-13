import { createAsyncDelay } from '../../utils';
import { ITask } from 'store/modules/task/reducer';

export interface IError {
    message: string
}

export interface TaskResponse {
    tasks: ITask[];
    total: number;
    page: number;
}

export const fetchTaskList = (): Promise<TaskResponse> => {
    return createAsyncDelay(1000).then(() => {
        const tmpResult: TaskResponse = {
            tasks: [
                { id: 'test1', createdAt: new Date(), name: 'tester1', point: 10 },
                { id: 'test2', createdAt: new Date(), name: 'tester2', point: 20 },
                { id: 'test3', createdAt: new Date(), name: 'tester3', point: 30 },
            ],
            total: 3,
            page: 0
        };
        return tmpResult;
    });
};

export default {
    fetchTaskList
};
