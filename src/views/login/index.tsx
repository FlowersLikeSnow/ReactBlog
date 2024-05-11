import { FC } from "react";
import TIMGIMG from "@/assets/images/timg.png";
import "./index.less";
import { Button, Card, Form, FormProps, Input } from "antd";
import { passwordEncrypt } from "@/utils/password-aes";
import useMessage from "antd/es/message/useMessage";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "@/store";
type FieldType = {
	username: string;
	password: string;
};
const accountList = [
	{
		username: "tEobPN3ddqMIJKADKmLDVA==",
		password: "btcA8wOKvNkRoH7/CKNkmw=="
	},
	{
		username: "8PWhLi8hudMpa9vkTjxONg==",
		password: "QKLVparebkcI9bfKD4jcdw=="
	},
];

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
	// console.log("Failed:", errorInfo);
};
const LoginPage: FC = () => {
	const [message, holdContext] = useMessage();
	const nav = useNavigate();
    const onFinish: FormProps<FieldType>["onFinish"] = (form) => {
        if (form?.username && form?.password) {
            console.log(passwordEncrypt(form?.username), passwordEncrypt(form?.password));
            const account = accountList.find(
                (account) =>
                    account.username === passwordEncrypt(form.username || "") &&
                    account.password === passwordEncrypt(form.password || "")
            );
            if (!account) {
                message.error('名字或出生日期输入有误！')
            } else {
				setUserInfo(form)
				nav("/views");
            }
        }
    };
	return (
		<div className="login-page">
            {holdContext}
			<Card className="login-card">
				<div className="login-card-title">小仙女，请登录</div>
				<div className="w-[40px] m-auto pointer-none">
					<img src={TIMGIMG} alt="" />
				</div>
				<Form
					name="basic"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					requiredMark={false}
					className="mt-[40px]"
				>
					<Form.Item<FieldType> name="username" rules={[{ required: true, message: "请输入你的名字!" }]}>
						<Input className="login-card-input" placeholder="请输入你的名字,如张三" maxLength={10} />
					</Form.Item>

					<Form.Item<FieldType> name="password" rules={[{ required: true, message: "请输入你的出生日期!" }]}>
						<Input.Password
							className="login-card-input"
							placeholder="请输入你的出生日期,如20010101"
							maxLength={10}
						/>
					</Form.Item>
					<div className="login-card-tips">
						众里寻他千百度，蓦然回首
						<br />
						那人却在，灯火阑珊处
					</div>
					<Form.Item wrapperCol={{ span: 24 }}>
						<div className="w-full mt-[30px] flex justify-center">
							<Button type="primary" htmlType="submit" className="w-[200px] h-[50px]">
								立即登录
							</Button>
						</div>
					</Form.Item>
				</Form>
			</Card>
			<span className="w-full absolute bottom-[10px] text-[14px] text-[#ccc] flex flex-wrap justify-center">
				<div className="mx-[10px]">备案号:湘ICP备2020020115号</div>
				<div>
					工信部网站（<span>https://beian.miit.gov.cn</span>）
				</div>
			</span>
		</div>
	);
};
export default LoginPage;
