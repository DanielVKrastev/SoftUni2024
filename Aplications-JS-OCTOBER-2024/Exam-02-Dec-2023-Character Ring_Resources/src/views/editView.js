import { edit, getOne } from "../api/characters.js";
import { html } from "../lib/lit-html.js";

const template = (character, editSubmitHandler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
    <img class="border" src="./images/border.png" alt="">
    <h2>Edit Character</h2>
    <form class="edit-form" @submit=${editSubmitHandler}>
        <input type="text" name="category" id="category" placeholder="Character Type" value=${character.category} />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" value=${character.imageUrl} />
        <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" >${character.description}</textarea>
        <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10">${character.moreInfo}</textarea>
        <button type="submit">Edit</button>
    </form>
    <img class="border" src="./images/border.png" alt="">
    </div>
</section>
`;

export default async function editView(ctx){
    const characterId = ctx.params.id;
    const data = await getOne(characterId)

    ctx.render(template(data, editSubmitHandler));

    async function editSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const category = formData.get('category');
        const imageUrl = formData.get('image-url');
        const description = formData.get('description');
        const moreInfo = formData.get('additional-info');

        if(!category || !imageUrl || !description || !moreInfo){
            return alert('Please fill the fields');
        }

        const characterData = {
            category,
            imageUrl,
            description,
            moreInfo
        }

        try{
            await edit(characterId, characterData);
            ctx.page.redirect(`/details/${characterId}`);
        }catch(err){
            alert(err.message);
        }
    }
}