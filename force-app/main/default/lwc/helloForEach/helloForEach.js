import { LightningElement ,track} from 'lwc';

export default class HelloForEach extends LightningElement {

      contacts = [
                {
                    Id:1,
                    Name: "Usha",
                    Title:"VP"
                },{
                    Id:2,
                    Name: "Usha2",
                    Title:"VP1"
                },{
                    Id:3,
                    Name: "Usha3",
                    Title:"VP2"
                }
    ]
}