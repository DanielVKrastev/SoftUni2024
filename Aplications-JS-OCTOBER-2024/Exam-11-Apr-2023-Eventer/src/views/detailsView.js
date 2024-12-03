import { getOne } from "../api/events.js";
import { addLike, getAllForEventAndUser, getAllForEvents } from "../lib/likes.js";
import { html, render } from "../lib/lit-html.js";

const template = (event, isOwner, accessToken, likesCount, hasLiked, likeHandler) => html`

      <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${event.imageUrl}" alt="${event.name}" />
            <p id="details-title">${event.name}</p>
            <p id="details-category">
              Category: <span id="categories">${event.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${event.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${event.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${likesCount}</span> times.</h3>

            
            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
              ${isOwner 
                        ? html`
              <a href="/edit/${event._id}" id="edit-btn">Edit</a>
              <a href="/delete/${event._id}" id="delete-btn">Delete</a>
              `
              : ''
              }


              <!--Bonus - Only for logged-in users ( not authors )-->
              ${ !isOwner && accessToken && hasLiked === false
                        ? html`
                <a href="javascript:(0)" @click=${likeHandler} id="go-btn">Going</a>`
                        : ''
              }
            </div>
          </div>
        </section>
`;

export default async function detailsView(ctx){
  const eventId = ctx.params.id;
  const eventData = await getOne(eventId);
  const accessToken = ctx.userData.accessToken;
  const userId = ctx.userData._id;

  let isOwner = false;
  if(userId === eventData._ownerId){
      isOwner = true;
  }

  //likes count
  const likesCount = await getAllForEvents(eventId);

  //has liked
  const userLikes = await getAllForEventAndUser(eventData._id, userId);
  let hasLiked = userLikes > 0;

  ctx.render(template(eventData, isOwner, accessToken, likesCount, hasLiked, likeHandler));

  async function likeHandler(){
      const like = { eventId }; //get owner id
      
      try{
          const result = await addLike(like);
          ctx.page.redirect(`/details/${eventId}`);
      }catch(err){
          alert(err.message);
      }

      
  }
}