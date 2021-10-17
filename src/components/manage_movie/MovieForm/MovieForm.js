/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import './MovieForm.css'
import { useFormik } from 'formik';
import { Input, InputNumber, DatePicker, Switch, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieAction, editMovieAction } from '../../../redux/actions/MovieAction';
import { GROUP_ID } from '../../../util/settings/Constant';

export default function MovieForm() {

    const { edit } = useSelector(state => state.MovieReducer);
 
    let buttonSize = 'large';
    const { TextArea } = Input;
    const [img, setImg] = useState({
        name: 'Choose File',
        src: '',
    });

    const dispatch = useDispatch();

    const addMovie = (formData) => {
        const action = addMovieAction(formData);
        dispatch(action);
    }
    const editMovie = (formData) => {
        const action = editMovieAction(formData);
        dispatch(action);
    }
    
    const datePickerChange = (value) => {
        const ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
    }

    const customHandleChange = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleFileChange = (e) => {
        let file = e.target.files[0];
        //read file
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            let upImg = {
                name: file.name,
                src: e.target.result,
            };
            setImg(upImg);
        }

        formik.setFieldValue('hinhAnh', file);
    }

    const formik = useFormik({
        initialValues: {
            maPhim: '',
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: moment(),
            sapChieu: true,
            dangChieu: true,
            hot: true,
            danhGia: 5,
            maNhom: GROUP_ID,
            hinhAnh: {},
        },
        onSubmit: values => {
            //Tạo formdata
            let formData = new FormData();
            for (const [key, value] of Object.entries(values)) {
                if (key === 'hinhAnh') {
                    if (values.hinhAnh.name) {
                        formData.append(key, value, value.name);
                    }
                } else {
                    formData.append(key, value);
                }
            }

            //Call api
            if (edit.editing) {
                editMovie(formData);
                clearInput();
            } else {
                addMovie(formData);
            }
        },
    });

    const setEditingMovie = () => {
        formik.setFieldValue('maPhim', edit.editMovie.maPhim);
        formik.setFieldValue('tenPhim', edit.editMovie.tenPhim);
        formik.setFieldValue('trailer', edit.editMovie.trailer);
        formik.setFieldValue('moTa', edit.editMovie.moTa);
        formik.setFieldValue('ngayKhoiChieu', moment(edit.editMovie.ngayKhoiChieu, 'YYYY-MM-DDThh:mm:ss'));
        formik.setFieldValue('sapChieu', edit.editMovie.sapChieu);
        formik.setFieldValue('dangChieu', edit.editMovie.dangChieu);
        formik.setFieldValue('hot', edit.editMovie.hot);
        formik.setFieldValue('danhGia', edit.editMovie.danhGia);
        setImg({
            name: '',
            src: edit.editMovie.hinhAnh,
        });
    }
    const clearInput = () => {
        formik.setFieldValue('maPhim', '');
        formik.setFieldValue('tenPhim', '');
        formik.setFieldValue('trailer', '');
        formik.setFieldValue('moTa', '');
        formik.setFieldValue('ngayKhoiChieu', moment());
        formik.setFieldValue('sapChieu', true);
        formik.setFieldValue('dangChieu', true);
        formik.setFieldValue('hot', true);
        formik.setFieldValue('danhGia', 5);
        setImg({
            name: '',
            src: '',
        });
    }

    useEffect(() => {
        if (edit.editing) {
            setEditingMovie();
        }
    }, [edit.editMovie])
    
    const renderButton = () => {
        if (edit.editing) {
            return <Button size={buttonSize} htmlType='submit' icon={<EditOutlined />} className='mr-2'>Edit</Button>
        } else {
            return <Button size={buttonSize} htmlType='submit' type="primary">Add Movie</Button>
        }
    }

    return (
        <div>
            <h2 className='pb-2 border-b border-gray-300'>Add/Edit Movie</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <p>Tên phim</p>
                    <Input id='inpTenPhim' name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
                </div>
                <div className='form-group'>
                    <p>Trailer</p>
                    <Input id='inpTrailer' name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
                </div>
                <div className='form-group'>
                    <p>Mô tả</p>
                    <TextArea showCount maxLength={150} id='inpMota' name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
                </div>
                <div className='form-group'>
                    <p>Ngày khởi chiếu</p>
                    <DatePicker style={{ width: '100%' }} name='ngayKhoiChieu' format={'DD/MM/YYYY'} onChange={datePickerChange} value={moment(formik.values.ngayKhoiChieu, 'DD/MM/YYYY')}/>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 lg:w-full xl:w-full 2xl:w-1/2'>
                        <div className='form-group'>
                            <p>Sắp chiếu</p>
                            <Switch checked={formik.values.sapChieu} name='sapChieu' onChange={customHandleChange('sapChieu')} />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-full xl:w-full 2xl:w-1/2'>
                        <div className='form-group'>
                            <p>Đang chiếu</p>
                            <Switch checked={formik.values.dangChieu} name='dangChieu' onChange={customHandleChange('dangChieu')} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 lg:w-full xl:w-full 2xl:w-1/2'>
                        <div className='form-group'>
                            <p>Số điểm</p>
                            <InputNumber min={0} max={10} name='danhGia' value={formik.values.danhGia} onChange={customHandleChange('danhGia')} />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-full xl:w-full 2xl:w-1/2'>
                        <div className='form-group'>
                            <p>Hot</p>
                            <Switch checked={formik.values.hot} name='hot' onChange={customHandleChange('hot')} />
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <p>Hình ảnh</p>
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" onChange={handleFileChange} id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" accept='image/png, image/jpeg' />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">{img.name}</label>
                        </div>
                    </div>
                    <img className='w-64 h-80 rounded-sm border' src={img.src} alt='...' />
                </div>
                <div className='flex h-full items-end justify-end'>
                    {renderButton()}
                </div>
            </form>
        </div>
    )
}
