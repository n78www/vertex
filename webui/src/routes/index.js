import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/login/index';
import Index from '@/pages/home/index';
import Home from '@/pages/home/children/home';
import Setting from '@/pages/home/children/setting';
import Server from '@/pages/home/children/server';
import Client from '@/pages/home/children/client';
import TorrentMix from '@/pages/home/children/torrentMix';
import DeleteRule from '@/pages/home/children/deleteRule';
import RssRule from '@/pages/home/children/rssRule';
import Telegram from '@/pages/home/children/telegram';
import Rss from '@/pages/home/children/rss';

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function goto (location) {
  return originalPush.call(this, location).catch(err => err);
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/login',
      component: Login,
      meta: {
        title: '登录'
      }
    }, {
      path: '/',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home,
          meta: {
            title: '主页'
          }
        }, {
          path: 'setting',
          component: Setting,
          meta: {
            title: '全局设置'
          }
        }, {
          path: 'server',
          component: Server,
          meta: {
            title: '服务器'
          }
        }, {
          path: 'client',
          component: Client,
          meta: {
            title: '客户端'
          }
        }, {
          path: 'delete-rule',
          component: DeleteRule,
          meta: {
            title: '删种规则'
          }
        }, {
          path: 'rss-rule',
          component: RssRule,
          meta: {
            title: 'Rss 规则'
          }
        }, {
          path: 'telegram',
          component: Telegram,
          meta: {
            title: 'Telegram'
          }
        }, {
          path: 'torrent-mix',
          component: TorrentMix,
          meta: {
            title: '种子聚合'
          }
        }, {
          path: 'rss',
          component: Rss,
          meta: {
            title: 'Rss'
          }
        }
      ]
    }
  ]
});