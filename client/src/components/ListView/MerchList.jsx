import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'

const Thumbnail = styled.img`
  display: block;
  height: 90%;
  width: 90vw;
  position: fixed;
`

const MerchList = ({ merchant, selectMerchant }) => {
  const { name, isOpen } = merchant
  const {t} = useTranslation()

  return (

   
    <div style={{paddingBlock: "2%"}}className="merchant-listing">
        <Thumbnail src={merchant.picture}/>
        {
          isOpen ? 
          <div>{t('openTxt')}</div> :
          <div>{t('closedTxt')}</div>
        }
        <span></span>
        <div><Thumbnail src={merchant.picture}/></div>
        <Link to='/profile'>
          <button onClick={() => selectMerchant(merchant)}>{ name }</button>
        </Link>
    </div>



  )
};

export default MerchList;




// const MerchantInfo = styled.button`
//   font-family: 'Ubuntu';
//   padding: 16px 80px;
//   font-size: 18px;
//   border-width: 0px;
//   margin-top: 5px;
//   border-color: transparent;
//   color: black;
//   border-radius: 100px;
//   background-color: transparent;

// `
// const Wrap = styled.div`
//   text-align: center;
// `

// const Ul = styled.ul`
// margin-left: -76px;
// margin-top: 0px;
// background-color:#ffd1dc;

// `
// const OpenTxt = styled.div`
// font-family: 'Ubuntu';
// color: white;
// font-weight: bold;
// font-size:20px;
// color: white;
// margin-bottom: -19px;

// `
// const ClosedTxt = styled.div`
// font-family: 'Ubuntu';
// font-weight: bold;
// font-size:20px;
// color: white;
// margin-bottom: -19px;
// `
