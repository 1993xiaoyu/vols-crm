import { reactive } from 'vue';
import { getMenu, getRoleMenuTree } from '@/network/index.js';

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
                name: 'resources',
                icon: StaffIcon,
                activedIcon: StaffCheckedIcon,
                children: [
                    {
                        title: ' 志愿者管理',
                        name: 'volunteerList',
                        icon: '',
                    },
                    {
                        title: '医护人员管理',
                        name: 'doctorList',
                        icon: '',
                    },
                    {
                        title: '机构及区域管理',
                        name: 'organList',
                        icon: '',
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
                name: 'worker',
                icon: PowerIcon,
                activedIcon: PowerCheckedIcon,
                children: [
                    {
                        title: '用户管理',
                        name: 'userList',
                        icon: '',
                    },
                    {
                        title: '角色及权限管理',
                        name: 'roleList',
                        icon: '',
                    },
                    {
                        title: '预警中心',
                        name: 'warningList',
                        icon: '',
                    },
                    {
                        title: '系统日志',
                        name: 'logList',
                        icon: '',
                    },
                ],
            },
        ],
        currSideBarName: 'resources',
        currSideBarTitle: '人员及机构管理',
    });

    const secondSideBarConfig = reactive({
        list: [],
        currSideBarName: '',
        currSideBarTitle: '',
    });

    const getMenuData = async () => {
        const res = await getMenu();
    };

    const getRoleMenuTreeData = async () => {
        const res = await getRoleMenuTree();
        console.log(res, '====getRoleMenuTreeData');
    };

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

    const setCurrSideBarName = (sideData) => {
        //const sideData = !data ? sideBarConfig.list[0] : data;
        sideBarConfig.currSideBarName = sideData.name;
        sideBarConfig.currSideBarTitle = sideData.title;

        // getSecondLevelSideBar();
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

        getMenuData,

        getRoleMenuTreeData,
    };
}
