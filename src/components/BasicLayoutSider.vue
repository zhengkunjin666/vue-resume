<template>
  <el-aside class="page-sider">
    <div class="user-info">
      <div class="user-avatar">
        <img class="user-avatar-png" src="@/assets/avatar.jpg" />
      </div>
      <p class="user-name">郑坤锦</p>
      <p class="user-status">Born to Code</p>
    </div>
    <div class="user-info">
      <div class="user-info-title">个人信息</div>
      <div class="user-info-text">
        <i class="el-icon-trophy"></i>
        <span>毕业学校：惠州学院（本科）</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-present"></i>
        <span>出生年月：1996.11.29（汕头）</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-position"></i>
        <span>意向城市：广州、汕头</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-mobile-phone"></i>
        <span>联系方式：13794567550</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-wind-power"></i>
        <span>应聘职位：前端研发工程师</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-bank-card"></i>
        <span>期望月薪：14～16k</span>
      </div>
    </div>
    <!-- <div class="user-info">
      <div class="user-info-title">工作经历1</div>
      <div class="user-info-text">
        <p><i class="el-icon-time"></i>时间：2019/5 ～ 2022/10</p>
        <p>
          <i class="el-icon-office-building"></i>公司：扎克斯科技（
          广州）有限公司
        </p>
        <p><i class="el-icon-postcard"></i>岗位：前端研发工程师</p>
      </div>
    </div> -->
    <div class="user-info">
      <div class="user-info-title">工作经历</div>
      <div class="user-info-text">
        <p><i class="el-icon-time"></i>时间：2022/11 ～ 至今</p>
        <p class="flex">
          <i class="el-icon-office-building"></i>
          <span class="nowrap" title="深圳市德科信息技术有限公司广州分公司"
            >公司：深圳市德科信息技术有限公司广州分公司</span
          >
        </p>
        <p><i class="el-icon-postcard"></i>岗位：软件工程师（前端）</p>
      </div>
      <div class="user-info-text two">
        <p><i class="el-icon-time"></i>时间：2019/5 ～ 2022/10</p>
        <p>
          <i class="el-icon-office-building"></i>公司：扎克斯科技（
          广州）有限公司
        </p>
        <p><i class="el-icon-postcard"></i>岗位：前端研发工程师</p>
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {
  props: {},
  components: {}
};
</script>

<style type="text/css" lang="less">
.page-sider {
  position: relative;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  transition: all 0.2s ease;
  width: 350px !important;
  color: #fff;
  padding: 10px 40px;
  .user-info {
    margin: 20px 0;
    .user-info-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .user-info-text {
      font-size: 14px;
      line-height: 2;
      i {
        margin-right: 8px;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
      .flex {
        display: flex;
        align-items: center;
      }
      .nowrap {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
    .user-info-text.two {
      margin-top: 10px;
    }
  }
  .user-info:last-child {
    margin-bottom: 0px;
  }
  .user-avatar {
    .user-avatar-png {
      display: block;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      margin: 0 auto 20px;
      box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
      background-color: #fff;
    }
  }
  .user-name {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  .user-status {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
}
</style>
