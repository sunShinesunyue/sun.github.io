/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c4f3043d0a27a7075004b3ea33bb52c2"
  },
  {
    "url": "assets/css/1.styles.501d86fe.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.c9cb80b1.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.8ac82364.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.bed5dda6.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.25ceea1a.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.0a83aa01.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/7.styles.65b127a3.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.2a593b1b.css",
    "revision": "fecdab6fbc2c34817d0b01b77565c040"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.501d86fe.js",
    "revision": "f71f6fe1a5551e60f7d3e22f27c816cb"
  },
  {
    "url": "assets/js/10.22f292f5.js",
    "revision": "f63020a22074e0079f771a46dc2f2161"
  },
  {
    "url": "assets/js/11.b4395381.js",
    "revision": "8678617b37c681c6f6596b86d6a48770"
  },
  {
    "url": "assets/js/12.00072de8.js",
    "revision": "1199328dfbc9c7cceb01054918f05d8f"
  },
  {
    "url": "assets/js/13.cb7a8d3b.js",
    "revision": "a72c3f0deb3369d36aa0ba0bf72b505c"
  },
  {
    "url": "assets/js/14.8bef2330.js",
    "revision": "b4729acb4d6b10e93be0fca638c1247f"
  },
  {
    "url": "assets/js/15.c7825f92.js",
    "revision": "fe1ee804a902cbff8e2d5b37a7984456"
  },
  {
    "url": "assets/js/16.d9556664.js",
    "revision": "841ca4acaa7eb2f4509ce38a2c6f13d3"
  },
  {
    "url": "assets/js/17.b526cdca.js",
    "revision": "ce483cd734159d1d0185a89f892a2bbc"
  },
  {
    "url": "assets/js/18.c65b42e0.js",
    "revision": "e43e69095d9e8d96c3a34d109b282f06"
  },
  {
    "url": "assets/js/19.71e09c2d.js",
    "revision": "bf5632378f483711be5aabcd672cd6c8"
  },
  {
    "url": "assets/js/2.c9cb80b1.js",
    "revision": "98c95e463118d65d1b71197af8f88669"
  },
  {
    "url": "assets/js/20.5cfd27a0.js",
    "revision": "9dc70bddf7d92bd20539cf66e79a7995"
  },
  {
    "url": "assets/js/21.b9ddafb3.js",
    "revision": "29e4429e04c9c5a956e660b4d5a70685"
  },
  {
    "url": "assets/js/22.9cc8258f.js",
    "revision": "ea4096846013dbafc2352eaa4fd8db39"
  },
  {
    "url": "assets/js/23.d672cb2a.js",
    "revision": "a62a86007088d6c8351b69391a6d90d9"
  },
  {
    "url": "assets/js/24.14460536.js",
    "revision": "f79abff90a05cf2b83555fd60866ecdf"
  },
  {
    "url": "assets/js/25.b80bfdec.js",
    "revision": "f9112f11dae397a2eeff9372eb414481"
  },
  {
    "url": "assets/js/26.8bbac73a.js",
    "revision": "395f1a37f5ae6dbf01ac6137cfd3ebf7"
  },
  {
    "url": "assets/js/27.f46a78ca.js",
    "revision": "d43c0faeeba7a92db1b9233f4c638557"
  },
  {
    "url": "assets/js/28.9ef6ff7f.js",
    "revision": "fbcd3c43c34503121e86c9fb380cfc32"
  },
  {
    "url": "assets/js/29.678b7ad0.js",
    "revision": "be1e0e3871ce22e52c40614a571a6127"
  },
  {
    "url": "assets/js/3.8ac82364.js",
    "revision": "6f66802dcb398ca7c3080745197f3567"
  },
  {
    "url": "assets/js/30.2a4a690d.js",
    "revision": "fd74f369d746d24edbea0caf47355c87"
  },
  {
    "url": "assets/js/31.0fb972e0.js",
    "revision": "e04079ec97d66593f35108d1d7afc12b"
  },
  {
    "url": "assets/js/32.d2197a33.js",
    "revision": "ea723009fb5a45ad1b4ceed2696ebc27"
  },
  {
    "url": "assets/js/33.3fde4f43.js",
    "revision": "a39a2fdee95500d0d80c02bf5d965f45"
  },
  {
    "url": "assets/js/34.ff43eb11.js",
    "revision": "15d0f8a11ca93205456c2e402ca190b4"
  },
  {
    "url": "assets/js/35.c464e87f.js",
    "revision": "55f8b5543a66a2b0f0ffdde316d23112"
  },
  {
    "url": "assets/js/36.adfc2954.js",
    "revision": "1c5d9364a20aab64fff87ca423a98587"
  },
  {
    "url": "assets/js/37.d3af2686.js",
    "revision": "d4427682e5ca1b70bcd5762c396ca3a9"
  },
  {
    "url": "assets/js/38.e4a67a67.js",
    "revision": "92be339d3bf7c8bd4048a8c79f966629"
  },
  {
    "url": "assets/js/39.343d5218.js",
    "revision": "7f748daceff67a0d6f592f7f5eed68fa"
  },
  {
    "url": "assets/js/4.bed5dda6.js",
    "revision": "e7cc6fde19e2511806b90e57e4807bea"
  },
  {
    "url": "assets/js/40.ecd051e2.js",
    "revision": "b85d947fa65ad7c80f82428814efea46"
  },
  {
    "url": "assets/js/41.44a41aa9.js",
    "revision": "504eb7f8b22be5270c6fdf80ec026bf9"
  },
  {
    "url": "assets/js/42.ee75495f.js",
    "revision": "7c54be4e022266137ee844bd963beeeb"
  },
  {
    "url": "assets/js/43.af2f797d.js",
    "revision": "5a0772b746ca47d76d55eac4542eeb6e"
  },
  {
    "url": "assets/js/44.4a1ebd41.js",
    "revision": "d351f3de0aac6b4f77e015873fc24d10"
  },
  {
    "url": "assets/js/45.1c168f0b.js",
    "revision": "b8452ff199f5af9184adb8c9efda02d9"
  },
  {
    "url": "assets/js/46.41df8dcd.js",
    "revision": "70c0ae9c7c23d380a44bfe351fc138c8"
  },
  {
    "url": "assets/js/47.cf652d47.js",
    "revision": "6490a05d473593ebecd904467f0fad70"
  },
  {
    "url": "assets/js/48.a112115d.js",
    "revision": "45b0c18851f3c3ed65a22981631d782a"
  },
  {
    "url": "assets/js/49.b6622d0e.js",
    "revision": "b35fd697ad950ef8e07fa6f68fd11176"
  },
  {
    "url": "assets/js/5.25ceea1a.js",
    "revision": "ca8c5c70e829ee573b6f528f7011f622"
  },
  {
    "url": "assets/js/50.ef9f0a23.js",
    "revision": "7b66623587aabbd50542ca97f14c2b34"
  },
  {
    "url": "assets/js/51.e16df866.js",
    "revision": "86dcd592d0e323753b516a299e95c7b9"
  },
  {
    "url": "assets/js/52.737f571b.js",
    "revision": "d7bba9f331d9a4892fd373a6b1a07f24"
  },
  {
    "url": "assets/js/53.4fb24f91.js",
    "revision": "d6337251c45ff6320239374cb2ee55fd"
  },
  {
    "url": "assets/js/54.3b95fd8b.js",
    "revision": "1cc074c3dadf748ee4b101b289b9218f"
  },
  {
    "url": "assets/js/55.b1ddb9e5.js",
    "revision": "e1596be412f39543e76601515b26f259"
  },
  {
    "url": "assets/js/56.37f20301.js",
    "revision": "676256c07a474572b5828c275af291e4"
  },
  {
    "url": "assets/js/57.1fadfbe2.js",
    "revision": "e84ddcbd4202b44d3e1e0825faf6501e"
  },
  {
    "url": "assets/js/58.c7a96842.js",
    "revision": "3949fce50ca28eda27fd4067cc37d31e"
  },
  {
    "url": "assets/js/59.03fd902a.js",
    "revision": "c443af99d8c2dcaa1d897e7486ee7add"
  },
  {
    "url": "assets/js/6.0a83aa01.js",
    "revision": "a5564d9a02d14a66df7b7d8e0b079969"
  },
  {
    "url": "assets/js/60.6c2504bb.js",
    "revision": "f3681405bc76c4e3539b77558a1f66d4"
  },
  {
    "url": "assets/js/61.67babcd0.js",
    "revision": "a972d8173578484f452ece016f516006"
  },
  {
    "url": "assets/js/62.5acb36d8.js",
    "revision": "57b3d0734f5972ec412d30ea4a6a1f95"
  },
  {
    "url": "assets/js/63.1810bd79.js",
    "revision": "f37750bef48e4ea9a18ab5921bd763f4"
  },
  {
    "url": "assets/js/64.515cb8b6.js",
    "revision": "2220a1167550e0dd289a71777d1f3273"
  },
  {
    "url": "assets/js/65.65d4ad04.js",
    "revision": "7514eee479fb90bcfe5ccc2d88c5a3a5"
  },
  {
    "url": "assets/js/66.afbb38ec.js",
    "revision": "68332b88f53a25488a40fea273590c63"
  },
  {
    "url": "assets/js/67.e85f8ea7.js",
    "revision": "ef5e349fc3a1d3903876b909cdb443a7"
  },
  {
    "url": "assets/js/7.65b127a3.js",
    "revision": "a065a1cd372fd5240a8700c4498df6c1"
  },
  {
    "url": "assets/js/8.7f63ca7b.js",
    "revision": "ed8b2403e40a7002d7900653100a9735"
  },
  {
    "url": "assets/js/9.c97e982e.js",
    "revision": "4002ed4bde68beb7eb6119ae38931603"
  },
  {
    "url": "assets/js/app.2a593b1b.js",
    "revision": "7ec4a2aa6a70c4803c5c2c11768dd43c"
  },
  {
    "url": "author.png",
    "revision": "ab1997b12a7d3bf88b03122d2f26a145"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "config/index.html",
    "revision": "4a1e7c2cb0fb47f72a940fe251ec714e"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "5db5758ecf9f8a9407efa2186213fa21"
  },
  {
    "url": "guide/assets.html",
    "revision": "11f79e1b976f585ff08c0c2b16879914"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "f636b3ab17a9b74e9660b6ed857db373"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "3df7ebc674966508c4a3963ad6f582b6"
  },
  {
    "url": "guide/deploy.html",
    "revision": "813eba246636431a39ac49270398a3fd"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "170dedf503553904bac13c4375bdda95"
  },
  {
    "url": "guide/i18n.html",
    "revision": "4decd97a00441305ca239c8665f88de4"
  },
  {
    "url": "guide/index.html",
    "revision": "0e68ab57f2ed61b038450c560481f336"
  },
  {
    "url": "guide/markdown.html",
    "revision": "416c66128f1081386791a058a98e8a9d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "80f9facf6e7c500f7eb7b9f31551204b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "306efc002bf99310159969f22c4439b1"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "7316b1d009f90e9bbcaa845018773bf2"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "e061dc88cc95352d1bb90ebcd2f02e14"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "6219a738edc49231556b696e72564a24"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "6046ac6c85e1c9240dc533a7a60db604"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "c71643bef64101cf35d0814c96ad970c"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "16ce1e7668c3627524544bed85b760c7"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "d1aa1e23b70968b4b68cc663ca4d64f1"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "e07ea205fad48145d87e9f3cf0518cc4"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "fdd9491db7faeba9276954cf6f679d13"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "8f2a77ce20e50d757c6a88d9516980c8"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "bf3dfb9fdc7e8cce17f898f46d724095"
  },
  {
    "url": "zh/index.html",
    "revision": "3f37fd867dea359693b9b84a237a712f"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "3031f4e6c051d3b91dce169f691d4d99"
  },
  {
    "url": "zh/interview/headline.html",
    "revision": "ef77009108f6ef8cfd8f92a3d6dfe022"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "b5d2fd3454a3caf7a1924fb0f7246276"
  },
  {
    "url": "zh/interview/quick.html",
    "revision": "0fee23e0d56a51b56130e50b3606e630"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "161add0a5ae13671104d152fa5c3cb73"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "c86e6506f96c1cea2f5f612dbfac7950"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "96804cae103db74b743f18c2508a925a"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "3ea8eae58d3173178fb30681fe0fad22"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "bf4bee7864fb3b2eac03f1f7e8519dea"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "476b35a2c15bb87004dd5ab011f319eb"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "56498c0e4b3c5dc8827d84b2d2de1378"
  },
  {
    "url": "zh/react/index.html",
    "revision": "a51461c3e6ca635d3801a3856e95870e"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "9226f71e879d2dfa47838972c1a94cf6"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "2c42a24fd902a34ee0315a79dcf2161e"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "ebb157ba83504fbad9bb5a7269c6ea57"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "52b4b3b3d97d3ed2e02c185c2ddd6f59"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "edf36cb341bf7a99e2a43c68913aa071"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "511bbc3809d7b909ff86046f1051d4ed"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "88c51767867186c7b3c29cdbdd4815ca"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "9b7563a2e1360933344f178f767e0d07"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "48f2d8abe911bb2410cb67edbbd6c68f"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "7e9f4dc34ccfee026142d42ac6e33385"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "7b944e8da6a782b6f0f7b95fbeec6111"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "f82c785a49464bf5145b768edbad47e1"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "76583a4dee7bca2e6d8e07e812b2b7fc"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "96a83b0601c5b908ab3277323a39a34a"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "cb1a716065a31c9fa0b66114205bd6fc"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "a0c7499e300ed6043da799db601e750d"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "f9fd9fb7f040894514f728e37f1fc849"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "0c011cd30e3e360b92284a9a5ab75ece"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "336527b6c09030bdd29688d7347ba9b7"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "4b1f750814861a7e985c704b63966b68"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "744670e2d8042b81742a17272808a14d"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "1744a95797aa3fd20967f3c58b4646d9"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "4b09aa4535b6957c47760904c9479cc9"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "2da56a042b44edb7e296fcbbdc91dc98"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "8fdfa05c988da833130086cef125acc3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
