import { Firebase } from "./firebase";

export class BaseService {
    static request() {
        return new Firebase();
    }
}