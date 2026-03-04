document.addEventListener("DOMContentLoaded", () => {
  $("#search-form").submit(async function (event) {
    event.preventDefault();
    const url = "https://corsproxy.io/?url=" + encodeURIComponent("https://sg-hk4e-api.hoyoverse.com/event/musicugc/v1/work_detail?lang=en-us&game_biz=hk4e_global&is_mobile=false&region=os_usa&share_code="
      + document.querySelector("#search-id").value.trim());
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      const mapper = result.data.work.user.nickname;
      const game_data = result.data.work.game_data;
      document.querySelector(".info").innerHTML = `map: ${game_data.name}<br>mapper: ${mapper}<br>note count: ${game_data.music_cnt}`;
    }
    catch (error) {
      console.error(error.message);
    }

  });
});
