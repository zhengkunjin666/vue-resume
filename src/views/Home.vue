<template>
  <div class="home-page">
    <div class="user-section">
      <el-row :gutter="100">
        <el-col :lg="12">
          <div class="grid-content">
            <h3 class="sub-title">能力简介</h3>
            <p>
              拥有4 年开发经验，精通 HTML、CSS、JavaScript 基础，掌握 Vue、Ant
              Design Vue、Element、微信小程序和 uni-app 等前端基础框架技术，熟悉
              Gulp、Vue CLI3、Vite 等工程化工具，了解 Node.js 和 Serverless
              等后端开发技术，是一位热爱编程、善于解决问题的前端工程师。<br />
              本人笔记链接：<a
                target="_blank"
                href="https://ixvmdewga7.feishu.cn/wiki/wikcnNkpPfcVKe1Z3JboJVKphwd"
                >https://ixvmdewga7.feishu.cn/wiki/wikcnNkpPfcVKe1Z3JboJVKphwd</a
              >
            </p>
          </div>
        </el-col>
        <el-col :lg="12">
          <div class="grid-content">
            <h3 class="sub-title">技能清单</h3>
            <ul class="user-power">
              <li>
                Web开发：
                <el-tag size="small" type="danger">HTML</el-tag>
                <el-tag size="small" type="danger">CSS</el-tag>
                <el-tag size="small" type="danger">JavaScript</el-tag>
              </li>
              <li>
                Web框架：
                <el-tag size="small">Node.js</el-tag>
                <el-tag size="small">Express</el-tag>
                <el-tag size="small">Koa</el-tag>
              </li>
              <li>
                前端框架：
                <el-tag size="small" type="danger">Vue.js</el-tag>
                <el-tag size="small">Ant Design Vue</el-tag>
                <el-tag size="small" type="danger">Element UI</el-tag>
                <el-tag size="small" type="danger">微信小程序</el-tag>
                <el-tag size="small" type="danger">uni-app</el-tag>
              </li>
              <li>
                前端工具：
                <el-tag size="small">Webpack</el-tag>
                <el-tag size="small">Gulp</el-tag>
                <el-tag size="small">Vue CLI3</el-tag>
                <el-tag size="small" type="danger">Vite</el-tag>
              </li>
              <li>
                数据存储：
                <el-tag size="small">MySQL</el-tag>
              </li>
              <li>
                版本管理：
                <el-tag size="small">Git</el-tag>
                <el-tag size="small">Github</el-tag>
                <el-tag size="small">SVN</el-tag>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="work-section">
      <h3 class="sub-title">项目经验</h3>
      <div class="block">
        <el-timeline>
          <el-timeline-item
            type="success"
            timestamp="在申朴信息技术（上海）股份有限公司广州分公司时期负责项目。"
            placement="top"
          >
            <div class="grid-content">
              <el-card>
                <h4 class="card-title">越秀为老服务直通车</h4>
                <p class="card-text">
                  <span>项目描述：</span
                  >越秀为老服务直通车项目包含了政府后台系统、长者饭堂后台系统、以及微信小程序。为老人提供养老机构、社区、上门服务和政策资讯等查询服务；为饭堂提供菜品展示服务以及为老人提供订餐服务等功能；为政府、长者饭堂和老人提供了一个线上服务平台。
                </p>
                <p class="card-text">
                  <span>项目成就：</span>
                  1、依托RuoYi-Vue框架，高效构建项目，集成vue2、vuex、element-ui、axios等技术，提升开发效率。<br />
                  2、精确实现后台数据管理，包括表格浏览、表单编辑与删除操作，确保业务流程顺畅。<br />
                  3、通过echarts实现数据与地图的动态交互，增强数据可视化效果，优化用户体验。<br />
                  4、采用uni-app框架开发微信小程序关键模块，如首页、政策指南等，促进用户交互与信息获取。
                </p>
              </el-card>
            </div>
          </el-timeline-item>
          <el-timeline-item
            type="success"
            timestamp="在深圳市德科信息技术有限公司广州分公司时期负责珠江水利委员会珠江水利科学研究院的项目。"
            placement="top"
          >
            <div class="grid-content">
              <el-card>
                <h4 class="card-title">
                  珠江水旱灾害防御四预平台
                </h4>
                <p class="card-text">
                  <span>项目描述：</span
                  >珠江水旱灾害防御四预平台汇集流域“雨情、水情、咸情、工情、险情、灾情”等信息和流域预报、调度以及淹没等模型，实现流域“四情”动态监控和水利模型统一管理，并结合“四个链条”，实现了交互式预报、自动预警、多维度预演和比选优化预案。
                </p>
                <p class="card-text">
                  <span>项目成就：</span>
                  1、项目中使用Vue3.0 Composition API、Vite、Pinia、Apache
                  ECharts 可视化图表库、Element Plus组件库等进行项目的搭建。<br />
                  2、通过amfe-flexible、postcss-pxtorem插件和在样式文件中设置变量使得样式文件、style和js中的px都能转换为rem，从而实现了页面的自适应。<br />
                  3、将Element中的弹窗组件封装成可拉伸、可拖拽及放大缩小的新弹窗组件。<br />
                  4、通过el-slider组件实现了地图上的淹没播放及库区水面线（图表）的播放展示。<br />
                  5、实现了综合展示、预演、预案等核心业务模块的前端交互。
                </p>
              </el-card>
            </div>
            <div class="grid-content">
              <el-card>
                <h4 class="card-title">
                  深圳市水土保持信息化建设项目 （<a
                    target="_blank"
                    href="http://120.78.176.150:8888/szsb/#/project"
                    >http://120.78.176.150:8888/szsb/#/project</a
                  >
                  测试环境 ）
                </h4>
                <p class="card-text">
                  <span>项目描述：</span
                  >通过水土保持场景，为生产建设项目水土保持监管、水土流失监测预警提供支撑，助力水土保持全链条监管。
                  充分利用智慧水利数据底板提供的基础数据资源，主要包括高分卫星遥感影像、部分区域的无人机遥感影像、DEM构建的三
                  维模型等。此外，通过智慧水利数据底板，接入跨行业共享的土地利用数据、生态红线、雨情监测与预报等数据资源。
                  实现深圳市水务局、各区水务局之间数据交换功能，推进数据的共享和综合开发利用，实现水土保持数据共享和互联互通，
                  增强信息服务能力。
                </p>
                <p class="card-text">
                  <span>项目成就：</span>
                  1、项目中使用Vue3.0 Composition API、Vite、Vuex、Apache
                  ECharts 可视化图表库、Element Plus组件库等进行项目的搭建。<br />
                  2、利用网址携带的token或access_token实现单点登录。<br />
                  3、使用地图接口和小程序的地图组件实现数据与地图的交互，更直观的展示数据。<br />
                  4、使用海康WEB播放器和视频播放器两种插件，实现不同播放设备的摄像头监控视频以及多个视频的播放。<br />
                  5、实现一张图、监管管理、黄泥水溯源、辅助支持等核心业务模块的前端交互。<br />
                  6、完成标准化的系统管理布局UI设计，高效完成后台各业务数据的表格查看、表单编辑、删除确认业务逻辑。
                </p>
              </el-card>
            </div>
          </el-timeline-item>
          <el-timeline-item
            type="success"
            timestamp="在扎克斯科技（ 广州）有限公司时期负责项目。"
            placement="top"
          >
            <div class="grid-content">
              <el-card>
                <h4 class="card-title">
                  中国移动数智化平台（<a
                    target="_blank"
                    href="https://hongru.jiker.vip/"
                    >https://hongru.jiker.vip/</a
                  >
                  测试环境 ）
                </h4>
                <p class="card-text">
                  <span>项目描述：</span
                  >项目致力于为中国移动打造国内一流的数智化转型咨询机构及协作平台，涵盖中国移动及行业合作伙伴的数字化转型专家库，实现需求与人才的高效匹配及调用。产品主要特点为可视化的人才建设信息化工作成果的展示，能给客户导入更先进的人才系统平台理念。
                </p>
                <p class="card-text">
                  <span>项目成就：</span>
                  1、真正意义的个人独立负责项目，从零初始化搭建到项目部署。<br />
                  2、在重构中沉淀的 Vue3.0、Vite 方案很好的运用在新项目中。<br />
                  3、在项目中熟练使用 Ant Design Vue UI组件、Apache ECharts
                  可视化图表库。<br />
                  4、需求持续变更的过程中持续响应，保证项目按期上线交付。
                </p>
              </el-card>
            </div>
            <div class="grid-content">
              <el-card>
                <h4 class="card-title">
                  AitSchool 在线教育平台 （<a
                    target="_blank"
                    href="https://www.aitschool.com"
                    >https://www.aitschool.com</a
                  >
                  正式环境 ）
                </h4>
                <p class="card-text">
                  <span>项目描述：</span>项目为 IT
                  技术互联网职业在线学习平台，包含海量的视频课程、图文项目，为学校提供学习、竞赛培训等在线服务业务。平台包含用户前台、学习中台、管理后台、微信小程序等平台开发，本次项目是在原来
                  Vue2.0 基础上对前台、中台、后台进行 Vue3.0 、Vite、Pinia
                  的重构和升级。
                </p>
                <p class="card-text">
                  <span>项目成就：</span>
                  1、项目中使用 Vue3.0 Composition API、Vite、Pinia 、Element
                  Plus 新一代的 Vue 生态重构项目，替换 Option API、Vue
                  Cli3、Vuex 等 Vue2.0 组件。<br />
                  2、通过重构登录项目，掌握 SSO
                  单点登录相关知识，利用二级域名中的项目可以访问根域的 cookie
                  实现，实现微信、手机号登录模式的动态切换，掌握微信登录 oauth
                  相关流程。<br />
                  3、通过重构主站前台项目，实现视频课、技能测评核心业务模块的前端交互。<br />
                  4、通过重构学习中台项目，掌握音视频的基本 API
                  实现按上次记录播放，拖拽、暂停、按频发送播放记录。<br />
                  5、通过重构管理后台项目，掌握标准化的管理后台布局
                  UI、高扩展性路由精细化权限设计，能高效完成后台各业务数据的表格查看、表单编辑、删除确认业务逻辑。
                </p>
              </el-card>
            </div>
            <div class="grid-content">
              <el-card>
                <h4 class="card-title">极客学院落地页开发</h4>
                <p class="card-text">
                  <span>项目描述：</span
                  >官网、营销页、活动页面、专题页面都属于由多个页面组成的展示型静态页面矩阵。官网主要为产品特点的描述，功能多迭代周期长；营销页根据投放效果修改，修改频繁，迭代周期短；活动页针对特定节日，有针对的节日元素及较多的交互；专题页面模版、风格比较统一，结合需要进行主题样式的公共提取。
                </p>
                <p class="card-text">
                  <span>项目成就：</span>
                  1、Toppro 静态官网 V1 开发：<a
                    target="_blank"
                    href="https://www.topproio.com/"
                    >https://www.topproio.com/</a
                  >
                  上线。( 目前已迭代 V2 )<br />
                  2、Youked 静态官网 V1 开发：<a
                    target="_blank"
                    href="https://www.youked.com/"
                    >https://www.youked.com/</a
                  >
                  上线。<br />
                  3、极客学院专题页开发：<a
                    target="_blank"
                    href="https://zt.jikexueyuan.com/qualcomm"
                    >https://zt.jikexueyuan.com/qualcomm</a
                  >
                  上线。<br />
                  4、极客学院匠心大赏活动页开发 。（ 已下线 ）<br />
                  5、通过一些列的 H5 静态页面开发具备快速 1:1
                  高效还原设计稿的能力。<br />
                  6、独立完成多图轮播，留言板留言拖拽等功能，对 JavaScript DOM
                  和 BOM 有深入探索。
                </p>
              </el-card>
            </div>
            <div class="grid-content">
              <el-card>
                <h4 class="card-title">CRM 客户管理系统</h4>
                <p class="card-text">
                  <span>项目描述：</span>
                  我们和广告公司合作做出了各类精良的营销落地页，并在各个社交、媒体平台中进行投放。为了更好地获取广告信息，指导投放营销，需要一套管理系统来承接这类营销落地页，用来收集用户的购买行为信息，并进行跟踪、统计、和反馈。
                </p>
                <p class="card-text">
                  <span>项目成就：</span>
                  1、使用 Node.js 中 Express 框架快速搭建 Web 框架。<br />
                  2、在 nunjucks 模版中直接书写HTML结构，通过打包工具 Gulp 处理
                  CSS
                  变量和嵌套、JavaScript的转译，以及代码检查和优化、添加后缀等等。<br />
                  3、后台数据库采用 Navicat for
                  MySQL软件，建立了用户表、线索表、记录表等。<br />
                  4、完成了对落地页收集回来的用户信息，进行跟踪、统计、反馈的管理系统。
                </p>
              </el-card>
            </div>
          </el-timeline-item>
          <el-timeline-item
            type="success"
            timestamp="个人研究的项目。"
            placement="top"
          >
            <div class="grid-content">
              <el-card>
                <h4 class="card-title">
                  微信小程序云开发 - OKR、云微博（ 个人开源项目 ）
                </h4>
                <p class="card-text">
                  <span>项目描述：</span>OKR
                  为公司内部使用的目标管理的系统，将目标管理自上而下贯穿到基层。通过要设定一个目标，然后设定若干可以量化的关键结果，用来帮助实现目标。给予
                  OKR 的理解，实现个人版的云 OKR
                  ，以便于对个人目标的聚焦同时对新技术的研究。
                </p>
                <p class="card-text">
                  <span>项目成就：</span>
                  1、对小程序开发有一定的了解，能够完成负责业务场景下的小程序研发工作。<br />
                  2、在第一版本项目中使用 Express、knex 来构建简易的 API，对
                  Node.js 与 MySQL 数据库更熟悉的运用。<br />
                  3、在第二版中开始对 Koa 框架进行学习，并对升级到个人 OKR
                  的开源应用中。<br />
                  4、在第三版中对通过对微信小程序云开发的学习，对 Serverless
                  云函数有一定的了解与掌握，并构建项目进行想法落地。
                </p>
              </el-card>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style type="text/css" lang="less" scoped>
.home-page {
  padding: 40px 50px 0px;

  .sub-title {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .card-title {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .card-text {
    font-size: 14px;
    color: #666;
    margin: 8px 0;
    span {
      font-size: 14px;
      color: #333;
      font-weight: 600;
      display: block;
    }
  }

  .user-power {
    list-style: none;
  }

  .grid-content {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 2;
  }

  .el-tag {
    margin-right: 8px;
  }
}
</style>
