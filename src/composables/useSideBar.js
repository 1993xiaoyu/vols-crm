import { reactive } from 'vue';

import WorkIcon from '@/assets/work.png';
import WorkCheckedIcon from '@/assets/work-checkd.png';
import RescueIcon from '@/assets/rescue.png';
import RescueCheckedIcon from '@/assets/rescue-checked.png';
import StaffIcon from '@/assets/staff.png';
import StaffCheckedIcon from '@/assets/staff-checked.png';
import AedIcon from '@/assets/aed.png';
import AedCheckedIcon from '@/assets/aed-checked.png';
import PowerIcon from '@/assets/power.png';
import PowerCheckedIcon from '@/assets/power-checked.png';

export default function useSideBar() {
    const sideBarConfig = reactive({
        list: [
            {
                title: '工作台',
                name: 'list',
                icon: WorkIcon,
                activedIcon: WorkCheckedIcon,
                children: [],
            },
            {
                title: '救援中心',
                name: 'commandList',
                icon: RescueIcon,
                activedIcon: RescueCheckedIcon,
                children: [],
            },
            {
                title: '人员及机构管理',
                name: 'worker',
                icon: StaffIcon,
                activedIcon: StaffCheckedIcon,
                children: [
                    {
                        title: ' 志愿者管理',
                        name: 'volunteerList',
                        icon: 'https://image1.guazistatic.com/qn221121214352f45fd931c2e36ee35829971671226ca9.png',
                    },
                    {
                        title: '一线送护人员管理',
                        name: 'doctorList',
                        icon: 'https://image1.guazistatic.com/qn221121214352f45fd931c2e36ee35829971671226ca9.png',
                    },
                    {
                        title: '机构及区域管理',
                        name: 'organList',
                        icon: 'https://image1.guazistatic.com/qn221121214352f45fd931c2e36ee35829971671226ca9.png',
                    },
                ],
            },
            {
                title: 'AED设备管理',
                name: 'aedList',
                icon: AedIcon,
                activedIcon: AedCheckedIcon,
                children: [],
            },
            {
                title: '系统管理',
                name: 'services',
                icon: PowerIcon,
                activedIcon: PowerCheckedIcon,
                children: [
                    {
                        title: '用户管理',
                        name: 'doctorList',
                        icon: 'https://image1.guazistatic.com/qn221121214352f45fd931c2e36ee35829971671226ca9.png',
                    },
                    {
                        title: '角色及权限管理',
                        name: 'product',
                        icon: 'https://image1.guazistatic.com/qn221121214352f45fd931c2e36ee35829971671226ca9.png',
                    },
                    {
                        title: '预警中心',
                        name: 'product',
                        icon: 'https://image1.guazistatic.com/qn221121214352f45fd931c2e36ee35829971671226ca9.png',
                    },
                    {
                        title: '系统日志',
                        name: 'product',
                        icon: 'https://image1.guazistatic.com/qn221121214352f45fd931c2e36ee35829971671226ca9.png',
                    },
                ],
            },
        ],
        currSideBarName: 'worker',
        currSideBarTitle: '人员及机构管理',
    });

    const secondSideBarConfig = reactive({
        list: [],
        currSideBarName: '',
        currSideBarTitle: '',
    });

    const getSecondLevelSideBar = () => {
        const { list, currSideBarName } = sideBarConfig;
        list.forEach((item) => {
            if (item.name === currSideBarName) {
                if (item.children && item.children.length) {
                    secondSideBarConfig.list = item.children;
                    secondSideBarConfig.currSideBarName = item.children[0].name;
                    secondSideBarConfig.currSideBarTitle =
                        item.children[0].title;
                } else {
                    secondSideBarConfig.list = [];
                    secondSideBarConfig.currSideBarName = '';
                    secondSideBarConfig.currSideBarTitle = '';
                }
            }
        });
    };

    const setCurrSideBarName = (data) => {
        const sideData = !data ? sideBarConfig.list[0] : data;
        sideBarConfig.currSideBarName = sideData.name;
        sideBarConfig.currSideBarTitle = sideData.title;

        getSecondLevelSideBar();
    };

    const setSecondCurrSideBarName = (data) => {
        secondSideBarConfig.currSideBarName = data.name;
        secondSideBarConfig.currSideBarTitle = data.title;
    };

    return {
        sideBarConfig,
        secondSideBarConfig,

        setCurrSideBarName,
        setSecondCurrSideBarName,
    };
}
