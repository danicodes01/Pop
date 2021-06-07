import React, { useState } from 'react';
import MerchantProfile from '../../MerchantProfileView/MerchantProfile.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled, { css } from 'styled-components'
import UploadPic from './UploadPic.jsx';
import ToggleOpenClose from '../../ToggleOpenClose.jsx'
import { useTranslation } from 'react-i18next'

const Button = styled.button`
margin-top: 0px;
`

const Div = styled.div`
margin-top: 30px; 
`
const H1 = styled.h1`
margin-top: 40px;
margin-bottom: 0px;
text-shadow: 2px 2px 4px #000000;
`
const EditPopupProfile = ({ merchant, selectMerchant, merchData, setMerchData }) => {
  const [ openOrClosed, setOpenOrClosed] = useState('');
  const [ uploadPicWindow, setUploadPicWindow ] = useState(false);
  const { t } = useTranslation()


  const closeBusiness = () => {
    axios.put(`/api/merchants/closemerchant/${merchant.id}`)
      .then(() => {
        setOpenOrClosed(' is closed');
        let merchants = merchData;
        merchants.forEach(merch => {
          if (merch.id === merchant.id) {
            merch.isOpen = false;
          }
        });
        setMerchData(merchants);
      })
      .catch(err => console.log('closing merchant error', err));
  }

  const openBusiness = () => {
    axios.put(`/api/merchants/openmerchant/${merchant.id}`)
      .then(() => {
        setOpenOrClosed(' is open');
        let merchants = merchData;
        merchants.forEach(merch => {
          if (merch.id === merchant.id) {
            merch.isOpen = true;
          }
        });
        setMerchData(merchants);
      })
      .catch(err => console.log('opening merchant error', err));
  }



  return (
    <Div >
      <div className='controlPanel'>
        <H1>{t("controlpaneltxt")}</H1>
        <br/>
        <hr/>
        <br/>
      <Link to='/yourpopups'>
       <Button>{t("backBtn")}</Button>
      </Link>
        <Link to="/editinfo">
          <button>{t("editInfoBtn")}</button>
        </Link>
        <button
          onClick={() => setUploadPicWindow(true)}
        >{t("uploadFotoBtn")}</button>
        <Link to="/editmenu">
          <button>{t("editMenuBtn")}</button>
        </Link>
        <Link to="/editowner">
          <button>{t("editOwnerBtn")}</button>
        </Link>
        <Link to='/openpopmap'>
          {merchant.isOpen ? (<button>{t("closeBtn")}</button>) : (<button>{t("openBtn")}</button>)}
        </Link>
      </div>
      {
        uploadPicWindow ?
        <UploadPic
          merchant={merchant}
          setUploadPicWindow={setUploadPicWindow}
          
        /> :
        ''
      }
      <div className='profilePreview'>
        <MerchantProfile 
          merchant={merchant} 
          openOrClosed={openOrClosed} 
          setOpenOrClosed={setOpenOrClosed}
          uploadPicWindow={uploadPicWindow} 
          style={{fontFamily: 'Ubuntu'}}
        />
      </div>
    </Div >
  )
};

export default EditPopupProfile;