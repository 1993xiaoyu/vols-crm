import RouterView from '@/components/parent-page/index.vue';

const aedRoutes = [
    {
        path: '/services',
        name: 'services',
        component: RouterView,
        children: [
            {
                path: 'list',
                name: 'servicesList',
                component: () => import('@/views/aed/list/index.vue'),
            },
            {
                path: 'detail',
                name: 'servicesDetail',
                component: () => import('@/views/aed/detail/index.vue'),
            },
        ],
    },
];

export default aedRoutes;
