import { defineConfig } from "@umijs/max";

export default defineConfig({
  layout: {
    title: 'Umi Qiankun Wrapper'
  },
  qiankun: {
    master: {
      apps: [{
        name: 'maze-rotate',
        entry: 'https://yc-w-cn.github.io/maze-rotate/',
      },{
        name: 'website',
        entry: 'https://wangyuchen.cn/',
      }
    ]
    }
  },
  routes: [
    { name: '概览', path: "/", component: '@/pages/index.tsx' },
    { name: '游戏', path: "/maze-rotate", microApp: 'maze-rotate' },
    { name:' 关于', path: "/website", microApp: "website" },
  ],
  npmClient: 'pnpm',
})