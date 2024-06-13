import React  from 'react'
import { Image } from 'antd'
import { path_images } from '../consts'

export default function Productos() {
    return (
        <body>
            <Image preview={false} className='imagen-responsive-center' src={path_images.replace('<image_id>', 'c9ba5d24-9ad8-4bee-593b-fbb1c2e93700')} />
            <Image preview={false} className='imagen-responsive-center' src={path_images.replace('<image_id>', '35bfa89e-ab4c-4213-b062-5cd06724c600')} />
            <Image preview={false} className='imagen-responsive-center' src={path_images.replace('<image_id>', '4e664eb3-e53f-4468-03f7-d7f644d45900')} />
        </body>
    )
}