import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Food: React.FC<any> = () => {
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav/>
                    <div className='content content-block w-100 display_start_center pl-10 pr-10'>
                        <div className='img-block'>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity" src={require("./images/IMG_3638.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_4492.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_5922.jpg")}/></div></div>

                        </div>
                        <div className='img-block'>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity" src={require("./images/IMG_4423.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_4484.jpg")}/></div></div>

                        </div>
                        <div className='img-block'>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity" src={require("./images/nkwo2W9A2297.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/nkwoIMG_1944.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/nkwoIMG_2013.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/nkwoIMG_2115.jpg")}/></div></div>

                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Food;
