import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Image from "next/image"
import Link from "next/link"
import { Button, Menu, Typography, Card } from 'antd';
import { defaultProfile } from '../utils/images';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '1', <PieChartOutlined />),
  getItem('Messages', '2', <DesktopOutlined />),
  getItem('Analytics', '3', <ContainerOutlined />),
  getItem('Support', '4', <ContainerOutlined />),
  getItem('Report', '5', <ContainerOutlined />),
  getItem('Logout', '6', <ContainerOutlined />),
];

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Text } = Typography;

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="bg-[#F5F5F5] py-56 w-fit rounded-r-3xl">
      {/* <Button type="primary" onClick={toggleCollapsed} className='bg-blue-500'>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      {/* <Text className="text-blue-400">K CAR WASH</Text>
      <Card className='bg-[#F5F5F5] flex '>
        <div>
          <Image
            src={defaultProfile}
            alt="image"
            width={52}
            height={52}
            className='rounded-full'
          />
        </div>
        <div className='flex flex-col items-start'>
            <Text>Admin</Text>
            <Text>Fabrice Mukunzi</Text>
            <Link href="/profile">My Account</Link>
        </div>
      </Card>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        className="my-4 bg-inherit"
      /> */}
    </div>
  );
};

export default SideBar;
