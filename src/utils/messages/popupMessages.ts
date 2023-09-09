import { message } from 'antd';

type MessageProps = {
  type: 'success' | 'error' | 'info' | 'warning';
  content: string;
};
export const showPopUpMessage = ({ type, content }: MessageProps) => {
  message[type](content);
};
