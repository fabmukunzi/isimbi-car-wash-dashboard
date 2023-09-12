import React, { useState } from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
  HomeOutlined,
  MessageOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Menu, Typography, Card, Row, Col } from 'antd';
import { defaultProfile } from '../utils/images';
import ProfileModal from './profileModel';
import { useRouter } from 'next/router';

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
  getItem('Home', '1', <HomeOutlined className="mr-3" />),
  getItem('Messages', '2', <MessageOutlined className="mr-3" />),
  getItem('Analytics', '3', <RiseOutlined className="mr-3" />),
  getItem('Reports', '4', <ContainerOutlined className="mr-3" />),
  getItem('Archive', '5', <ContainerOutlined className="mr-3" />),
  getItem('Supports', '6', <QuestionCircleOutlined className="mr-3" />),
];

const SideBar: React.FC = () => {
  const { Text } = Typography;
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); 
  const handleMenuItemClick = (key: string) => {
    switch (key) {
      case '1':
        router.push('/dashboard');
        break;
      case '2':
        router.push('/dashboard/messages');
        break;
      case '3':
        router.push('/dashboard/analytics');
        break;
      case '4':
        router.push('/dashboard/reports');
        break;
      case '5':
        router.push('/dashboard/archive');
        break;
      case '6':
        router.push('/dashboard/supports');
        break;
      default:
        router.push('/dashboard')
        break;
    }
  };

  return (
    <div className="bg-[#F5F5F5] h-screen w-full rounded-r-3xl py-6 shadow-gray-500 shadow-md">
      {/* <Button type="primary" onClick={toggleCollapsed} className="bg-blue-500">
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Text className="text-primary text-2xl">K Car Wash</Text>
      <Row gutter={[8, 8]} className="w-full">
        <div className="bg-primary w-full grid grid-cols-5 my-5 text-left px-1 py-2 rounded-xl mx-2">
          <Col className="col-span-2">
            <Image
              src={defaultProfile}
              alt="image"
              width={52}
              height={52}
              className="rounded-full"
            />
          </Col>
          <Col className="text-[10px] col-span-3 flex flex-col font-light text-white">
            <Text className="text-[10px] text-white">Admin</Text>
            <Text className="text-[10px] font-semibold">Fabrice Mukunzi</Text>
            <Text
              className="text-[12px] cursor-pointer text-white"
              onClick={() => setIsOpen(true)}
            >
              My Account
            </Text>
            <Button className="bg-white my-1">Logout</Button>
          </Col>
        </div>
      </Row>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        onClick={({ key }) => handleMenuItemClick(key.toString())}
        className="my-4 bg-inherit text-left"
      />
    </div>
  );
};

export default SideBar;
