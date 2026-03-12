document.addEventListener("DOMContentLoaded", () => {
  $("#search-form").submit(async function (event) {
    event.preventDefault(); // prevent actually submitting the form

    // get info from our backend api :)
    const sharingCode = document.querySelector("#search-id").value.trim();
    const url = `https://35.222.248.224/api/sharing-code?sharingCode=${sharingCode}`
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);

      // set visibility of info and error divs
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

      // populate the info div with map data
      const user = result.data.work.user;
      const game_data = result.data.work.game_data;
      const interact_data = result.data.work.interact_data;
      var heart_rating = result.data.work.quality_score;
      if (heart_rating === 0) { // only works with an interaction platform post have quality_score (which is more accurate)
        heart_rating = game_data.recommend_score;
      }

      document.querySelector("#map_name").innerHTML = game_data.name;
      document.querySelector("#creator").innerHTML = user.nickname;
      document.querySelector("#creator_avatar").src = user.head_image_avatar_url;
      document.querySelector("#note_count").innerHTML = game_data.music_cnt;
      document.querySelector("#key_count").innerHTML = game_data.note_tag;
      document.querySelector("#like_count").innerHTML = game_data.like_cnt + (interact_data?.like_cnt ?? 0);
      document.querySelector("#play_count").innerHTML = game_data.challenge_cnt;
      document.querySelector("#heart_rating").innerHTML = heart_rating;
      document.querySelector("#favorite_count").innerHTML = game_data.save_cnt + (interact_data?.save_cnt ?? 0);

      var coverImage = document.querySelector("#cover");
      coverImage.src = getCoverUrl(game_data.music_id);

      // API/database
      // --------------------

      // once we're getting data from the database, we need to set visibility of the canorus_ring based on their saved rank
      if (document.querySelector("#canorus").checked === true) {
        setCanorus(true);
      }
    }
    catch (error) {
      console.error(error.message);
    }

  });

  // score rank radio
  $("input[type='radio']").on("change", (e) => {
    if (e.target.id === "canorus") {
      setCanorus(true);
    }
    else {
      setCanorus(false);
    }
  });

  // star rating constructor
  $("#user_rating").rates({
    shape: "white-heart",
    shadeColor: "rates-green-outline",
    shapeCount: 10,
    imagesFolderLocation: "assets/"
  });

  // star rating changed
  $("#user_ratingRating").on("change", (e) => {
    console.log(e.target.value + " is the rating for this map!");
  });


});



/// canorus: bool representing if the current track is canorus or not
function setCanorus(canorus) {
  var canorus_ring = document.querySelector("#canorus_ring");
  var vinyl = document.querySelector("#vinyl");
  if (canorus) {
    canorus_ring.removeAttribute("hidden");
    vinyl.setAttribute("hidden", "");
  }
  else {
    canorus_ring.setAttribute("hidden", "");
    vinyl.removeAttribute("hidden");
  }
}


function getCoverUrl(music_id) {
  var url;
  url = "https://fastcdn.hoyoverse.com/mi18n/hk4e_global/m20241021hy3aep4ef4/upload/" + coverIds[music_id] + ".png?x-oss-process=image/resize,s_1000,w_100/quality,q_70/format,webp";
  return url;
}

