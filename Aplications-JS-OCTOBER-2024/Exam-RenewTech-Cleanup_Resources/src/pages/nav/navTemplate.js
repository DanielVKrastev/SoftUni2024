import { html } from "../../../node_modules/lit-html/lit-html.js";

export const navTemplate = (isLoggedIn, logoutHandler) => html`
  <div>
    <a href="/solutions">Solutions</a>
  </div>

  ${isLoggedIn === true
    ? html`  <!-- Logged-in users -->
    <div class="user">
      <a href="/addSolution">Add Solution</a>
      <a href="javascript:void(0)" @click=${logoutHandler}>Logout</a>
    </div>`
    : html`  <!-- Guest users -->
    <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>`
  }
`;