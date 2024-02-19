import React from 'react'
import styles from './App.module.css'
import ball from './assets/image/logo.svg'
import banner from './assets/image/banner.jpg'
import userImage from './assets/image/userImage.jpg'

import { Layout, Menu, Typography, Button, Form, Input, Avatar, List } from 'antd'
import {
  UserOutlined,
  CommentOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
  GlobalOutlined,
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout
const { Title } = Typography

const menuItems = [
  { key: 'profile', icon: <UserOutlined />, label: 'Профиль' },
  { key: 'Message', icon: <CommentOutlined />, label: 'Сообщения' },
  { key: 'Music', icon: <CustomerServiceOutlined />, label: 'Музыка' },
  { key: 'News', icon: <GlobalOutlined />, label: 'Новости' },
  { key: 'Settings', icon: <SettingOutlined />, label: 'Настройки' },
]

const dataList = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

export const App = () => {
  return (
    <Layout>
      <Header id={styles.header}>
        <a href='home' className={styles.logo}>
          <img src={ball} alt='logo' />
        </a>
      </Header>
      <Layout>
        <Sider id={styles.sider}>
          <Menu theme='light' mode='inline' defaultSelectedKeys={['1']} items={menuItems} />
        </Sider>
        <Content id={styles.content}>
          <div className={styles.banner}>
            <img src={banner} alt='banner' className={styles.banner__img} />
          </div>
          <div className={styles.user__info}>
            <div className={styles.user}>
              <img src={userImage} alt='user' />
            </div>
            <div className={styles.user__description}>
              <Title className={styles.user__name}>Osipchyk Anton</Title>
              <Title level={4} className={styles.user__burthdat}>
                Date of Birth: 30 October
              </Title>
              <Title level={4} className={styles.user__cite}>
                City: Minsk
              </Title>
              <Title level={4} className={styles.user__education}>
                Education: BNTU
              </Title>
            </div>
          </div>
          <div id={styles.newPosts}>
            <Title level={2} className={styles.user__burthdat}>
              My posts
            </Title>
            <Form name='post'>
              <Form.Item name='new_post'>
                <Input />
              </Form.Item>
              <Button type='primary' htmlType='submit' className={styles.sumbit__btn}>
                Отправить
              </Button>
            </Form>
          </div>
          <List
            itemLayout='horizontal'
            dataSource={dataList}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                  title={<a href='https://ant.design'>{item.title}</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </Layout>
  )
}
