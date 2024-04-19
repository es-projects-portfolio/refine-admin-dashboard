import { getNameInitials } from '../../utilities';
import { Avatar as AntAvatar } from 'antd';
import { AvatarProps } from 'antd/lib';

type Props = AvatarProps & {
    name?: string;
}

const CustomAvatar = ({ name, style, ...rest} : Props) => {
  return (
    <AntAvatar
        alt={name}
        size='small'
        style={{
            backgroundColor: '#87068',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            ...style
        }}
        {...rest}
    >
        {getNameInitials(name || '')}
    </AntAvatar>
  )
}

export default CustomAvatar