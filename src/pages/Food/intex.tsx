import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';

const Food: React.FC<any> = () => {
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav/>
                    <div className='content w-100 flex flex-row display_start_center pl-10 pr-10'>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_3638.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_4423.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_4492.jpg")}/></div></div>

                        </div>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_4484.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_5922.jpg")}/></div></div>

                            {/* <div ><div className='p-10'><img className='w-100' src='https://uc27cbf0c0640a91a4da67a541ae.previews.dropboxusercontent.com/p/thumb/AB4X7gU0FSciDLN-2TxRnfCts-upFDX3jBPsBLyOFwZCgzcrzs9GoSi5D1A3gsgWzXCCxr0kaqwEASHw8rJOLcAGZqDqcT_ZN9YpRL-JpVcstqahzEKtFa8pe-ruvqfmrc3-mxLCQ_4pD9udSlkKmQfz7IuB1hhDKntnwziitN77ERZCzYsq0tZLtvw6o72i7E2Uw-6Y8PyYVHFF42M5LgL7SjSA1aD_ngXcKrbq34pmmpuwiHbHITTG7cSMPJKh8ed3io7y8oExB0nuIn0dUcN_3iXZ4vbVgy0K8U3T_PUHHRWSWn6dlssVagbvV0LrfBpn71UqiDgoaBpQKCjX5vW6s5Pa4aH25CEAEvywGHC-DqP4csjGF9e9EasY8IUWR-RPziJKJ-J0Hx5024N15rSq_BDYGFc86-GWx69VLJJYx5umrEhO-rQFiSTMK5dBOaFFge4PksI-tWJBqmtSMCR2/p.jpeg'/></div></div>
                            <div ><div className='p-10'><img className='w-100' src='https://uc32aa2877eaa8864bb86bb57020.previews.dropboxusercontent.com/p/thumb/AB67ywUYJPIKnZOtE0-kgutQZEGBFrdf0zj-lv8D52KpyAz_1aWpY-ao6gfTEfPNXrmhzTRaBzLwjYrBi5_mZF1r2De0siGHnDDeM0CMaPJARnt0QkU1CYIBMBCB-RRM7Oht8soTA2-ebzbQOFlod2ENloifo_I9xTHE7yXLFyyAeYWdCq8Fd6r_ncpiHxboFH8YoDewthNOThwWwHbhyjIlxdqQZTsblJZQUeSXl6BGLWNVEaNdY0YbdGkxf4i-Ndz8Mx1bLEqim2XzcPr5eA7rIATNm0knm6hDEEvwwDoz3QL88sJi1G0uUf4fFWcwXm43wS2sE93QVrgs3qRR8WcdjWwKon0U4bNctnMgUK8vURaDlklQvJ_tGQnVKM4NbupvF7hlRzsqOf4EMusjn55XzKnJW8oHGQePs3Bsh_hGzivHQreNNIQ4yECHOrvrcEG9Px63rqtRSey0oJyjeJgz/p.jpeg'/></div></div> */}
                        </div>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/nkwo2W9A2297.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/nkwoIMG_1944.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/nkwoIMG_2013.jpg")}/></div></div>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/nkwoIMG_2115.jpg")}/></div></div>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Food;
