$(document).ready(() => {
    $("#modal-button").click(() => {
      $(".modal-body").html("");
      $.get(`/api/users`, (results = {}) => {
        let data = results.data;
        if (!data || !data.users) return;
        data.users.forEach(user => {
          $(".modal-body").append(
            `<div>
                          <span class="user-title">
                              ${user.fname} ${user.lname} 
                          </span>
                          <span class="user-cost">${user.username}</span>
                          <button class="${user.joined ? "joined-button" : "join-button"} btn btn-info btn-sm" data-id="${user._id}">
                              ${user.joined ? "Joined" : "Join"}
                          </button>
                          <div class="user-description">
                              ${user.bio}
                          </div>
                      </div>`
          );
        });
      }).then(() => {
        addJoinButtonListener();
      });
    });
  });
  
  let addJoinButtonListener = () => {
    $(".join-button").click(event => {
      let $button = $(event.target),
        userId = $button.data("id");
              console.log(`/api/users/${userId}/join`)
      $.get(`/api/users/${userId}/join`, (results = {}) => {
        let data = results.data;
        if (data && data.success) {
          $button
            .text("Joined")
            .addClass("joined-button")
            .removeClass("join-button");
        } else {
          $button.text("Try again");
        }
      });
    });
  };