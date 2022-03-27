<template>
  <el-container class="layout-container">
    <el-aside width="200px" style="background-color: #545c64">
      <el-scrollbar>
        <p style="height: 60px"></p>
        <NavBar :isCollapse="isCollapse" />
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header class="header-layout">
        <div></div>
        <div class="toolbar">
          <el-dropdown>
            <span>Tom</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Menu as IconMenu,
  Message,
  Setting,
  Fold
} from "@element-plus/icons-vue";
import NavBar from "./NavBar.vue";
const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles"
};
const isCollapse = ref(false);

const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<style lang="less" scoped>
.layout-container {
  height: 100vh;
  width: 100vw;
}
.toolbar {
  height: 100%;
  display: flex;
  align-items: center;
  span {
    cursor: pointer;
  }
}
.header-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
}
</style>