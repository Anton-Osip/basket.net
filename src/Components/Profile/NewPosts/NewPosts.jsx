import React from 'react'
import styles from './NewPosts.module.css'

import { Typography, Button, Form, Input } from 'antd'

const { Title } = Typography

export const NewPost = () => {
  return (
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
  )
}
