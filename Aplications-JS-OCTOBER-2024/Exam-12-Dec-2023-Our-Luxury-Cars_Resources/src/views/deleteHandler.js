import { remove } from "../api/cars.js";

export default async function deleteHandler(ctx) {
    const carId = ctx.params.id;

    const confirm = window.confirm('Are you sure would you delete this car?');

    if(confirm){
        try{
            await remove(carId);
            ctx.page.redirect('/dashboard');
        }catch(err){
            alert(err.message);
        }
    }

}