import {
  useCreateIncomeMutation,
  useCreateReportMutation,
} from '@/src/store/actions/report';
import { expensesCategories, incomeCategories } from '@/src/utils/constants';
import { getBase64 } from '@/src/utils/handleUpload';
import { ReportPayload } from '@/src/utils/types/report';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Image,
  Input,
  Modal,
  Select,
  Upload,
  UploadFile,
} from 'antd';
import { RcFile, UploadProps } from 'antd/es/upload';
import { FC, useState } from 'react';

interface IReport {
  handleCancel: () => void;
  reportType: string;
}
const ReportForm: FC<IReport> = ({ handleCancel, reportType }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [createReport, { isLoading }] = useCreateReportMutation();
  const [createIncome, { isLoading: incomeLoading }] =
    useCreateIncomeMutation();
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
  const handleImageCancel = () => setPreviewOpen(false);

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handlesubmit = async (values: any) => {
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
    if (reportType === 'Expense') {
      formData.append('price', values.price);
      formData.append('quantity', values.quantity);
      formData.append('delivery_cost', values.delivery_cost);
    } else {
      formData.append('amount', values.amount);
    }
    const result =
      reportType === 'Expense'
        ? await createReport(formData)
        : await createIncome(formData);
    if (!('error' in result)) handleCancel();
  };
  return (
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
          <Select options={reportType==='Expense'?expensesCategories:incomeCategories} />
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
      {reportType === 'Expense' ? (
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
            rules={[{ required: true, message: 'Please enter unit price' }]}
          >
            <Input type="number" className="py-2 w-32" />
          </Form.Item>
          <Form.Item<ReportPayload>
            label="Delivery Cost"
            name="delivery_cost"
            rules={[{ required: true, message: 'Please enter delivery cost' }]}
          >
            <Input type="number" defaultValue={0} className="py-2 w-32" />
          </Form.Item>
        </div>
      ) : (
        <Form.Item<ReportPayload>
          label="Amount"
          name="amount"
          rules={[{ required: true, message: 'Please enter amount' }]}
        >
          <Input type="number" defaultValue={0} className="py-2 w-80" />
        </Form.Item>
      )}
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
            className="object-cover"
            alt="example"
            width={470}
            height={400}
            src={previewImage}
          />
        </Modal>
      </div>
      <div className="flex justify-center gap-5">
        <Button
          loading={isLoading && incomeLoading}
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
  );
};

export default ReportForm;
