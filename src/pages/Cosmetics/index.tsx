import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components';
import { cosmeticsImages } from './imagesLib';


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
                    {/* <List
                        width={window.innerWidth}
                        height={window.innerHeight}
                        rowCount={Object.keys(portraitImages).length}
                        rowHeight={200} // 图片的高度，可以根据需要调整
                        rowRenderer={rowRenderer}
                    > */}
                        <div className='img-block'>
                            <div >
                                {cosmeticsImages.blockOne.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={'100%'} effect="opacity" src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {cosmeticsImages.blockTwo.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={'100%'} effect="opacity" src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {cosmeticsImages.blockThree.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={'100%'} effect="opacity" src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        {/* </List> */}
                    </div>   
                </div>
            </Grid>
        </Grid>
    )
}

export default Cosmetics;
