import dispatcher from "../Dispatcher";
import * as ColorappActions from "../actions/ColorappActions";
import {EventEmitter} from "events";
import ColorappStore from "../stores/colorappStore";

class ColorappStore extends EventEmitter {
    constructor(){
        super();
    }
    
    handleAction(action){
        
    }
}

const regColorAppStore=new ColorappStore();
dispatcher.register(regColorAppStore.handleAction.bind(regColorAppStore));

export default regColorAppStore;