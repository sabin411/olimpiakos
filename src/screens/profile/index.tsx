import React from 'react';

// components
import Button from '@/components/Button';

// packages
import Cookies from 'universal-cookie';
import { Box, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// common
import EditProfile from './EditProfile';

// types
import { whatToUpdateProps } from './types';

// utils
import { displayImage } from '@/utils/services';

// styles
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'var(--primary-900)',
  boxShadow: 24,
};

// Modal form for editing profile
const ModalForm = ({
  open,
  handleClose,
  whatToUpdate,
  setOpenModal,
}: {
  open: boolean;
  handleClose: () => void;
  whatToUpdate: whatToUpdateProps;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className='py-5 px-4' sx={style}>
        <h5 className='text-neutral-300'>Update Profile</h5>
        <EditProfile whatToUpdate={whatToUpdate} setOpenModal={setOpenModal} />
      </Box>
    </Modal>
  );
};

const Profile = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const name = cookies.get('fullName');
  const phoneNumber = cookies.get('phoneNumber');
  const userName = cookies.get('userName');
  const email = cookies.get('email');
  const profilePic = cookies.get('profilePic');
  const [currentUpdateInfo, setCurrentUpdateInfo] =
    React.useState<whatToUpdateProps>('EMAIL');
  const wrapperStyle = 'flex items-center justify-between';
  const labelStyle = 'text-s font-regular text-neutral-500';
  const valueStyle = 'text-h6 font-regular text-neutral-300';
  const containerStyle = {
    backgroundColor: 'var(--primary-700)',
  };

  // handle logout
  const logout = () => {
    cookies.remove('token');
    cookies.remove('userId');
    cookies.remove('userName');
    cookies.remove('email');
    cookies.remove('fullName');
    cookies.remove('profilePic');
    cookies.remove('userInfoId');
    cookies.remove('phoneNumber');
    cookies.remove('ugid');
    navigate('/login');
  };

  // handle open edit modal form
  const handleOpenModal = (whatToUpdate: whatToUpdateProps) => {
    setOpenModal(true);
    setCurrentUpdateInfo(whatToUpdate);
  };

  return (
    <>
      <ModalForm
        handleClose={() => {
          setOpenModal(false);
        }}
        whatToUpdate={currentUpdateInfo}
        open={openModal}
        setOpenModal={setOpenModal}
      />
      <section className='container-custom'>
        <div className='lg:w-[800px] mx-auto mt-[128px] '>
          <div className='flex items-start'>
            <img
              className='w-14 h-14 rounded object-cover'
              src={displayImage(profilePic)}
              alt='Default avatar'
            ></img>
            <div className='ml-4'>
              <h5 className='text-h6 font-semi-bold text-neutral-300'>
                {name}
              </h5>
              <p className='text-s font-regular text-neutral-500'>
                {phoneNumber}
              </p>
            </div>
          </div>

          {/* main bodya sectoin starts */}
          <div className='w-full bg-primary-900 rounded-lg p-7 mt-10 flex flex-col gap-y-7'>
            {/* Full Name */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>Display name</p>
                <h5 className={valueStyle}>{name}</h5>
              </div>
              <Button
                containerStyle={containerStyle}
                buttonSize='medium'
                title='Edit'
                variant='contained'
                type='button'
                onClick={() => handleOpenModal('NAME')}
              />
            </div>
            {/* email */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>Email</p>
                <h5 className={valueStyle}>{email}</h5>
              </div>
              <Button
                containerStyle={containerStyle}
                buttonSize='medium'
                title='Edit'
                variant='contained'
                type='button'
                onClick={() => handleOpenModal('EMAIL')}
              />
            </div>
            {/* phoneNumber */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>Phone Number</p>
                <h5 className={valueStyle}>{phoneNumber}</h5>
              </div>
              <Button
                containerStyle={containerStyle}
                buttonSize='medium'
                title='Edit'
                variant='contained'
                type='button'
                onClick={() => handleOpenModal('PHONE')}
              />
            </div>
            {/* user name */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>User Name</p>
                <h5 className={valueStyle}>{userName}</h5>
              </div>
            </div>
            {/* password */}
            <div className={wrapperStyle}>
              <div>
                <p className={labelStyle}>Password</p>
                <h5 className='text-h6 font-semi-bold text-neutral-300 flex justify-center items-center gap-x-2 py-2'>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                  <div className='h-2 w-2 bg-neutral-300 rounded-full'></div>
                </h5>
              </div>
              <Button
                containerStyle={containerStyle}
                buttonSize='medium'
                title='Change'
                variant='contained'
                type='button'
                onClick={() => handleOpenModal('PASSWORD')}
              />
            </div>
          </div>
          {/* main bodya sectoin ends */}
          <Button
            containerStyle={{
              ...containerStyle,
              marginInline: 'auto',
              display: 'block',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
            buttonSize='medium'
            title='Sign out'
            variant='contained'
            type='button'
            onClick={() => {
              logout();
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
