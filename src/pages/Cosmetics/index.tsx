import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components';


const MyImage:React.FC<any>  = ({ image }) => (
    <div>
      <LazyLoadImage
        height={image.height}
        src={image.src} // use normal <img> attributes as props
        width={image.width} />
      <span>{image.caption}</span>
    </div>
  );
  

const Cosmetics: React.FC<any> = () => {

    const LazyPicture = styled(LazyLoadImage)`
  object-fit: cover;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ width }) => (width ? `${width}px` : "100%")};
  
  &.lazy-load-image-background.opacity {
    background-image: none !important;
    opacity: 0;
    transition: opacity .3s;        
  }

  &.lazy-load-image-background.opacity.lazy-load-image-loaded {
    opacity: 1;        
  }
`;
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav/>
                    <div className='content content-block w-100 display_start_center pl-10 pr-10'>
                        <div className='img-block'>
                            <div ><div className='p-10'><img width={'100%'} src={require("./images/2W9A9929.jpg")}/></div></div>
                            <div ><div className='p-10'><MyImage><img src={require("./images/2W9A9947.jpg")}/></MyImage></div></div>
                            <div ><div className='p-10'><MyImage><img src={require("./images/NKWO1288.jpg")}/></MyImage></div></div>
                            <div ><div className='p-10'><MyImage><img  src={require("./images/NKWO1307.jpg.tmp.jpeg")}/></MyImage></div></div>
                            <div ><div className='p-10'><MyImage><img  src={require("./images/NKWO1338.jpg")}/></MyImage></div></div>
                            <div ><div className='p-10'><MyImage><img  src={require("./images/NKWO1363.jpg")}/></MyImage></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="blur"  src={require("./images/NKWO1904.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="blur"  src={require("./images/NKWO1934.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="blur"  src={require("./images/NKWO2041.jpg")}/></div></div>

                        </div>
                        <div className='img-block'>
                            <div ><div className='p-10'><img width={'100%'} src={require("./images/IMG_0141.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyPicture src={require("./images/IMG_3673.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyPicture  src={require("./images/IMG_3794-2.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyPicture src={require("./images/IMG_4300-3.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyPicture src={require("./images/IMG_5393.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="blur"  src={require("./images/IMG_7153.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="blur"  src={require("./images/IMG_9167.jpg")}/></div></div>

                        </div>
                        <div className='img-block'>
                            <div ><div className='p-10'><img width={'100%'} src={require("./images/IMG_2515.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyPicture  src={require("./images/IMG_2475.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyPicture  src={require("./images/NKWO1967.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyPicture  src={require("./images/NKWO1984.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyPicture  src={require("./images/NKWO1998.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="blur"  src={require("./images/NKWO2080.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="blur"  src={require("./images/NKWO2083.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="blur"  src={require("./images/NKWO2090.jpg")}/></div></div>
                            <div ><div className='p-10'><LazyLoadImage width={'100%'} effect="blur"  src={require("./images/NKWO2152.jpg")}/></div></div>

                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Cosmetics;
