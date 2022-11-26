import RouterView from '@/components/parent-page/index.vue';

const aedRoutes = [
    {
        path: '/aed',
        name: 'aed',
        component: RouterView,
        children: [
            {
                path: 'aedList',
                name: 'aedList',
                component: () => import('@/views/aed/list/index.vue'),
            },
            {
                path: 'aedDetail',
                name: 'aedDetail',
                component: () => import('@/views/aed/detail/index.vue'),
            },
        ],
    },
];

export default aedRoutes;
