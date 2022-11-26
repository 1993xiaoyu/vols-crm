import RouterView from '@/components/parent-page/index.vue';

const userRoutes = [
    {
        path: '/worker',
        name: 'worker',
        component: RouterView,
        children: [
            {
                path: 'volunteerList',
                name: 'volunteerList',
                meta: { parentName: 'worker' },
                component: () =>
                    import('@/views/worker/volunteer/list/index.vue'),
            },
            {
                path: 'volunteerDetail',
                name: 'volunteerDetail',
                component: () =>
                    import('@/views/worker/volunteer/detail/index.vue'),
            },
            {
                path: 'doctorList',
                name: 'doctorList',
                meta: { parentName: 'worker' },
                component: () => import('@/views/worker/doctor/list/index.vue'),
            },
            {
                path: 'doctorDetail',
                name: 'doctorDetail',
                component: () =>
                    import('@/views/worker/doctor/detail/index.vue'),
            },
            {
                path: 'organList',
                name: 'organList',
                meta: { parentName: 'worker' },
                component: () => import('@/views/worker/organ/list/index.vue'),
            },
            {
                path: 'organDetail',
                name: 'organDetail',
                component: () =>
                    import('@/views/worker/organ/detail/index.vue'),
            },
        ],
    },
];

export default userRoutes;
