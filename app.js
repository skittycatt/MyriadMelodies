document.addEventListener("DOMContentLoaded", () => {
  $("#search-form").submit(function (event) {
    event.preventDefault();
    $.get("get_data.php", { url: "https://sg-hk4e-api.hoyoverse.com/event/musicugc/v1/work_detail?lang=en-us&game_biz=hk4e_global&is_mobile=false&region=os_usa&share_code=" + document.querySelector("#search-id").value.trim() })
      .done(function (response) {
        console.log(response);
      });
  });
});
