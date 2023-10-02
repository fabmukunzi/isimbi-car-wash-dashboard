import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useGetAllUsersQuery } from '@/src/store/actions/auth';
import { UserSchema } from '@/src/utils/types/user';

const columns: ColumnsType<UserSchema & object> = [
  {
    title: 'Names',
    dataIndex: 'names',
    key: 'names',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
    render: (role: string) => (
      <Tag color={'orange'} key={role}>
        {role?.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: UserSchema) => (
      <Button danger={record?.isApproved}>
        {record?.isApproved ? 'Disable' : 'Enable'}
      </Button>
    ),
  },
];

const App: React.FC = () => {
  const { data, isLoading } = useGetAllUsersQuery();
  const users = data?.data || [];

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : users?.length > 0 ? (
        <Table<UserSchema> columns={columns} dataSource={users} />
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default App;
