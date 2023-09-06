import React, { useState, useEffect, useCallback, useContext  } from 'react';
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';
import { portraitImages } from './imagesLib';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { List,ListRowRenderer,ListRowProps } from 'react-virtualized';


const Portrait: React.FC<any> = () => {
    const rowRenderer: ListRowRenderer = ({ index, key, style }: ListRowProps) => {
        const imageUrl: string | undefined = portraitImages.blockOne[index].url;
      
        return (
          <div key={key} style={style}>
            {imageUrl && <img src={require(`${imageUrl}`)} alt={`Image ${index}`} />}
          </div>
        );
      };
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
                                {portraitImages.blockOne.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={'100%'} effect="opacity" src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {portraitImages.blockTwo.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={'100%'} effect="opacity" src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {portraitImages.blockThree.map((img,idx:any) => {
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

export default Portrait;