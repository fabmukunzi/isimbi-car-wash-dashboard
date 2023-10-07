import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  useChangeStatusMutation,
  useGetAllUsersQuery,
} from '@/src/store/actions/auth';
import { UserSchema } from '@/src/utils/types/user';

const App: React.FC = () => {
  const [changeStatus, { isLoading: btnLoading }] = useChangeStatusMutation();
  const handleStatus = async (values: any) => {
    const res = await changeStatus(values);
    await resp.refetch()
  };
  const resp = useGetAllUsersQuery();
  const { data, isLoading }=resp
  const users = data?.data || [];
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
        <Button
          onClick={() =>
            handleStatus({
              isApproved: record?.isApproved ? false : true,
              id: record?.id,
            })
          }
          danger={record?.isApproved}
        >
          {record?.isApproved ? 'Disable' : 'Enable'}
        </Button>
      ),
    },
  ];
  return (
    <div>
      <Table<UserSchema>
        loading={isLoading}
        columns={columns}
        dataSource={users}
        pagination={false}
      />
    </div>
  );
};

export default App;
