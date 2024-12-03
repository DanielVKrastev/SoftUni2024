import { remove } from "../api/events.js";

export default async function deleteHandler(ctx) {
    const id = ctx.params.id;

    const confirm = window.confirm('Are you sure would you delete this event?');

    if(confirm){
        try{
            await remove(id);
            ctx.page.redirect('/dashboard');
        }catch(err){
            alert(err.message);
        }
    }

}