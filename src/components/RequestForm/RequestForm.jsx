import { Button, Form, Input } from 'antd';
import css from './requestFrom.module.scss';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const RequestForm = () => {
    return(
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={ css.requestform }
      >
        <Form.Item>
          <Button 
          type='ghost' 
          htmlType='button'
          className={ css.formclosebutton }
          >
             X
          </Button>
        </Form.Item>
        <Form.Item>
          <h2 className={ css.caption }>У вас є запитання ?</h2>
        </Form.Item>
        <Form.Item
          label="Ваша пошта"
          name="username"
          rules={[
            {
              required: true,
              message: 'Будь-ласка, напишіть e-mail!',
            },
          ]}
        >
          <Input className={ css.formitem  }/>
        </Form.Item>
    
        <Form.Item
          label="Запитання"
          name="password"
          rules={[
            {
              required: true,
              message: 'Будь-ласка, напишіть питання!',
            },
          ]}
        >
          <Input.TextArea className={ css.formitem  }/>
        </Form.Item>
    
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button 
          type="primary" 
          htmlType="submit"
          className={ css.formitem  }
          >
            Відправити
          </Button>
        </Form.Item>
      </Form>
    );
}

export default RequestForm;