import {Avatar , Divider} from 'antd'
import '../static/style/components/author.css'
import { GithubOutlined  ,QqOutlined  , WechatOutlined } from '@ant-design/icons'

const Author = ()=>{
    return(
        <div className='author-div comm-box'>
            <div> <Avatar size={100} src='http://blogimages.jspang.com/blogtouxiang1.jpg' /></div>
            <div className='author-introduction'> 
            专注于WEB和移动前端开发
            <Divider >社交帐号</Divider>
            <Avatar size={28} className="account"><GithubOutlined   /></Avatar>
            <Avatar size={28} className="account"><QqOutlined   /></Avatar>
            <Avatar size={28} className="account"><WechatOutlined   /></Avatar>
            

            </div>
        </div>
    )
}

export default Author