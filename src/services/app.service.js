import { BaseService } from "./base.service";
import { doc, getDoc, getDocs, query, collection } from "firebase/firestore";


export class AppService extends BaseService {

    static getResponse(snapshot){
        const response = new Array();
        snapshot.forEach(snap => {
            response.push(snap.data());
        })
        return response;
    }

    static async getTestimonials(){
        try {
            
            const documents = query(collection(this.request(), 'testimonials'));
            const snapshot = await getDocs(documents);
            return this.getResponse(snapshot);

        } catch(error){
            console.log(error);
        }
    }

    static async getCareerInformation(){
        try {
            const documents = query(collection(this.request(), 'career'));
            const snapshot = await getDocs(documents);
            return this.getResponse(snapshot);
            
        } catch(error) {
            console.log(error);
        }
    }

}