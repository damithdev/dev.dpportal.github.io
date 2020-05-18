'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bc705d2a2e9b9f1dbf4903f0563e64c9",
".git/config": "afeb0c97ee2d224d7a9bb44a0a9e7e61",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f5f70d662b467e125b48d85149ea4379",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "dc565c4e1da7f7ae714ab0df8abfa39f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a1f84c45742703d62b47c123703162a",
".git/logs/refs/heads/master": "4a1f84c45742703d62b47c123703162a",
".git/logs/refs/remotes/origin/master": "213c13c723d8a5338f1051db8e5ed52e",
".git/objects/0b/9f6545d9af407f7e9cb291a5c2c0a59e222a8a": "c7d5dd35b70b10aee8cb5e55257d8a21",
".git/objects/0d/66ba50f27d008671309ca46a57c7f670aeff7d": "20fd67c875c59a83c8bd2309ca2a76a5",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/10/1e23a925d5f7ccfb5f31081cdf31468ea4f421": "83540cb857a5a4cc90ece960c436f2af",
".git/objects/11/8d460a614af07447c2d56bca3673d4878821ed": "c02415dbe6e96dd63cdf95b4c0ab6fb1",
".git/objects/18/f45291518f3a554474b2c3199d044cb4c24a5b": "5e729cdb3fe3caab188a5b57c158f41e",
".git/objects/1c/0285c28548b9d2bd94e43627737b87ae7e910f": "f431eab9febd3ef92a614beb85ed3f38",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1d/0c0c37d4c547e59f796a9f6f589d91f63fab3b": "3b8a32d9554d287452c6c1ebf7241e36",
".git/objects/1d/c51d485ef4256c24a488e50319d811d052268f": "b1170dd4add0e20651ec646411989411",
".git/objects/1e/fea1549ff012807d2679ce6236ec45682bdc4f": "d1955908209e49e3f797f4a65ea8f7ac",
".git/objects/20/3790656bdd3df33c67e2b0d2e6842076eed769": "ab5fe6b45921e1dd4a8acc153dfc7f67",
".git/objects/29/f50d9e0328701674ac12cc1806e05f26984aa2": "e5e64c7742d3c496ade996b92c711c81",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/30/d263ed270325f05a1d2c334e1a71f334783c8f": "70301d65db042a13caa4492271b2f554",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/36/a3d5b5016c4fe20147fa5ad953dae34c12a0e7": "53e7b8bbeb886190493936b3ef5e25c8",
".git/objects/36/f055beb2230d63aa9ca0d98d64794aa6855f5c": "5ed6b184b82e5d2474677755691691f9",
".git/objects/37/e959542efa20a32b3d1a44a76e0e306c7c8d8a": "3269cd310159efc494fc3d3fcbb4d56c",
".git/objects/40/cc9c037ac45c082e5039a33c45d96e2724d52e": "3c49aea6af82d0a907a8ce45cf9b80f6",
".git/objects/41/a69a83f870df18189fd92af7e83dbe4d879599": "5e2f06722f1ab76c1510d92930a62dd8",
".git/objects/41/cf1266b12b95585668055a9dea402ef91a0804": "f1d6525d9d021fe739ccffbd7956b92b",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/47/7bd40f83c1d4b4b94d6bfdc36dae17de412d87": "42639ee46cb7ecc8d687c2ec69612cf9",
".git/objects/4a/b55c37b6dee3a4d1f7c22651a8abc4eaa99b4a": "dff478659fb2c1d651f5016c2c62ee38",
".git/objects/52/51d8b794f97601f32f45a5434cdfa73f2b7650": "90951ff82ab18c00222c8a2cf9f89e48",
".git/objects/59/46e07b6d85a2a4d450d863ad830282c304fcdb": "c01f81f8a0a2d10b8fd3113cd8547073",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/60/d34195c0c358c6194996ee4e9972e36acd93b2": "73d8d265f8dfa46b2e668c8a2c513154",
".git/objects/64/96a37ad82bb6f88071f59cb4460f3cca805052": "dd30c719a5cd093c77b18312d34d71e8",
".git/objects/65/8cbd89841d270c1e9b47f9b4388f998ed01209": "21bef8914b6635d951a3aed49d1d58c9",
".git/objects/67/3db39b2a3d08225f5cc71d1983efe8894ef49c": "d983296f3c4e461d93bf27e9ac9cd65e",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/72/1fa603b643866c331ffa087b7682df17391955": "3c4421d9183cb2b6a5fb35a974b39b9b",
".git/objects/76/d752d022c07c1c1f8d4a2a0a1fe948492901fb": "297515d259439f606c65e83bc2045d85",
".git/objects/77/9b5f178372901ceac907f34739afa26924d632": "781b7c66c38a9d1edf6681daa705a47c",
".git/objects/79/1148e1a396a4014788a72a02ea5004a97a2ac9": "9640401f7bbd5c8d40bc022acb67ea4f",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/7c/d9a04cb57a0755953049e6d33fdf34edca68c1": "414459280ff9421bc4dcdd7713a9c3c0",
".git/objects/7e/83e942c892195e7cd73cd05c92c241ac0703fb": "f85feac997f97e71984a6a488ac1b0de",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/adb254b38f33aa50f5fd71386ffa0c47301689": "b66e4997b8b7a688500573243f3c7bfc",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/84/fea090f7996ff4ae9a9ff789d493c1475cd289": "c0385a7dbc7927411aa5b24f5cd7fabb",
".git/objects/87/6b2b0a787e5b066225e32530a29692833b5d23": "f2480a1b5e1f92235112148859fd5139",
".git/objects/88/b2a8613c84d1a3fa1fd9caf8e1bcfc585a2e6d": "2018bbdfe53412188922f1a29e25b281",
".git/objects/8d/b52996aa66751e93e8b4cedd1af129dda78f0f": "c86a5c15a2912999bba6eda4ffc3bdff",
".git/objects/92/82ae59420525df8cf9e051fd6faf7c36f06566": "a5cef06d30fd8c987167740bc926865a",
".git/objects/94/4ceae679b9e5a5bc0d1726f2d30bf6b1e6369e": "1777c9e040282bd2c0c790271cb57274",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/97/8133e902d7d5450150f6b28b6267db8aecb32d": "3f33a42e1a88f434cc339c54ef5c443b",
".git/objects/98/6f2bf87a24ccc76155d9d9e8c7a5ed0b0b6b45": "71ff88b0f14e517d18fea097f8512735",
".git/objects/9b/9d1bc54087149fb9fadd90ce2d2072fc67edc1": "ca79721bd7d3d56bd67037662f78e5a2",
".git/objects/9f/56a8367875bcbf3f6090b51ae68ee7e7084079": "4aa7ba8bc33f933bbcd95ab738ecf82c",
".git/objects/a1/f77a4efd4a976b29584598919483022fa979ea": "7a64ebe83b6d758f578f6cedda5c3c94",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a3/b09142f24c49c6ec601def08b206d9a0e4fc3c": "6c267aafb73d3c78558fbfe4b92f2843",
".git/objects/a5/58661394be0c15d585caa9e8350e6127cda194": "c78e6d2ef5129d46b019f6ead4c37e1d",
".git/objects/a5/a95fd965bd8469f5c5c20658c166f7e66e66c0": "452a376e512c51e41e30f34014fadee3",
".git/objects/a7/1afeece63dca4b1a316af7d8a7e2d7ee5e9f2f": "02e34e73d3926404d7dea939f441aaeb",
".git/objects/a9/3a6d0005d1afd9842e184d2cb47157a31f8e18": "fc4561cc8da4fc7e70ff181bf4c92626",
".git/objects/ae/84ed9302cd0c30030bc0f45327273457b92e94": "893db96b38b1ec5da10c39b6d4a4126b",
".git/objects/b0/c30ee6e9a83558e801363122b76829eb9f856c": "04a5e68674882513bf2b68b07866fb33",
".git/objects/b0/f0932fda275afa33387b02dba789f09677d0c4": "bc21351d23476fba5511f13857ce4a77",
".git/objects/b3/fcd88eae50f337c3f15c5309d5c627fa32846c": "b00b72e6cec999d6b4581658fbaa5f26",
".git/objects/b5/952dc2f9d7cf63d9f540c0e250dde371da2247": "5db421b3c6b35a83588b74367605f764",
".git/objects/b7/74bca65f7762aac2ccf37b5788a457d0062825": "ab7f15d34d20cd5a8e4d70667082ffad",
".git/objects/bc/582135bcacf33b9b02c559af52f235315f6672": "6ac8a9718f2eae70ec43d09cd0cf93b5",
".git/objects/be/226f703346f31211d00398a615f9949ed21271": "eaa883282b6239cf52c5ec8f23442c19",
".git/objects/be/8c66e1a073d1b25d0caa1674f2f3637380c82a": "36f0084094fe228fbc61ad1281bbabde",
".git/objects/c0/633440cce02b71afa434faa4bb9634bfacc417": "d82ead46e6bc640d88bea3c8e3c4dd01",
".git/objects/c7/9ddda44060a12947a773a6c448243ecd8ea143": "9458b6eeeb67cf058169c8542d056461",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/c9/1f7ddfee052a141f6ef3cc07bcc7e617a4b7e4": "770dc598fa4f00d28de6984af62d5836",
".git/objects/ca/2e37ab7167f4a8e323692d3814f76461102963": "3ae7fa921b5621c084f0fa6c73f36c95",
".git/objects/ca/8e0df7b5e2ac9c537895a176fda3914f541e57": "16022f1f7d5e6d8d5e37ec1310a37224",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/cf/e7cdb3c74e8d8a89ac1ce40f74d20defec27a2": "edb80593e6b9b44ab3b9cb7cddc8ff9e",
".git/objects/d1/af127092a892727f9b67987b85636648a0c6a8": "8e82ac50e66ef1bf6fb6ca8e78c97697",
".git/objects/d4/e2f85ba4eb0da581720b7eec36c935c2225014": "cc80fe31c60a8309425255e3bb10f404",
".git/objects/d4/fbb91776227e47224bf7e34684aaf5031e19fa": "97dd7e609867e4cadc38df13e09073bc",
".git/objects/d7/0484f12e12c62ad926223d618b9385b8371ff7": "5ed112806d79543153688bbdeba5f7b7",
".git/objects/e2/31f9e9cbfa4c644df74a068a5015beff428ca5": "24a28f7ff762b0bbb2381a87256edeb8",
".git/objects/e4/43f392fb18c301c1c855b4c1445927e3baa25c": "823cea168f217b6ecd631e0f140c73ef",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e7/4c7b33669596cdb3c706f3efb68ecff4ab2135": "1d9065051200c3343d239086a5fa587b",
".git/objects/ee/52b37234cb66373a70f4658e7be96f9c6ddf83": "b871743f89926da26e54de513616e81c",
".git/objects/f1/4f28c3f2710f9105f98c7bcd471cd9fdf8d23e": "65a6a9a9cab8213a689c4b5a184a88b9",
".git/objects/f5/c81592106e0e94360aa6f5dc11b22029444e61": "cdd584bef326e5a521e4d76d746b6d14",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/2fba2b20bba4bbe2aa0d08b6009b32199f9949": "8d69b48324625c9f90a385f16615b433",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/pack/pack-02a48f13a63acc2d023cb820b74095b858efa40f.idx": "e980387d96bad06a1ce8b109854cfc92",
".git/objects/pack/pack-02a48f13a63acc2d023cb820b74095b858efa40f.pack": "011ec8320c63f0b78da816ad3bea5440",
".git/refs/heads/master": "a5fed3f5e2dbf2366556f0c96ed37c1f",
".git/refs/remotes/origin/master": "a5fed3f5e2dbf2366556f0c96ed37c1f",
"assets/AssetManifest.json": "8f400ed38d30b3bf8437f766d2def14d",
"assets/assets/fonts/Merriweather-Bold.ttf": "d9f26381ab442285d6c40582942f9a55",
"assets/assets/fonts/OpenSans-Regular.ttf": "5a798cdadc7cd321e3f72425b70bface",
"assets/assets/fonts/SF-Pro-Text-Bold.ttf": "23ae29cff15becd829501874372fa850",
"assets/assets/fonts/SF-Pro-Text-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"assets/assets/fonts/SF-Pro-Text-Regular.ttf": "12d8580f658f54bd0a4c4fc5a5983a94",
"assets/assets/fonts/SF-Pro-Text-Semibold.ttf": "77690a3c3c360557395489fa2e9ce27a",
"assets/assets/icon/nav-icon.png": "e2144cdf3701e64a507b56b16fce9fc6",
"assets/assets/images/american_express.png": "671947fe3ff8646123a6e1fd566ba3b0",
"assets/assets/images/android.png": "7a34eb0198e8fb5947db86a1202eaa76",
"assets/assets/images/apple.png": "957b0ab762be8f30acbe5dd48b8a05fd",
"assets/assets/images/arrow_in_circle.png": "50ab9671d1a6febdce10fa0c5c35fbdf",
"assets/assets/images/bar_chart@2x.png": "b97b58c53d3d4d1f55394067b1c7dffd",
"assets/assets/images/bar_chart_blue.png": "e4defc2e8fa1ecfb886b59f08658b485",
"assets/assets/images/bar_chart_green.png": "7a6d87cfaa639de001833a3d6a4cd706",
"assets/assets/images/bar_chart_purple.png": "a209cf793a37fc724ebb6dc1907e5bce",
"assets/assets/images/bg_create_account.png": "e19590362c47802c56266be9146b9439",
"assets/assets/images/bg_create_account_old.png": "d2fc7ef1fe3679e911c50e26b7b18e4a",
"assets/assets/images/calendar.png": "1ace850edad95118bfe9a48262033f0c",
"assets/assets/images/certificate.png": "202538bd9c01b5790b7ec7cd9a41c5a3",
"assets/assets/images/chart.png": "cff0e771ae55a1adc7b9b16a86e13297",
"assets/assets/images/cloud.png": "7d234ac6f6bb4de6c570c2be766b87bc",
"assets/assets/images/copyicon.png": "ead04ed1d59511f456bbcf7891a023b8",
"assets/assets/images/csv.png": "0d24bb8ca49960f1d6d6c9c54af5a242",
"assets/assets/images/directpay-sandbox.png": "f476a0f665bffd95825a004db0cb8942",
"assets/assets/images/directpay-white-sandbox.png": "4c66f8323b549910fef366506813afdf",
"assets/assets/images/directpay-white.png": "e74dcfbfa869779395e4d75c8693f75b",
"assets/assets/images/directpay.png": "7c8b5113a83dfe4ac37702e69f13e69d",
"assets/assets/images/directpaylogo.png": "56a54bddd15c8f5d96cfef66eb046c84",
"assets/assets/images/double_down_arrow.png": "b8f7d5902dc41ad224cccdea4a6b81cb",
"assets/assets/images/download_arrow.png": "a4369722c4b2b812a4766192dd832887",
"assets/assets/images/dp_loading.gif": "774d7139ec48bb6b56de41e3c0dc3cd1",
"assets/assets/images/drop_arrow.png": "14de6227ab7c9ef775df7feb26e3ebe8",
"assets/assets/images/emailicon_Icon.png": "609e3550927dcfe164a69570f1fce5cf",
"assets/assets/images/filter.png": "ae94cfb66980967aa1eda5437622abd7",
"assets/assets/images/filter_button.png": "9c86aa72b585851323cfa533e3dc883c",
"assets/assets/images/hidepassword_icon%2520-%2520Copy.png": "68715c81a547165f50f96f68c3da67a4",
"assets/assets/images/hidepassword_icon.png": "68715c81a547165f50f96f68c3da67a4",
"assets/assets/images/icocsharpdotnet_sdk.png": "3f8e24f46492c5f0c804764c3867a6b0",
"assets/assets/images/icomagento_plugin.png": "0c9604b8843350b912c8347b410918ec",
"assets/assets/images/icoopencart_plugin.png": "c8f689ff64dcd3e1741d5a97f9281aea",
"assets/assets/images/icoprestashop_plugin.png": "c1d2942edb2a7c3d7afbd347f17b7832",
"assets/assets/images/icoshopify_plugin.png": "db25540150c50c87781ddab1df5eba7e",
"assets/assets/images/icowoo_commerce_plugin.png": "2e8fe22407f7ebebdc26b5a1682c45a9",
"assets/assets/images/iosicon.png": "244705b26afc0b8865290d550f55b35d",
"assets/assets/images/ipgimage.jpg": "d8355a89d89a21605830ff6e6129b258",
"assets/assets/images/js.png": "a585f959442d375884c4164a48e4ba3b",
"assets/assets/images/list.png": "d81f8146fb75317a8f9371e049425acc",
"assets/assets/images/list@2x.png": "5b173f7588b257be4516f15a9f121bbe",
"assets/assets/images/lock.png": "95d71027fca8b876c18964f0a6c42f62",
"assets/assets/images/lock_icon.png": "58ef4ae9e9f4da28f610856e81ec2068",
"assets/assets/images/login_page_image.png": "a40a9d1c2e806bea29f49a32e92f1f7b",
"assets/assets/images/logo.png": "2cfd065d8ed56a25e1b1a3150e3b1694",
"assets/assets/images/mastercard.png": "64d1f60da5485b9856e09c080b8ab645",
"assets/assets/images/mc_vrt_opt_pos_73_3x.png": "478335ad73f557740203d17075778d29",
"assets/assets/images/money_bag.png": "634d36a70079da3dc69ee5c4f55f8eba",
"assets/assets/images/package.png": "be8d1edba0f17618df23a74a7f359252",
"assets/assets/images/payment@2x.png": "e171e5eddfd8af5bf375c055533eca52",
"assets/assets/images/pen.png": "268f65aba054ee59de2a3dddac3b8f26",
"assets/assets/images/pen@2x.png": "194f7789ed775320efc04794ddb9c740",
"assets/assets/images/photo_camera.png": "34bc4a21b56564e2cb0b54c6b8fe1711",
"assets/assets/images/point.png": "ce33457f6584d85300c1d86f9c5b4abb",
"assets/assets/images/print.png": "2de321457012bd3c9117b208bd86eb7f",
"assets/assets/images/redmo.png": "42579992f906c0bc9eb812284ceddb6b",
"assets/assets/images/spin_light.gif": "8cd8c052d96c78ca99815269100a1e91",
"assets/assets/images/spin_simple.gif": "6a3eb8f56bf682c7f19ec32b1bfeccbd",
"assets/assets/images/star.png": "59975ae175691a07fb0bfc5319bd62e0",
"assets/assets/images/stats.svg": "1ba17781719d4a7e5157e74110563215",
"assets/assets/images/test123.png": "b9ca67695099f8980cc52c00cec3df3d",
"assets/assets/images/up_arrow.png": "6659512a6eac64d0f5780ed9de4fd36a",
"assets/assets/images/visa.png": "f03f09763b06fb903cd0cade4900e4d1",
"assets/assets/images/visa_logo.png": "f31898f64d540a32e14e94c4dffc32be",
"assets/assets/images/waiting.png": "6e186a51fc145f57e20c364fa52262aa",
"assets/assets/images/_certificate.png": "826e3ce1cfd47f6033460cc6cd58ec50",
"assets/assets/images/_chart.png": "a3a529c8c271a5a180a8e3d80edd5cd0",
"assets/assets/images/_pen.png": "39ea91e7f9b355d8f423f76e878b73c1",
"assets/assets/js/directpayCardPayment.js": "9db0caf6ee801911c42fb10f4d63a43a",
"assets/FontManifest.json": "b38835c6b713f46e45a71c178558207b",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "b55eb96e097e0472bc9e57321625ac52",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"index.html": "b6a19e502a43a95507ac31c0f1040942",
"/": "b6a19e502a43a95507ac31c0f1040942",
"jquery.dart": "50f4876313fad908fc7042875507d047",
"main.dart.js": "e08bf749dd5770701c82cfcd025536ac",
"map.html": "a915ef34a0cdd2f31eea779184bbb725",
"mapIntigration.js": "1452296d4a468898289bf508753f2bf6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
