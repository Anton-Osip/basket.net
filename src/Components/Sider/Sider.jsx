import React from 'react'
import styles from './Sider.module.css'

import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  CommentOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
  GlobalOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const menuItems = [
  { key: 'profile', icon: <UserOutlined />, label: 'Профиль' },
  { key: 'Message', icon: <CommentOutlined />, label: 'Сообщения' },
  { key: 'Music', icon: <CustomerServiceOutlined />, label: 'Музыка' },
  { key: 'News', icon: <GlobalOutlined />, label: 'Новости' },
  { key: 'Settings', icon: <SettingOutlined />, label: 'Настройки' },
]

export const MySider = () => {
  return (
    <Sider id={styles.sider}>
      <Menu theme='light' mode='inline' defaultSelectedKeys={['1']} items={menuItems} />
    </Sider>
  )
}