const coverIds = [
  "", // blank to adjust for 0-indexing
  "a70138ec27ef16ba18c024e5ce110e53_5099218616108031176", //   1. Blossoms of Summer Night (Yoimiya)
  "da266410fc3793748588f12243a02231_1840157955618058224", //   2. Time To Shine (Itto)
  "059c74df7fbab9ca8e18a20b101bdcbb_2537075187528557807", //   3. Drifter's Destiny (Kazuha)
  "55d759a8d991658d25d84989c6974138_7936347627409020334", //   4. Devotion of the Keeper (Thoma)
  "6f58bcaa65efb2f3ef4fdc537c967241_2077766230671133307", //   5. Let's Go, Crimson Knight! (Klee)
  "5bcba26db3735b5629e49cb053f46886_5176165457358889788", //   6. Rage Beneath the Mountains (Azhdaha boss)
  "8488b2ac8416253b3bd054df11f1820f_302642846275889174",  //   7. Termination of Desires (Raiden)
  "4c4e39d59a24b6d309c08c1f7f342352_4984329308196721674", //   8. Invitation of Windblume
  "1d6fa5f29cfc7c1f49407013616b25d7_5479642374200130466", //   9. Contemplation in Snow (Albedo)
  "bb6f6044e4b055c77ea3271618845986_2096676221561840118", //  10. Dance of Aphros (Eula)
  "66a5385f02b89216f624db13a9d75dc9_7012351484852043721", //  11. Caelestinum Finale Termini (Dvalin boss)
  "22e9874382c68bb9476edbb5fb7e7307_5166707000551553862", //  12. Caprice of the Leaves (Collei)
  "76a511a965599e3ae9b488b4fbdd7b3d_1687979722838792744", //  13. Winding Through Avidya (Tighnari)
  "a83c3a343355f15ef45924d9d4437b09_3765525519378386192", //  14. Bard's Adventure (Venti)
  "6d79d9afb5729f02bf1eb81f63e5d6bf_6450762464310020318", //  15. Lustrous Trick (Lyney)
  "d3eecf6b9a686f6ee758bc4ecf06b25d_6901238018949691442", //  16. Surasthana Fantasia (Nahida)
  "6efc5342c1b0b102347670d4f16130d0_2014356467645299975", //  17. Rex Incognito (Zhongli)
  "183835cf47849745b0c818d6d5e2bdb0_8980721536610267566", //  18. Any Last Words? (Hu Tao)
  "308c6c57415aa6833ff9175216fbf537_1325599082394984758", //  19. Parousia Diluva (Neuvillette)
  "2a11cd8ee5210248cbe3fbc2f7d53e6b_5977294255749634100", //  20. Se mettre sur son trente-et-un! (Furina)
  "3cfe893abedbcd4d62c1499deea8445b_4430210151170033696", //  21. Nippy Bout (Wriothesley)
  "d324775b8674e7f98e75edf754e8c19d_2733475910873652087", //  22. Bustling Afternoon in Mondstadt
  "d625a85d9d4bf5963fcf72341e419c2d_1615856952334336058", //  23. Sieh an, mein Sommernachtgarten! (Fischl)
  "ded0e07d1409f63446b8b29ab7621367_6500373837747381258", //  24. Exclusive Specialty (Diona)
  "f9ca8dddc9160c87fcd19e745549f189_8886390820701335595", //  25. Symphony of Boreal Wind (Boreas boss)
  "d324775b8674e7f98e75edf754e8c19d_8946815177789797366", //  26. An Interesting Labour
  "d324775b8674e7f98e75edf754e8c19d_4523578504411310123", //  27. Photon of Fluctuation
  "bf8cb8bd1bb61ab1e0d8c7041427aa4a_1448595123219035538", //  28. Liyue
  "448e766db01353870eb9a631cf635a38_2847653110935954988", //  29. Moon in One's Cup
  "358c3c18beba4516df94b18359c87155_9174230374164137259", //  30. Rapid as Wildfires
  "a2ad33d1771d7dfe72b531fa914fff72_182898859076488722",  //  31. Path of Yaksha (Xiao)
  "3929332f06fea500d6be8d5b2d408058_6210731422083062394", //  32. Qilin's Prance (Ganyu)
  "9978d5860afa8c042573249a10230efb_4350322912902058343", //  33. Chapter of a New Era (Yun Jin)
  "c29c0e943442be794a50cb5bbe6cc7ad_595023357800766834",  //  34. The Crane Cries (Shenhe)
  "1330bd51187e7932cc510056ffdd158e_6041541990830415522", //  35. Wrath of Monoceros Caeli (Tartaglia boss)
  "c8a3257c8226ded209ff6a44ef966b0d_6559064120213925229", //  36. Devastation and Redemption (The Crane Returns on the Wind)
  "ef6707cee9eff28060b15c12b12d27ca_7605675271276853454", //  37. Inazuma
  "ef6707cee9eff28060b15c12b12d27ca_9084432631868021807", //  38. Duel in the Mists
  "0237648f2c9255f2c273d03b16e4a281_8876719139234214786", //  39. Nothing But Trickery (Yae Miko)
  "60e2557f7ee3500a0e8f997ab7d0bd82_8839482530715451689", //  40. Storm Chaser (Heizou)
  "a736ea8895b9f5d313eeb41c21e4e94d_3091841854824423209", //  41. No Turning Back (Enkanomiya boss)
  "2b16e86be1f2e62be477f4c4882256e0_2095095999156304093", //  42. Saltatio Favillae (Signora boss)
  "9821cd33d50bfc02723d3ec0cbd49e83_6074831030837076646", //  43. The Almighty Violet Thunder (Her Excellency, The Almighty Narukami Ogosho: God of Thunder)
  "9b622c1e0c5489af040d38fe2f15e133_1379005314816258837", //  44. Sumeru
  "9b622c1e0c5489af040d38fe2f15e133_1118678223716912274", //  45. Hustle and Bustle of Ormos
  "9b622c1e0c5489af040d38fe2f15e133_2677333142879511178", //  46. Gilded Runner
  "e8a1b62d0be9989f71252daace0dcb1f_3827704636185868673", //  47. Melody of Distant Green Fields (Aranara)
  "131a8280e46503580f5735271b11548a_7158951096546116711", //  48. Cogitation of Epochs (Alhaitham)
  "ae0211a10e7d424f9903f44b0ce0fb9b_2633333641375574534", //  49. Order of Silence (Cyno)
  "434e02120eb4fc0423f714d9b7269d28_3653221196552190718", //  50. Whirling of Vairambhaka (Faruzan)
  "bca0beaba4799d82535c2e594cce05c5_7987882958890553683", //  51. Polumnia Omnia (Scara boss)
  "986c52a8d69ea7dbf6a70948205cb708_3590039804298293991", //  52. God-Devouring Mania (Apep boss)
  "04c398ef3d0a68b5dbcdce93714e826b_8399183381800556130", //  53. Fontaine
  "04c398ef3d0a68b5dbcdce93714e826b_3176148517188637648", //  54. Rondeau des fleurs et des rapieres
  "04c398ef3d0a68b5dbcdce93714e826b_6439182139587925394", //  55. Lamentation et Triomphe
  "afd08c99297715869af84ffb63590169_87545566137125075",   //  56. Offertorium of Fortuitem (Arlecchino)
  "e4586f5a8b7b6b5d9912f7238c66bfa7_923000522170048345",  //  57. Largo alla donzella (Navia)
  "e0c2d436e7f9380e9acc538c590c64b4_8687609261078809286", //  58. Absolutio Absoluta Absolutissime (Arlecchino boss)
  "81a6271df88fc27c6a3d38553e49fd36_4656692342020292354", //  59. Silhouette of Catastrophe (All-Devouring Narwhal)
  "3566954ff52c0ffcd15f30cc8c93bed4_2438909851184405900", //  60. La Vaguelette
  "6c6bdd1142f26b4a9baa246c8a724850_7936975736902897054", //  61. Natlan
  "a99462f48c975300f17cc60c87a87a41_1427163608436745367", //  62. Campa timoyetzticah, Cempaxochitl?
  "1e65a6e475c86e9247eb471b6e34ff31_2235297237649622462", //  63. Makani 'olu'olu
  "6c6bdd1142f26b4a9baa246c8a724850_2750327199430597512", //  64. Chasing Flames Like Strings
  "6c6bdd1142f26b4a9baa246c8a724850_4219878734470483914", //  65. Venture of Tonalamatl
  "6f22131219249ccfeac93be3f780c1e0_5724382603726989157", //  66. Hot Spring Affection (Mualani)
  "96e71084c479b02d4bbbb557ebc4f711_1937360019813694605", //  67. Note of Effective Settlements (Kinich)
  "359d0bf9ea693fe693f2894349deb42b_4579712285999891563", //  68. Pirouette of Pika's Pike (Kachina)
  "7e431036c5917d61f31f317c416b48a5_2115308287173226514", //  69. Lights on Me (Xilonen)
  "45b794398156fce13a9e59159c067614_1474771362762338210", //  70. Viajadora's Verse (Chasca)
  "02b071fcf980e5afa0c42b8e67f96e4d_4474241354971555291", //  71. Rain of Seven Curtains (Ororon)
  "da1b86b71a423003f032ce4d935c0abd_8547298793836813093", //  72. Chasing the Rainbow (Spiritway challenge)
  "ec2a5365df990461a079770afcc3df18_5920912758463248428", //  73. Springtime in a Mirror
  "c16b16135d34948a26191bb61c037a59_9076454596033147998", //  74. Night's Crown of Flowers
  "c59e8ce51952fbe7b85d6a11ed36adae_1461532934401265660", //  75. All the Pretty Courses
  "9eaac6628eed824fbcc8393e92988b9c_6450878394447401223", //  76. Bounty of the Fertile Slopes
  "9eaac6628eed824fbcc8393e92988b9c_648104039832031138",  //  77. Sleep After the Toil
  "0a546455a6ee820533c674dd61772e4d_5604393205782671010", //  78. The Chosen of Dragons' Trials
  "702e6b54ec138450ac24e9ba3e13dca5_6637755388896118159", //  79. Tumaini washa moto
  "1a5b1fb899add2cb706c36c181298349_5713532851970430038", //  80. Interstellar Drift (Citlali)
  "68e57d2148d18f7f0113fb89a943c25f_6709299615654517118", //  81. Valiant Duel (Varesa)
  "4ee612e29281d0b639be1f66362abb3a_8998481784526275210", //  82. Fitness Lesson (Iansan)
  "d331c5ecd519708578871af5c04844f2_2591277945488002202", //  83. Healing Breeze (Ifa)
  "ef0a7878137aa1f809a4896cfb0342d0_675478973105397717",  //  84. Ode of Resurrection: Recapitulation (Lord of Eroded Primal Fire boss)
  "28e9da7fb64e6a02324c58423bb12ea0_6361120944487481728", //  85. The Road Not Taken
  "cd5d360c51c90c2ab1a63c25592a2cd6_7273313114046100879", //  86. Passing Memories (CN)
  "fc2e74c994c70c2f5f383ceb8bbd7290_4970543284748739587", //  87. Moonlike Smile
  "2e1f726869a73467df922841868386f6_266281876706423882",  //  88. Borrowing Winds of Harmony (Xianyun)
  "1d5d5102a483cf16e46f85e512e6a82b_4968805729585829442", //  89. Shirasagi Princess (Ayaka)
  "4fcc1663bfcfd018c3f39fb97e762ad8_2612191074470134399", //  90. Fervent Flare (Dehya)
  "69a34600e21cd7e9ff9c55e117c2ea39_1523004700850690192", //  91. Romari Time! (Sigewinne)
  "7dff632fcdf9b159200d294708787235_712301342236996426",  //  92. Blazing Heart (Mavuika) (CN)
  "e9c493c29bb5dceefc64f44a1f6317d6_9133726053901729837", //  93. In Stillness, Waiting (Skirk)
  "22a25a31dedf2d2cca87077f0f17b347_7890292611472863993", //  94. The Rime of the Ancient Bargeman (III) (Lan Yan)
  "90e7f08b4153a228ff3c381c06dbddd8_5245938305079531531", //  95. Emberfire
  "d6bc49e7af3b8579559c0e025b252b12_4876038772843220773", //  96. Song of Innocence
  "cd5d360c51c90c2ab1a63c25592a2cd6_5337171015843960450", //  97. Passing Memories (JP)
  "cd5d360c51c90c2ab1a63c25592a2cd6_5394244487887776850", //  98. Passing Memories (ENG)
  "7dff632fcdf9b159200d294708787235_2510357915454331188", //  99. Blazing Heart (Mavuika) (ENG)
  "7dff632fcdf9b159200d294708787235_4417756487654552812", // 100. Blazing Heart (Mavuika) (KR)
  "7dff632fcdf9b159200d294708787235_5942753308697345556", // 101. Blazing Heart (Mavuika) (JP)
  "cd5d360c51c90c2ab1a63c25592a2cd6_8107996660789892278", // 102. Passing Memories (KR)
  "3c3b0d2c293674dda1ae2d9c201d3103_5689661727521431635", // 103. Sea Shanties Resounding
  "7ebcae542f1d36953dab8f5f2951c77e_455084595095068680",  // 104. Syntyloitsut of Koitar
  "d9252876bae8ae4734dab34fd07c0a69_5236219711346656854", // 105. To Light the Aeon Dark
  "0625e2f282567901650062e40fb55ed2_494183160713143517",  // 106. Lullaby of the New Moon (I): Somnias a Luna
  "b53f60661542a6fb3f003649f002b7d1_3548066418318163416", // 107. A Carefree Cup
  "1ab555c8939f136dd14b4896733d256a_4199575340953730274", // 108. Duckle 'em Down! (Knuckle Fuckle)
  "44ec931340d3da04914890be7a0561ce_65582437581873505",   // 109. War With Pepper and Fish (Ineffa)
  "c7c7bf67c81f1ace8e294075b67a0b40_7318505960298657609", // 110. Lumipyhaemetsaen Polkka (Lauma)
  "739688060e430c2976b0e0217a1427b0_205130765600419308",  // 111. Entombed in Pale Fire (Flins)
  "379d0acc277271b9e5f3e5dee41a3c63_3934741276654682255", // 112. Ingenious Trip (Aino)
  "171bbfa3115e1bf6040de6c20c4e3fb7_7037119754688640112", // 113. Machination of Mehenet (Nefer)
  "16d020f96bebf95cb5b9cab005f90d42_4679875028334321817", // 114. For Your Cash Only (Jahoda)
]
