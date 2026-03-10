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
      var infoDiv = document.querySelector("#info");
      var errorDiv = document.querySelector("#error");
      if (result.data === null) {
        infoDiv.setAttribute("hidden", "");
        errorDiv.removeAttribute("hidden");
        errorDiv.innerHTML = result.message;
        return;
      }
      infoDiv.removeAttribute("hidden");
      errorDiv.setAttribute("hidden", "");
      const mapper = result.data.work.user.nickname;
      const game_data = result.data.work.game_data;
      //document.querySelector(".info").innerHTML = `map: ${game_data.name}<br>mapper: ${mapper}<br>note count: ${game_data.music_cnt}`;
      const r = await fetch("https://34.72.70.49");
      const r2 = await r.text();
      console.log(r2);
      const interact_data = result.data.work.interact_data;
      document.querySelector("#mapName").innerHTML = game_data.name;
      document.querySelector("#creator").innerHTML = mapper;
      document.querySelector("#noteCount").innerHTML = game_data.music_cnt;
      document.querySelector("#viewCount").innerHTML = interact_data?.view_cnt ?? 0;
      document.querySelector("#likeCount").innerHTML = game_data.like_cnt + (interact_data?.like_cnt ?? 0);
      document.querySelector("#favoriteCount").innerHTML = game_data.save_cnt + (interact_data?.save_cnt ?? 0);

      var coverImage = document.querySelector("#coverImage");
      // maybe an array for the track number/cover image src? or I guess a switch would work
      if (game_data.music_id === 9) {
        coverImage.src = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/1d6fa5f29cfc7c1f49407013616b25d7_5479642374200130466.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp"; // albedo cover
      }
    }
    catch (error) {
      console.error(error.message);
    }

  });
});
