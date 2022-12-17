// resources
import RouterView from '@/components/parent-page/index.vue';

const userRoutes = [
    {
        path: '/resources',
        name: 'resources',
        component: RouterView,
        children: [
            {
                path: 'volunteerList',
                name: 'volunteerList',
                meta: { parentName: 'resources' },
                component: () =>
                    import('@/views/resources/volunteer/list/index.vue'),
            },
            {
                path: 'volunteerDetail',
                name: 'volunteerDetail',
                component: () =>
                    import('@/views/resources/volunteer/detail/index.vue'),
            },
            {
                path: 'organList',
                name: 'organList',
                meta: { parentName: 'resources' },
                component: () =>
                    import('@/views/resources/organ/list/index.vue'),
            },
            {
                path: 'organDetail',
                name: 'organDetail',
                component: () =>
                    import('@/views/resources/organ/detail/index.vue'),
            },
        ],
    },
];

export default userRoutes;
