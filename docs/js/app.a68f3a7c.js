(function(t) {
  function e(e) {
    for (
      var a, r, l = e[0], c = e[1], o = e[2], v = 0, p = [];
      v < l.length;
      v++
    )
      (r = l[v]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && p.push(n[r][0]),
        (n[r] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    u && u(e);
    while (p.length) p.shift()();
    return i.push.apply(i, o || []), s();
  }
  function s() {
    for (var t, e = 0; e < i.length; e++) {
      for (var s = i[e], a = !0, l = 1; l < s.length; l++) {
        var c = s[l];
        0 !== n[c] && (a = !1);
      }
      a && (i.splice(e--, 1), (t = r((r.s = s[0]))));
    }
    return t;
  }
  var a = {},
    n = { app: 0 },
    i = [];
  function r(e) {
    if (a[e]) return a[e].exports;
    var s = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
  }
  (r.m = t),
    (r.c = a),
    (r.d = function(t, e, s) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (r.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (r.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            s,
            a,
            function(e) {
              return t[e];
            }.bind(null, a)
          );
      return s;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var o = 0; o < l.length; o++) e(l[o]);
  var u = c;
  i.push([0, "chunk-vendors"]), s();
})({
  0: function(t, e, s) {
    t.exports = s("56d7");
  },
  "046c": function(t, e, s) {
    "use strict";
    s("8e15");
  },
  "06be": function(t, e, s) {},
  "56d7": function(t, e, s) {
    "use strict";
    s.r(e);
    s("25ba"), s("5f1c"), s("6ba0"), s("b47f");
    var a = s("bb42"),
      n = function() {
        var t = this,
          e = t._self._c;
        return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
      },
      i = [],
      r = (s("6158"), s("0b56")),
      l = {},
      c = Object(r["a"])(l, n, i, !1, null, null, null),
      o = c.exports,
      u = s("8e41"),
      v = s.n(u),
      p = (s("fcea"), s("f038")),
      d = function() {
        var t = this,
          e = t._self._c;
        return e(
          "el-container",
          { staticClass: "h100" },
          [
            e("Sider"),
            e(
              "el-container",
              [
                e(
                  "el-header",
                  { staticClass: "page-header", attrs: { height: "64px" } },
                  [e("Header")],
                  1
                ),
                e(
                  "el-main",
                  { staticClass: "page-mainer" },
                  [e("router-view")],
                  1
                ),
                e("Footer")
              ],
              1
            )
          ],
          1
        );
      },
      _ = [],
      f = function() {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "header-section" }, [
          e(
            "div",
            { staticClass: "header-hd" },
            [
              t._t("header-hd", function() {
                return [
                  t._v("感谢您花时间阅读我的简历，期待能有机会和您共事。🙇🏻‍♀️🙇🏻‍♀️🙇🏻‍♀️")
                ];
              })
            ],
            2
          ),
          e("div", { staticClass: "header-bd" }, [t._t("header-bd")], 2),
          e("div", { staticClass: "header-ft" }, [t._t("header-ft")], 2)
        ]);
      },
      h = [],
      b = {
        data: function() {
          return {};
        },
        created: function() {},
        methods: {}
      },
      C = b,
      g = (s("a438"), Object(r["a"])(C, f, h, !1, null, "573ebd13", null)),
      m = g.exports,
      w = function() {
        var t = this,
          e = t._self._c;
        return e("footer", { staticClass: "footer-section" }, [
          t._v("\n  感谢您花时间阅读我的简历，期待能有机会和您共事。🙇🏻‍♀️🙇🏻‍♀️🙇🏻‍♀️\n")
        ]);
      },
      x = [],
      k = {},
      y = k,
      j = (s("6a55"), Object(r["a"])(y, w, x, !1, null, null, null)),
      V = j.exports,
      O = function() {
        var t = this,
          e = t._self._c;
        return e("el-aside", { staticClass: "page-sider" }, [
          e("div", { staticClass: "user-info" }, [
            e("div", { staticClass: "user-avatar" }, [
              e("img", {
                staticClass: "user-avatar-png",
                attrs: { src: s("915e") }
              })
            ]),
            e("p", { staticClass: "user-name" }, [t._v("郑坤锦")]),
            e("p", { staticClass: "user-status" }, [t._v("Born to Code")])
          ]),
          e("div", { staticClass: "user-info" }, [
            e("div", { staticClass: "user-info-title" }, [t._v("个人信息")]),
            e("div", { staticClass: "user-info-text" }, [
              e("i", { staticClass: "el-icon-trophy" }),
              e("span", [t._v("毕业学校：惠州学院（本科）")])
            ]),
            e("div", { staticClass: "user-info-text" }, [
              e("i", { staticClass: "el-icon-present" }),
              e("span", [t._v("出生年月：1996.11.29（汕头）")])
            ]),
            e("div", { staticClass: "user-info-text" }, [
              e("i", { staticClass: "el-icon-position" }),
              e("span", [t._v("意向城市：广州、深圳")])
            ]),
            e("div", { staticClass: "user-info-text" }, [
              e("i", { staticClass: "el-icon-mobile-phone" }),
              e("span", [t._v("联系方式：13794567550")])
            ]),
            e("div", { staticClass: "user-info-text" }, [
              e("i", { staticClass: "el-icon-wind-power" }),
              e("span", [t._v("应聘职位：前端研发工程师")])
            ]),
            e("div", { staticClass: "user-info-text" }, [
              e("i", { staticClass: "el-icon-bank-card" }),
              e("span", [t._v("期望月薪：14～16k")])
            ])
          ]),
          e("div", { staticClass: "user-info" }, [
            e("div", { staticClass: "user-info-title" }, [t._v("工作经历")]),
            e("div", { staticClass: "user-info-text" }, [
              e("p", [
                e("i", { staticClass: "el-icon-time" }),
                t._v("时间：2022/11 ～ 至今")
              ]),
              e("p", { staticClass: "flex" }, [
                e("i", { staticClass: "el-icon-office-building" }),
                e(
                  "span",
                  {
                    staticClass: "nowrap",
                    attrs: { title: "深圳市德科信息技术有限公司广州分公司" }
                  },
                  [t._v("公司：深圳市德科信息技术有限公司广州分公司")]
                )
              ]),
              e("p", [
                e("i", { staticClass: "el-icon-postcard" }),
                t._v("岗位：软件工程师（前端）")
              ])
            ]),
            e("div", { staticClass: "user-info-text two" }, [
              e("p", [
                e("i", { staticClass: "el-icon-time" }),
                t._v("时间：2019/5 ～ 2022/10")
              ]),
              e("p", [
                e("i", { staticClass: "el-icon-office-building" }),
                t._v("公司：扎克斯科技（\n        广州）有限公司\n      ")
              ]),
              e("p", [
                e("i", { staticClass: "el-icon-postcard" }),
                t._v("岗位：前端研发工程师")
              ])
            ])
          ])
        ]);
      },
      S = [],
      z = { props: {}, components: {} },
      P = z,
      A = (s("046c"), Object(r["a"])(P, O, S, !1, null, null, null)),
      M = A.exports,
      E = {
        data: function() {
          return {};
        },
        components: { Header: m, Footer: V, Sider: M }
      },
      I = E,
      K = (s("9b85"), Object(r["a"])(I, d, _, !1, null, null, null)),
      J = K.exports,
      N = function() {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "home-page" }, [
          e(
            "div",
            { staticClass: "user-section" },
            [
              e(
                "el-row",
                { attrs: { gutter: 100 } },
                [
                  e("el-col", { attrs: { lg: 12 } }, [
                    e("div", { staticClass: "grid-content" }, [
                      e("h3", { staticClass: "sub-title" }, [t._v("能力简介")]),
                      e("p", [
                        t._v(
                          "\n            4 年开发经验。精通 HTML、CSS、JavaScript 基础，掌握 Vue、Ant\n            Design Vue、Element、微信小程序等前端基础框架技术，熟悉Gulp、Vue\n            CLI3、Vite 等工程化工具，拥有 Node.js、Serverless\n            后端开发能力，是一位熟悉前后端及数据交互的全干工程师。"
                        ),
                        e("br"),
                        t._v("\n            本人笔记链接："),
                        e(
                          "a",
                          {
                            attrs: {
                              target: "_blank",
                              href:
                                "https://ixvmdewga7.feishu.cn/wiki/wikcnNkpPfcVKe1Z3JboJVKphwd"
                            }
                          },
                          [
                            t._v(
                              "https://ixvmdewga7.feishu.cn/wiki/wikcnNkpPfcVKe1Z3JboJVKphwd"
                            )
                          ]
                        )
                      ])
                    ])
                  ]),
                  e("el-col", { attrs: { lg: 12 } }, [
                    e("div", { staticClass: "grid-content" }, [
                      e("h3", { staticClass: "sub-title" }, [t._v("技能清单")]),
                      e("ul", { staticClass: "user-power" }, [
                        e(
                          "li",
                          [
                            t._v("\n              Web开发：\n              "),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("HTML")
                            ]),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("CSS")
                            ]),
                            e(
                              "el-tag",
                              { attrs: { size: "small", type: "danger" } },
                              [t._v("JavaScript")]
                            )
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            t._v("\n              Web框架：\n              "),
                            e(
                              "el-tag",
                              { attrs: { size: "small", type: "danger" } },
                              [t._v("Node.js")]
                            ),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Express")
                            ]),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Koa")
                            ])
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            t._v("\n              前端框架：\n              "),
                            e(
                              "el-tag",
                              { attrs: { size: "small", type: "danger" } },
                              [t._v("Vue.js")]
                            ),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Ant Design Vue")
                            ]),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Element UI")
                            ]),
                            e(
                              "el-tag",
                              { attrs: { size: "small", type: "danger" } },
                              [t._v("微信小程序")]
                            )
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            t._v("\n              前端工具：\n              "),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Webpack")
                            ]),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Gulp")
                            ]),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Vue CLI3")
                            ]),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Vite")
                            ])
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            t._v("\n              数据存储：\n              "),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("MySQL")
                            ])
                          ],
                          1
                        ),
                        e(
                          "li",
                          [
                            t._v("\n              版本管理：\n              "),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Git")
                            ]),
                            e("el-tag", { attrs: { size: "small" } }, [
                              t._v("Github")
                            ])
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          e("div", { staticClass: "work-section" }, [
            e("h3", { staticClass: "sub-title" }, [t._v("项目经验")]),
            e(
              "div",
              { staticClass: "block" },
              [
                e(
                  "el-timeline",
                  [
                    e(
                      "el-timeline-item",
                      {
                        attrs: {
                          type: "success",
                          timestamp:
                            "在深圳市德科信息技术有限公司广州分公司时期负责珠江水利委员会珠江水利科学研究院的项目。",
                          placement: "top"
                        }
                      },
                      [
                        e(
                          "div",
                          { staticClass: "grid-content" },
                          [
                            e("el-card", [
                              e("h4", { staticClass: "card-title" }, [
                                t._v("深圳市水土保持信息化建设项目 （"),
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href:
                                        "http://120.78.176.150:8888/szsb/#/project"
                                    }
                                  },
                                  [
                                    t._v(
                                      "http://120.78.176.150:8888/szsb/#/project"
                                    )
                                  ]
                                ),
                                t._v("\n                测试环境 ）")
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目描述：")]),
                                t._v(
                                  "通过水土保持场景，为生产建设项目水土保持监管、水土流失监测预警提供支撑，助力水土保持全链条监管。\n                充分利用智慧水利数据底板提供的基础数据资源，主要包括高分卫星遥感影像、部分区域的无人机遥感影像、DEM构建的三\n                维模型等。此外，通过智慧水利数据底板，接入跨行业共享的土地利用数据、生态红线、雨情监测与预报等数据资源。\n                实现深圳市水务局、各区水务局之间数据交换功能，推进数据的共享和综合开发利用，实现水土保持数据共享和互联互通，\n                增强信息服务能力。\n              "
                                )
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目成就：")]),
                                t._v(
                                  "\n                1、项目中使用Vue3.0 Composition API、Vite、Vuex、Apache\n                ECharts 可视化图表库、Element Plus组件库等进行项目的搭建。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                2、利用网址携带的token或access_token实现单点登录。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                3、使用地图接口和小程序的地图组件实现数据与地图的交互，更直观的展示数据。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                4、使用海康WEB播放器和视频播放器两种插件，实现不同播放设备的摄像头监控视频以及多个视频的播放。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                5、实现一张图、监管管理、黄泥水溯源、辅助支持等核心业务模块的前端交互。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                6、完成标准化的系统管理布局UI设计，高效完成后台各业务数据的表格查看、表单编辑、删除确认业务逻辑。\n              "
                                )
                              ])
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    e(
                      "el-timeline-item",
                      {
                        attrs: {
                          type: "success",
                          timestamp:
                            "在扎克斯科技（ 广州）有限公司时期负责项目。",
                          placement: "top"
                        }
                      },
                      [
                        e(
                          "div",
                          { staticClass: "grid-content" },
                          [
                            e("el-card", [
                              e("h4", { staticClass: "card-title" }, [
                                t._v("\n                中国移动数智化平台（"),
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: "https://hongru.jiker.vip/"
                                    }
                                  },
                                  [t._v("https://hongru.jiker.vip/")]
                                ),
                                t._v(
                                  "\n                测试环境 ）\n              "
                                )
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目描述：")]),
                                t._v(
                                  "项目致力于为中国移动打造国内一流的数智化转型咨询机构及协作平台，涵盖中国移动及行业合作伙伴的数字化转型专家库，实现需求与人才的高效匹配及调用。产品主要特点为可视化的人才建设信息化工作成果的展示，能给客户导入更先进的人才系统平台理念。\n              "
                                )
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目成就：")]),
                                t._v(
                                  "\n                1、真正意义的个人独立负责项目，从零初始化搭建到项目部署。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                2、在重构中沉淀的 Vue3.0、Vite 方案很好的运用在新项目中。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                3、在项目中熟练使用 Ant Design Vue UI组件、Apache ECharts\n                可视化图表库。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                4、需求持续变更的过程中持续响应，保证项目按期上线交付。\n              "
                                )
                              ])
                            ])
                          ],
                          1
                        ),
                        e(
                          "div",
                          { staticClass: "grid-content" },
                          [
                            e("el-card", [
                              e("h4", { staticClass: "card-title" }, [
                                t._v(
                                  "\n                AitSchool 在线教育平台 （"
                                ),
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: "https://www.aitschool.com"
                                    }
                                  },
                                  [t._v("https://www.aitschool.com")]
                                ),
                                t._v(
                                  "\n                正式环境 ）\n              "
                                )
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目描述：")]),
                                t._v(
                                  "项目为 IT\n                技术互联网职业在线学习平台，包含海量的视频课程、图文项目，为学校提供学习、竞赛培训等在线服务业务。平台包含用户前台、学习中台、管理后台、微信小程序等平台开发，本次项目是在原来\n                Vue2.0 基础上对前台、中台、后台进行 Vue3.0 、Vite、Pinia\n                的重构和升级。\n              "
                                )
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目成就：")]),
                                t._v(
                                  "\n                1、项目中使用 Vue3.0 Composition API、Vite、Pinia 、Element\n                Plus 新一代的 Vue 生态重构项目，替换 Option API、Vue\n                Cli3、Vuex 等 Vue2.0 组件。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                2、通过重构登录项目，掌握 SSO\n                单点登录相关知识，利用二级域名中的项目可以访问根域的 cookie\n                实现，实现微信、手机号登录模式的动态切换，掌握微信登录 oauth\n                相关流程。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                3、通过重构主站前台项目，实现视频课、技能测评核心业务模块的前端交互。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                4、通过重构学习中台项目，掌握音视频的基本 API\n                实现按上次记录播放，拖拽、暂停、按频发送播放记录。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                5、通过重构管理后台项目，掌握标准化的管理后台布局\n                UI、高扩展性路由精细化权限设计，能高效完成后台各业务数据的表格查看、表单编辑、删除确认业务逻辑。\n              "
                                )
                              ])
                            ])
                          ],
                          1
                        ),
                        e(
                          "div",
                          { staticClass: "grid-content" },
                          [
                            e("el-card", [
                              e("h4", { staticClass: "card-title" }, [
                                t._v("极客学院落地页开发")
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目描述：")]),
                                t._v(
                                  "官网、营销页、活动页面、专题页面都属于由多个页面组成的展示型静态页面矩阵。官网主要为产品特点的描述，功能多迭代周期长；营销页根据投放效果修改，修改频繁，迭代周期短；活动页针对特定节日，有针对的节日元素及较多的交互；专题页面模版、风格比较统一，结合需要进行主题样式的公共提取。\n              "
                                )
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目成就：")]),
                                t._v(
                                  "\n                1、Toppro 静态官网 V1 开发："
                                ),
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: "https://www.topproio.com/"
                                    }
                                  },
                                  [t._v("https://www.topproio.com/")]
                                ),
                                t._v(
                                  "\n                上线。( 目前已迭代 V2 )"
                                ),
                                e("br"),
                                t._v(
                                  "\n                2、Youked 静态官网 V1 开发："
                                ),
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: "https://www.youked.com/"
                                    }
                                  },
                                  [t._v("https://www.youked.com/")]
                                ),
                                t._v("\n                上线。"),
                                e("br"),
                                t._v(
                                  "\n                3、极客学院专题页开发："
                                ),
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href:
                                        "https://zt.jikexueyuan.com/qualcomm"
                                    }
                                  },
                                  [t._v("https://zt.jikexueyuan.com/qualcomm")]
                                ),
                                t._v("\n                上线。"),
                                e("br"),
                                t._v(
                                  "\n                4、极客学院匠心大赏活动页开发 。（ 已下线 ）"
                                ),
                                e("br"),
                                t._v(
                                  "\n                5、通过一些列的 H5 静态页面开发具备快速 1:1\n                高效还原设计稿的能力。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                6、独立完成多图轮播，留言板留言拖拽等功能，对 JavaScript DOM\n                和 BOM 有深入探索。\n              "
                                )
                              ])
                            ])
                          ],
                          1
                        ),
                        e(
                          "div",
                          { staticClass: "grid-content" },
                          [
                            e("el-card", [
                              e("h4", { staticClass: "card-title" }, [
                                t._v("CRM 客户管理系统")
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目描述：")]),
                                t._v(
                                  "\n                我们和广告公司合作做出了各类精良的营销落地页，并在各个社交、媒体平台中进行投放。为了更好地获取广告信息，指导投放营销，需要一套管理系统来承接这类营销落地页，用来收集用户的购买行为信息，并进行跟踪、统计、和反馈。\n              "
                                )
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目成就：")]),
                                t._v(
                                  "\n                1、使用 Node.js 中 Express 框架快速搭建 Web 框架。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                2、在 nunjucks 模版中直接书写HTML结构，通过打包工具 Gulp 处理\n                CSS\n                变量和嵌套、JavaScript的转译，以及代码检查和优化、添加后缀等等。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                3、后台数据库采用 Navicat for\n                MySQL软件，建立了用户表、线索表、记录表等。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                4、完成了对落地页收集回来的用户信息，进行跟踪、统计、反馈的管理系统。\n              "
                                )
                              ])
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    e(
                      "el-timeline-item",
                      {
                        attrs: {
                          type: "success",
                          timestamp: "个人研究的项目。",
                          placement: "top"
                        }
                      },
                      [
                        e(
                          "div",
                          { staticClass: "grid-content" },
                          [
                            e("el-card", [
                              e("h4", { staticClass: "card-title" }, [
                                t._v(
                                  "\n                微信小程序云开发 - OKR、云微博（ 个人开源项目 ）\n              "
                                )
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目描述：")]),
                                t._v(
                                  "OKR\n                为公司内部使用的目标管理的系统，将目标管理自上而下贯穿到基层。通过要设定一个目标，然后设定若干可以量化的关键结果，用来帮助实现目标。给予\n                OKR 的理解，实现个人版的云 OKR\n                ，以便于对个人目标的聚焦同时对新技术的研究。\n              "
                                )
                              ]),
                              e("p", { staticClass: "card-text" }, [
                                e("span", [t._v("项目成就：")]),
                                t._v(
                                  "\n                1、对小程序开发有一定的了解，能够完成负责业务场景下的小程序研发工作。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                2、在第一版本项目中使用 Express、knex 来构建简易的 API，对\n                Node.js 与 MySQL 数据库更熟悉的运用。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                3、在第二版中开始对 Koa 框架进行学习，并对升级到个人 OKR\n                的开源应用中。"
                                ),
                                e("br"),
                                t._v(
                                  "\n                4、在第三版中对通过对微信小程序云开发的学习，对 Serverless\n                云函数有一定的了解与掌握，并构建项目进行想法落地。\n              "
                                )
                              ])
                            ])
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]);
      },
      L = [],
      T = {
        data: function() {
          return {};
        },
        components: {}
      },
      H = T,
      R = (s("dd77"), Object(r["a"])(H, N, L, !1, null, "0d62d45a", null)),
      D = R.exports;
    a["default"].use(p["a"]);
    var G = new p["a"]({
        routes: [
          {
            path: "/",
            component: J,
            children: [{ path: "/", name: "Home", component: D }]
          }
        ]
      }),
      W = s("7736");
    a["default"].use(W["a"]);
    var B = new W["a"].Store({ state: {}, mutations: {}, actions: {} }),
      F = s("08e7");
    Object(F["a"])("".concat("", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(t) {
        console.error("Error during service worker registration:", t);
      }
    }),
      (a["default"].config.productionTip = !1),
      a["default"].use(v.a),
      new a["default"]({
        router: G,
        store: B,
        render: function(t) {
          return t(o);
        }
      }).$mount("#app");
  },
  6158: function(t, e, s) {
    "use strict";
    s("8e77");
  },
  "6a55": function(t, e, s) {
    "use strict";
    s("7a3f");
  },
  "76b6": function(t, e, s) {},
  "7a3f": function(t, e, s) {},
  "8e15": function(t, e, s) {},
  "8e77": function(t, e, s) {},
  "915e": function(t, e, s) {
    t.exports = s.p + "img/avatar.389ad927.jpg";
  },
  "9b85": function(t, e, s) {
    "use strict";
    s("76b6");
  },
  a438: function(t, e, s) {
    "use strict";
    s("06be");
  },
  cd86: function(t, e, s) {},
  dd77: function(t, e, s) {
    "use strict";
    s("cd86");
  }
});
//# sourceMappingURL=app.a68f3a7c.js.map
