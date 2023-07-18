import React from 'react'
import ModalAddress from './ModalAddress'

const MyAddress = () => {
    return (
        <div>
            <div className="mt-3 container" id='product'>
                <div>
                    <h5 className='pt-4'>Choose another address</h5>
                    <span className='pt-0'>Manage your Shipping address</span>
                </div>
                <hr className="mt-1" />
                <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
                    <ModalAddress />
                </div>
            </div>
        </div>
    )
}

export default MyAddress