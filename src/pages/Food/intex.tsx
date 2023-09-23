import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { foodImages } from './imagesLib';

const Food: React.FC<any> = () => {
    const windowWidth = window.innerWidth;
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
                                {foodImages.blockOne.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={windowWidth > 1000 ? `${((windowWidth-20)/3)-20}px` : '100%'} height={windowWidth > 1000 ? img.size === 'vertical' ? `${(((windowWidth-20)/3)-20)*3/2}px` : img.size === 'square' ? `${(((windowWidth-20)/3)-20)}px` : `${(((windowWidth-20)/3)-20)*2/3}px` : `auto`} effect={windowWidth > 1000 ? 'blur' : 'opacity'} src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {foodImages.blockTwo.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={windowWidth > 1000 ? `${((windowWidth-20)/3)-20}px` : '100%'} height={windowWidth > 1000 ? img.size === 'vertical' ? `${(((windowWidth-20)/3)-20)*3/2}px` : `${(((windowWidth-20)/3)-20)*2/3}px` : `auto`} effect={windowWidth > 1000 ? 'blur' : 'opacity'} src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {foodImages.blockThree.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={windowWidth > 1000 ? `${((windowWidth-20)/3)-20}px` : '100%'} height={windowWidth > 1000 ? img.size === 'vertical' ? `${(((windowWidth-20)/3)-20)*3/2}px` : `${(((windowWidth-20)/3)-20)*2/3}px` : `auto`} effect={windowWidth > 1000 ? 'blur' : 'opacity'} src={require(`${img.url}`)}/></div>
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

export default Food;
