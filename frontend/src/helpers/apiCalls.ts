import axios from 'axios';

export default class ApiCalls {

    private static axiosInstace = axios.create({
        baseURL: 'http://localhost:5000/crons',
    });

    public static listCrons(){
        return this.axiosInstace.get('');
    }

    public static getCron(id: string) {
        return this.axiosInstace.get(id);
    }

    public static postCron(cron: any) {
        return this.axiosInstace.post('', cron);
    }

    public static updateCron(id: string, cron: any) {
        return this.axiosInstace.patch(id, cron);
    }

    public static deleteCron(id: string) {
        return this.axiosInstace.delete(id);
    }
}