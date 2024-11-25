import { editTattoo, getOneTattoo } from "../api/tattoos.js";
import { html, render } from "../lib/lit-html.js";

const template = (tattoo, editSubmitHandler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
    <h2>Edit tattoo</h2>
    <form class="edit-form" @submit=${editSubmitHandler}>
        <input type="text" name="type" id="type" placeholder="Tattoo Type" value=${tattoo.type}/>
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" value=${tattoo.imageUrl}/>
        <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" >${tattoo.description}</textarea>
        <select id="user-type" name="user-type">
        <option value="" disabled selected>Select your role</option>
        <option ?selected=${tattoo.userType === 'Tattoo Artist'} value="Tattoo Artist">Tattoo Artist</option>
        <option ?selected=${tattoo.userType === 'Tattoo Enthusiast'} value="Tattoo Enthusiast">Tattoo Enthusiast</option>
        <option ?selected=${tattoo.userType === 'First Time in Tattoo'} value="First Time in Tattoo">
            First Time in Tattoo
        </option>
        <option ?selected=${tattoo.userType === 'Tattoo Collector'} value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Edit</button>
    </form>
    </div>
</section>
`;

export default async function editView(ctx){
    const tattooId = ctx.params.id;
    const tattooData = await getOneTattoo(tattooId)

    ctx.render(template(tattooData, editSubmitHandler));

    async function editSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const type = formData.get('type');
        const imageUrl = formData.get('image-url');
        const description = formData.get('description');
        const userType = formData.get('user-type');

        try{
            if(!type || !imageUrl || !description || !userType){
                return alert('Please fill the fields');
            }
    
            const tattooData = {
                type,
                imageUrl,
                description,
                userType
            }

            await editTattoo(tattooId ,tattooData);
            ctx.page.redirect(`/details/${tattooId}`);
        }catch(err){
            alert(err.message);
        }
        
        
    }
}