import React, {useState} from 'react'
import './MovieForm.css'
import { Input, InputNumber, DatePicker, Switch, Upload, Button } from 'antd';
import { UploadOutlined, EditOutlined } from '@ant-design/icons';

export default function MovieForm() {

    let buttonSize = 'large';
    const { TextArea } = Input;
    const onChange = e => {
        console.log('Change:', e.target.value);
    };
    const [incoming, setIncoming] = useState(true);
    const [showing, setShowing] = useState(true);
    const [hot, setHot] = useState(true);

    
    return (
        <div>
            <h2 className='pb-2 border-b border-gray-300'>Add/Edit Movie</h2>
            <form>
                <div className='form-group'>
                    <p>Tên phim</p>
                    <Input  id='inpTenPhim'/>
                </div>
                <div className='form-group'>
                    <p>Trailer</p>
                    <Input  id='inpTrailer'/>
                </div>
                <div className='form-group'>
                    <p>Mô tả</p>
                    <TextArea showCount maxLength={100} onChange={onChange}  id='inpMota'/>
                </div>
                <div className='form-group'>
                    <p>Ngày khởi chiếu</p>
                    <DatePicker style={{ width: '100%' }} />
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 lg:w-full xl:w-full 2xl:w-1/2'>
                        <div className='form-group'>
                            <p>Sắp chiếu</p>
                            <Switch checked={incoming} onChange={() => { setIncoming(!incoming) }} />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-full xl:w-full 2xl:w-1/2'>
                        <div className='form-group'>
                            <p>Đang chiếu</p>
                            <Switch checked={showing} onChange={() => { setShowing(!showing) }} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 lg:w-full xl:w-full 2xl:w-1/2'>
                        <div className='form-group'>
                            <p>Số điểm</p>
                            <InputNumber />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-full xl:w-full 2xl:w-1/2'>
                        <div className='form-group'>
                            <p>Hot</p>
                            <Switch checked={hot} onChange={() => { setHot(!hot) }} />
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <p>Hình ảnh</p>
                    <Upload>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </div>
                <div className='flex h-full items-end justify-end'>
                    <Button size={buttonSize} icon={<EditOutlined />} className='mr-2'>Edit</Button>
                    <Button size={buttonSize} type="primary">Add Movie</Button>
                </div>
            </form>
        </div>
    )
}
