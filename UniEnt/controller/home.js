import commonPartial from './partials.js';
import {setHeader} from "./auth.js";
import {getAll} from "../models/events.js";

export function getHome(ctx){
    setHeader(ctx);
    getAll()
        .then( res => {
            const events = res.docs.map( x => x = {...x.data(), id:x.id} );
            ctx.events = events;
            ctx.loadPartials(commonPartial).partial('./view/home.hbs');
        })

}