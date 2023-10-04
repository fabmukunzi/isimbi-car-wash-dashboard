import {
  useCreateReportMutation,
  useGetReportsQuery,
} from '@/src/store/actions/report';
import { getBase64 } from '@/src/utils/handleUpload';
import { defaultProfile } from '@/src/utils/images';
import { ReportPayload } from '@/src/utils/types/report';
import { LineOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  DatePicker,
  Dropdown,
  Form,
  Image,
  Input,
  MenuProps,
  Modal,
  Select,
  Space,
  Typography,
  Upload,
  UploadFile,
} from 'antd';
import { RcFile, UploadProps } from 'antd/es/upload';
import { FC, useState } from 'react';
import { formatDate } from '../../utils/formatdate';

const Reports: FC = () => {
  const { RangePicker } = DatePicker;
  const { Text } = Typography;
  const [isOpen, setIsOpen] = useState(false);
  const [reportType, setReportType] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleCancel = () => {
    setIsOpen(false);
  };
  const [createReport, { isLoading }] = useCreateReportMutation();
  const { data } = useGetReportsQuery('type=expense');
  const handlesubmit = async (values: any) => {
    values.type = 'income';
    values.category = values.category.toString();
    const formData = new FormData();
    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append('attachments', file.originFileObj);
      }
    });
    formData.append('name', values.name);
    formData.append('category', values.category);
    formData.append('report_date', values.report_date);
    formData.append('price', values.price);
    formData.append('quantity', values.quantity);
    formData.append('type', 'expense');
    formData.append('delivery_cost', values.delivery_cost);
    const result = await createReport(formData);
    if (!('error' in result)) handleCancel();
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Text
          onClick={() => {
            setReportType('Income');
            setIsOpen(true);
          }}
          className="text-center text-lg"
        >
          Income
        </Text>
      ),
    },
    {
      key: '2',
      label: (
        <Text
          onClick={() => {
            setReportType('Expense');
            setIsOpen(true);
          }}
          className="text-center text-lg"
        >
          Expense
        </Text>
      ),
    },
  ];
  const handleImageCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
    );
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <div className="font-poppins flex justify-around h-screen">
      <div className="flex flex-col gap-4 w-[70%]">
        <Card className="bg-secondary">
          <div className="flex gap-5 my-3">
            <Button className="bg-primary text-white">Expenses</Button>
            <Button className="bg-secondary border-none shadow">Incomes</Button>
          </div>
          <div className="flex gap-7 my-3">
            <Button className="bg-primary w-32 text-white">Today</Button>
            <Button className="bg-secondary border-none shadow">
              This Week
            </Button>
            <Button className="bg-secondary border-none shadow">
              This Month
            </Button>
            <Space
              direction="vertical"
              size={12}
              className="bg-secondary border-none rounded-xl"
            >
              <RangePicker className="bg-inherit border-none" />
            </Space>
          </div>
          <div className="h-64 overflow-y-scroll">
            {data?.reports.map((report: any, i: number) => (
              <div key={i} className="flex items-start py-2 border-b-2">
                <div className="w-28">
                  <Text className="text font-semibold">
                    {i + 1}. {report.name}
                  </Text>
                </div>
                <div className="flex gap-4">
                  <Text>
                    Quantity :{' '}
                    <span className="text-primary">{report.quantity}</span>
                  </Text>
                  <Text>
                    Unit Price :{' '}
                    <span className="text-primary">{report.price}</span>
                  </Text>
                  <Text>
                    Total :{' '}
                    <span className="text-primary">
                      {report.price * report.quantity}
                    </span>
                  </Text>
                </div>
                <Text className="font-bold mx-10">
                  {formatDate(report.report_date)}
                </Text>
                {report.attachments &&
                  report.attachments.map((img: string, i: number) => (
                    <Image
                      key={i}
                      width={70}
                      height={20}
                      src={img}
                      alt="image"
                    />
                  ))}
              </div>
            ))}
          </div>
        </Card>
        <Card className="bg-secondary">
          <Text className="font-bold text-lg">Staffs</Text>
          <div className="h-64 overflow-y-scroll relative">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex items-start py-2 border-b-2">
                  <div>
                    <Text className="font-semibold text-2xl">{i + 1}.</Text>
                    <Avatar
                      className="mx-4"
                      size={50}
                      // icon={<Image src={defaultProfile} alt="image" />}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Text className="text-lg font-semibold">
                      Kristin Watson
                    </Text>
                    <Text>Lastly edited at 03 june 2022</Text>
                  </div>
                  <Text className="font-semibold">Admin</Text>
                  <Text className="text-primary absolute right-5">
                    Contract Will End On 16, July 2023
                  </Text>
                </div>
              ))}
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-20">
        <div>
          <Dropdown menu={{ items }} placement="bottom">
            <Button className="h-12 w-full border-none my-4 bg-primary text-white font-semibold text-lg">
              Make a Report
            </Button>
          </Dropdown>
          <Modal open={isOpen} onCancel={handleCancel} footer={[]}>
            <Text className="text-xl font-semibold">{reportType} Report</Text>
            <Form layout="vertical" onFinish={handlesubmit}>
              <Form.Item<ReportPayload>
                label="Cost name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input className="py-2 w-72" />
              </Form.Item>
              <div className="flex justify-between gap-10">
                <Form.Item<ReportPayload>
                  label="Category"
                  name="category"
                  className="w-full"
                  rules={[{ required: true, message: 'Please category' }]}
                >
                  <Select options={[{ label: 'cars', value: 1 }]} />
                </Form.Item>
                <Form.Item<ReportPayload>
                  label="Date"
                  name="report_date"
                  className="w-full"
                  rules={[{ required: true, message: 'Please select date' }]}
                >
                  <DatePicker className="py-2" />
                </Form.Item>
              </div>
              <div className="flex justify-between">
                <Form.Item<ReportPayload>
                  label="Quantity"
                  name="quantity"
                  rules={[{ required: true, message: 'Please enter quantity' }]}
                >
                  <Input type="number" defaultValue={1} className="py-2 w-32" />
                </Form.Item>
                <Form.Item<ReportPayload>
                  label="Unit Price"
                  name="price"
                  rules={[
                    { required: true, message: 'Please enter unit price' },
                  ]}
                >
                  <Input type="number" className="py-2 w-32" />
                </Form.Item>
                <Form.Item<ReportPayload>
                  label="Delivery Cost"
                  name="delivery_cost"
                  rules={[
                    { required: true, message: 'Please enter delivery cost' },
                  ]}
                >
                  <Input type="number" defaultValue={0} className="py-2 w-32" />
                </Form.Item>
              </div>
              <div>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleImageCancel}
                >
                  <Image
                    alt="example"
                    width={500}
                    height={500}
                    src={previewImage}
                  />
                </Modal>
              </div>
              <div className="flex justify-center gap-5">
                <Button
                  loading={isLoading}
                  htmlType="submit"
                  className="bg-primary text-white w-32 h-10 rounded-lg"
                >
                  Add
                </Button>
                <Button onClick={handleCancel} className="w-32 h-10 rounded-lg">
                  Cancel
                </Button>
              </div>
              ,
            </Form>
          </Modal>
          <Card style={{ width: 300 }} className="bg-secondary">
            <Text>Total Cost</Text>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex gap-6 justify-center">
                  <Text>1-7, Aug</Text>
                  <LineOutlined className="text-primary" />
                  <Text>1,000,000</Text>
                </div>
              ))}
          </Card>
        </div>
        <div>
          <Card style={{ width: 300 }} className="bg-secondary text-center">
            <Text>Total Payroll</Text>
            <br />
            <Text className="text-primary">1,245,000</Text>
            <br />
            <Text>Avg. Wash By Driver/ Day</Text>
            <br />
            <Text className="text-primary">100</Text>
            <br />
            <Text>Avg. Reach Time</Text>
            <br />
            <Text className="text-primary">29 min</Text>
            <br />
            <Text>Avg. Delay Complaints/ Month</Text>
            <br />
            <Text className="text-primary">231</Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
