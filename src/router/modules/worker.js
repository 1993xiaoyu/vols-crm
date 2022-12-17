import RouterView from '@/components/parent-page/index.vue';

const userRoutes = [
    {
        path: '/worker',
        name: 'worker',
        component: RouterView,
        children: [
            {
                path: 'userList',
                name: 'userList',
                meta: { parentName: 'worker' },
                component: () => import('@/views/worker/user/list/index.vue'),
            },

            {
                path: 'roleList',
                name: 'roleList',
                meta: { parentName: 'worker' },
                component: () => import('@/views/worker/role/list/index.vue'),
            },
            {
                path: 'roleDetail',
                name: 'roleDetail',
                component: () => import('@/views/worker/role/detail/index.vue'),
            },
            {
                path: 'warningList',
                name: 'warningList',
                meta: { parentName: 'worker' },
                component: () =>
                    import('@/views/worker/warning/list/index.vue'),
            },
            {
                path: 'logList',
                name: 'logList',
                meta: { parentName: 'worker' },
                component: () => import('@/views/worker/log/list/index.vue'),
            },
        ],
    },
];

export default userRoutes;
