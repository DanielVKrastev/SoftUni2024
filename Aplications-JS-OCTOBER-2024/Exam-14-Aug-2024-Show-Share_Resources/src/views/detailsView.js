import { getOneShow, removeShow } from "../api/shows.js";
import { html, render } from "../lib/lit-html.js";
import page from "../lib/page.js";
import { getUserData } from "../utils/userUtils.js";

const detailsTemplate = (showData, isOwner, deleteShow) => html`
<!-- Details page -->
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${showData.imageUrl}" alt="${showData.title}" />
            <div id="details-text">
              <p id="details-title">${showData.title}</p>
              <div id="info-wrapper">
                <div id="description">
                  <p id="details-description">
                    ${showData.details}
                  </p>
                </div>
              </div>
          
            ${
                isOwner
                ? html`
                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                    <a href="/edit/${showData._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" @click=${deleteShow} id="delete-btn">Delete</a>
                </div>
                `
                : ''
            }

            </div>
          </div>
        </section>
`;

export default async function detailsView(ctx) {
    const showId = ctx.params.id;
    const dataUser = getUserData();
    const userId = dataUser._id;
    
    
    const showData = await getOneShow(showId);

    let isOwner = false;
    if(showData._ownerId === userId){
        isOwner = true;
    }

    render(detailsTemplate(showData, isOwner, deleteShow));

    async function deleteShow(){
    
      const confirm = window.confirm('Are you sure would you delete this show?')
      if(confirm){
        try{
            await removeShow(showId);
            page.redirect('/dashboard');
        }catch(err){
            console.error(err.messsage);
        }
      }
        
    }
}

