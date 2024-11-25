import { removeTattoo } from "../api/tattoos.js";

export default async function deleteHandler(ctx) {
    const tattooId = ctx.params.id;

    const confirm = window.confirm('Are you sure would you delete this tattoo?');

    if(confirm){
        try{
            await removeTattoo(tattooId);
            ctx.page.redirect('/dashboard');
        }catch(err){
            alert(err.message);
        }
    }

}