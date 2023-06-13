import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Cosmetics: React.FC<any> = () => {
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav/>
                    <div className='content content-block w-100 display_start_center pl-10 pr-10'>
                        <div className='img-block'>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity" src={require("./images/2W9A9929.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/2W9A9947.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO1288.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO1307.jpg.tmp.jpeg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO1338.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO1363.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO1904.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO1934.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO2041.jpg")}/></div></div>

                        </div>
                        <div className='img-block'>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity" src={require("./images/IMG_0141.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_3673.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_3794-2.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_4300-3.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_5393.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_7153.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_9167.jpg")}/></div></div>

                        </div>
                        <div className='img-block'>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity" src={require("./images/IMG_2475.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/IMG_2515.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO1967.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO1984.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO1998.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO2080.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO2083.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO2090.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="opacity"  src={require("./images/NKWO2152.jpg")}/></div></div>

                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Cosmetics;
