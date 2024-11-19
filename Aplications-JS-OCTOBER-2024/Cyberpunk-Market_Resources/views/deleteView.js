import { remove } from "../api/itemsApi.js";
import page from "../lib/page.js";

export default async function deleteView(ctx) {

    const itemId = ctx.params.itemId;
    const isConfirmed = confirm('Are you sure you want to delete this?');

    if ( ! isConfirmed ) { 
        return;
    }

    try{
        await remove(itemId)
        page.redirect('/dashboard');
    }catch(err){
        alert(err.message);
    }
}