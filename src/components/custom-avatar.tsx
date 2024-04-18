import { Avatar as AntAvatar } from 'antd';
import { AvatarProps } from 'antd/lib';

type Props = AvatarProps & {
    name: string;
}

const CustomAvatar = ({ name, style, ...rest} : Props) => {
  return (
    <AntAvatar
        alt={'JavaScript Mastery'}
        size='small'
        style={{
            backgroundColor: '#87068',
            display: 'flex',
            alignItems: 'center',
            border: 'none'
        }}
    >
        JM
    </AntAvatar>
  )
}

export default CustomAvatar