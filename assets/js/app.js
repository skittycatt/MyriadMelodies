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
      coverImage.src = getCoverUrl(game_data.music_id);

    }
    catch (error) {
      console.error(error.message);
    }

  });
});


function getCoverUrl(music_id) {
  var url;
  switch (music_id) {

    case 1: // Blossoms of Summer Night (Yoimiya)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/a70138ec27ef16ba18c024e5ce110e53_5099218616108031176.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 2: // Time To Shine (Itto)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/da266410fc3793748588f12243a02231_1840157955618058224.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 3: // Drifter's Destiny (Kazuha)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/059c74df7fbab9ca8e18a20b101bdcbb_2537075187528557807.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 4: // Devotion of the Keeper (Thoma)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/55d759a8d991658d25d84989c6974138_7936347627409020334.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 5: // Let's Go, Crimson Knight! (Klee)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/6f58bcaa65efb2f3ef4fdc537c967241_2077766230671133307.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 6: // Rage Beneath the Mountains (Azhdaha boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/5bcba26db3735b5629e49cb053f46886_5176165457358889788.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 7: // Termination of Desires (Raiden)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/8488b2ac8416253b3bd054df11f1820f_302642846275889174.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 8: // Invitation of Windblume
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/4c4e39d59a24b6d309c08c1f7f342352_4984329308196721674.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 9:  // Contemplation in Snow (Albedo)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/1d6fa5f29cfc7c1f49407013616b25d7_5479642374200130466.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 10: // Dance of Aphros (Eula)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/bb6f6044e4b055c77ea3271618845986_2096676221561840118.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 11: // Caelestinum Finale Termini (Dvalin boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/66a5385f02b89216f624db13a9d75dc9_7012351484852043721.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 12: // Caprice of the Leaves (Collei)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/22e9874382c68bb9476edbb5fb7e7307_5166707000551553862.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 13: // Winding Through Avidya (Tighnari)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/76a511a965599e3ae9b488b4fbdd7b3d_1687979722838792744.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 14: // Bard's Adventure (Venti)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/a83c3a343355f15ef45924d9d4437b09_3765525519378386192.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 15: // Lustrous Trick (Lyney)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/6d79d9afb5729f02bf1eb81f63e5d6bf_6450762464310020318.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 16: // Surasthana Fantasia (Nahida)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/d3eecf6b9a686f6ee758bc4ecf06b25d_6901238018949691442.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 17: // Rex Incognito (Zhongli)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/6efc5342c1b0b102347670d4f16130d0_2014356467645299975.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 18: // Any Last Words? (Hu Tao)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/183835cf47849745b0c818d6d5e2bdb0_8980721536610267566.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 19: // Parousia Diluva (Neuvillette)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/308c6c57415aa6833ff9175216fbf537_1325599082394984758.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 20: // Se mettre sur son trente-et-un! (Furina)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/2a11cd8ee5210248cbe3fbc2f7d53e6b_5977294255749634100.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 21: // Nippy Bout (Wriothesley)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/3cfe893abedbcd4d62c1499deea8445b_4430210151170033696.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 23: // Sieh an, mein Sommernachtgarten! (Fischl)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/d625a85d9d4bf5963fcf72341e419c2d_1615856952334336058.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 24: // Exclusive Specialty (Diona)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/ded0e07d1409f63446b8b29ab7621367_6500373837747381258.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 25: // Symphony of Boreal Wind (Boreas boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/f9ca8dddc9160c87fcd19e745549f189_8886390820701335595.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 22: // Bustling Afternoon in Mondstadt
    case 26: // An Interesting Labour
    case 27: // Photon of Fluctuation
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/d324775b8674e7f98e75edf754e8c19d_2733475910873652087.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 28: // Liyue
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/bf8cb8bd1bb61ab1e0d8c7041427aa4a_1448595123219035538.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 29: // Moon in One's Cup
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/448e766db01353870eb9a631cf635a38_2847653110935954988.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp"
      break;

    case 30: // Rapid as Wildfires
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/358c3c18beba4516df94b18359c87155_9174230374164137259.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 31: // Path of Yaksha (Xiao)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/a2ad33d1771d7dfe72b531fa914fff72_182898859076488722.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 32: // Qilin's Prance (Ganyu)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/3929332f06fea500d6be8d5b2d408058_6210731422083062394.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 33: // Chapter of a New Era (Yun Jin)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/9978d5860afa8c042573249a10230efb_4350322912902058343.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 34: // The Crane Cries (Shenhe)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/c29c0e943442be794a50cb5bbe6cc7ad_595023357800766834.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 35: // Wrath of Monoceros Caeli (Tartaglia boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/1330bd51187e7932cc510056ffdd158e_6041541990830415522.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 36: // Devastation and Redemption (The Crane Returns on the Wind)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/c8a3257c8226ded209ff6a44ef966b0d_6559064120213925229.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 37: // Inazuma
    case 38: // Duel in the Mists
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/ef6707cee9eff28060b15c12b12d27ca_7605675271276853454.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 39: // Nothing But Trickery (Yae Miko)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/0237648f2c9255f2c273d03b16e4a281_8876719139234214786.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 40: // Storm Chaser (Heizou)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/60e2557f7ee3500a0e8f997ab7d0bd82_8839482530715451689.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 41: // No Turning Back (Enkanomiya boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/a736ea8895b9f5d313eeb41c21e4e94d_3091841854824423209.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 42: // Saltatio Favillae (Signora boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/2b16e86be1f2e62be477f4c4882256e0_2095095999156304093.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 43: // The Almighty Violet Thunder (Her Excellency, The Almighty Narukami Ogosho: God of Thunder)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/9821cd33d50bfc02723d3ec0cbd49e83_6074831030837076646.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 44: // Sumeru
    case 45: // Hustle and Bustle of Ormos
    case 46: // Gilded Runner
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/9b622c1e0c5489af040d38fe2f15e133_1379005314816258837.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 47: // Melody of Distant Green Fields (Aranara)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/e8a1b62d0be9989f71252daace0dcb1f_3827704636185868673.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 48: // Cogitation of Epochs (Alhaitham)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/131a8280e46503580f5735271b11548a_7158951096546116711.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 49: // Order of Silence (Cyno)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/ae0211a10e7d424f9903f44b0ce0fb9b_2633333641375574534.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 50: // Whirling of Vairambhaka (Faruzan)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/434e02120eb4fc0423f714d9b7269d28_3653221196552190718.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 51: // Polumnia Omnia (Scara boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/bca0beaba4799d82535c2e594cce05c5_7987882958890553683.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 52: // God-Devouring Mania (Apep boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/986c52a8d69ea7dbf6a70948205cb708_3590039804298293991.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 53: // Fontaine
    case 54: // Rondeau des fleurs et des rapieres
    case 55: // Lamentation et Triomphe
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/04c398ef3d0a68b5dbcdce93714e826b_8399183381800556130.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 56: // Offertorium of Fortuitem (Arlecchino)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/afd08c99297715869af84ffb63590169_87545566137125075.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 57: // Largo alla donzella (Navia)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/e4586f5a8b7b6b5d9912f7238c66bfa7_923000522170048345.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 58: // Absolutio Absoluta Absolutissime (Arlecchino boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/e0c2d436e7f9380e9acc538c590c64b4_8687609261078809286.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 59: // Silhouette of Catastrophe (All-Devouring Narwhal)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/81a6271df88fc27c6a3d38553e49fd36_4656692342020292354.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 60: // La Vaguelette
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/3566954ff52c0ffcd15f30cc8c93bed4_2438909851184405900.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 61: // Natlan
    case 64: // Chasing Flames Like Strings
    case 65: // Venture of Tonalamatl
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/6c6bdd1142f26b4a9baa246c8a724850_7936975736902897054.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 62: // Campa timoyetzticah, Cempaxochitl?
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/a99462f48c975300f17cc60c87a87a41_1427163608436745367.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 63: // Makani 'olu'olu
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/1e65a6e475c86e9247eb471b6e34ff31_2235297237649622462.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 66: // Hot Spring Affection (Mualani)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/6f22131219249ccfeac93be3f780c1e0_5724382603726989157.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 67: // Note of Effective Settlements (Kinich)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/96e71084c479b02d4bbbb557ebc4f711_1937360019813694605.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 68: // Pirouette of Pika's Pike (Kachina)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/359d0bf9ea693fe693f2894349deb42b_4579712285999891563.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 69: // Lights on Me (Xilonen)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/7e431036c5917d61f31f317c416b48a5_2115308287173226514.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 70: // Viajadora's Verse (Chasca)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/45b794398156fce13a9e59159c067614_1474771362762338210.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 71: // Rain of Seven Curtains (Ororon)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/02b071fcf980e5afa0c42b8e67f96e4d_4474241354971555291.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 72: // Chasing the Rainbow (Spiritway challenge)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/da1b86b71a423003f032ce4d935c0abd_8547298793836813093.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 73: // Springtime in a Mirror
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/ec2a5365df990461a079770afcc3df18_5920912758463248428.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 74: // Night's Crown of Flowers
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/c16b16135d34948a26191bb61c037a59_9076454596033147998.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 75: // All the Pretty Courses
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/c59e8ce51952fbe7b85d6a11ed36adae_1461532934401265660.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 76: // Bounty of the Fertile Slopes
    case 77: // Sleep After the Toil
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/9eaac6628eed824fbcc8393e92988b9c_6450878394447401223.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 78: // The Chosen of Dragons' Trials
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/0a546455a6ee820533c674dd61772e4d_5604393205782671010.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 79: // Tumaini washa moto
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/702e6b54ec138450ac24e9ba3e13dca5_6637755388896118159.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 80: // Interstellar Drift (Citlali)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/1a5b1fb899add2cb706c36c181298349_5713532851970430038.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 81: // Valiant Duel (Varesa)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/68e57d2148d18f7f0113fb89a943c25f_6709299615654517118.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 82: // Fitness Lesson (Iansan)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/4ee612e29281d0b639be1f66362abb3a_8998481784526275210.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 83: // Healing Breeze (Ifa)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/d331c5ecd519708578871af5c04844f2_2591277945488002202.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 84: // Ode of Resurrection: Recapitulation (Lord of Eroded Primal Fire boss)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/ef0a7878137aa1f809a4896cfb0342d0_675478973105397717.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 85: // The Road Not Taken
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/28e9da7fb64e6a02324c58423bb12ea0_6361120944487481728.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    // Passing Memories
    case 86: // CN
    case 97: // JP
    case 98: // ENG
    case 102: // KR
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/cd5d360c51c90c2ab1a63c25592a2cd6_7273313114046100879.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 87: // Moonlike Smile
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/fc2e74c994c70c2f5f383ceb8bbd7290_4970543284748739587.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 88: // Borrowing Winds of Harmony (Xianyun)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/2e1f726869a73467df922841868386f6_266281876706423882.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 89: // Shirasagi Princess (Ayaka)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/1d5d5102a483cf16e46f85e512e6a82b_4968805729585829442.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 90: // Fervent Flare (Dehya)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/4fcc1663bfcfd018c3f39fb97e762ad8_2612191074470134399.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 91: // Romari Time! (Sigewinne)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/69a34600e21cd7e9ff9c55e117c2ea39_1523004700850690192.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    // Blazing Heart (Mavuika)
    case 92: // CN
    case 99: // ENG
    case 100: // KR
    case 101: // JP
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/7dff632fcdf9b159200d294708787235_712301342236996426.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 93: // In Stillness, Waiting (Skirk)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/e9c493c29bb5dceefc64f44a1f6317d6_9133726053901729837.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 94: // The Rime of the Ancient Bargeman (III) (Lan Yan)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/22a25a31dedf2d2cca87077f0f17b347_7890292611472863993.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 95: // Emberfire
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/90e7f08b4153a228ff3c381c06dbddd8_5245938305079531531.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 96: // Song of Innocence
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/d6bc49e7af3b8579559c0e025b252b12_4876038772843220773.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 103: // Sea Shanties Resounding
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/3c3b0d2c293674dda1ae2d9c201d3103_5689661727521431635.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 104: // Syntyloitsut of Koitar
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/7ebcae542f1d36953dab8f5f2951c77e_455084595095068680.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 105: // To Light the Aeon Dark
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/d9252876bae8ae4734dab34fd07c0a69_5236219711346656854.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 106: // Lullaby of the New Moon (I): Somnias a Luna
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/0625e2f282567901650062e40fb55ed2_494183160713143517.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 107: // A Carefree Cup
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/b53f60661542a6fb3f003649f002b7d1_3548066418318163416.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 108: // Duckle 'em Down! (Knuckle Fuckle)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/1ab555c8939f136dd14b4896733d256a_4199575340953730274.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 109: // War With Pepper and Fish (Ineffa)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/44ec931340d3da04914890be7a0561ce_65582437581873505.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 110: // Lumipyhaemetsaen Polkka (Lauma)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/c7c7bf67c81f1ace8e294075b67a0b40_7318505960298657609.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 111: // Entombed in Pale Fire (Flins)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/739688060e430c2976b0e0217a1427b0_205130765600419308.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 112: // Ingenious Trip (Aino)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/379d0acc277271b9e5f3e5dee41a3c63_3934741276654682255.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 113: // Machination of Mehenet (Nefer)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/171bbfa3115e1bf6040de6c20c4e3fb7_7037119754688640112.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;

    case 114: // For Your Cash Only (Jahoda)
      url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/16d020f96bebf95cb5b9cab005f90d42_4679875028334321817.png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
      break;
  }
  return url;
}