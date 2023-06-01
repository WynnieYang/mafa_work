import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';

const Product: React.FC<any> = () => {
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav/>
                    <div className='content w-100 flex flex-row display_start_center pl-10 pr-10'>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src={require("./images/IMG_4373.jpg")}/></div></div>
                        </div>
                        <div className='flex flex-column w-40per'>
                        </div>
                        <div className='flex flex-column w-40per'>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Product;
