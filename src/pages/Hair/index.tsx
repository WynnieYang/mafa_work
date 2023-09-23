import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { hairImages } from './imagesLib';
// import { List,ListRowRenderer,ListRowProps } from 'react-virtualized';
interface ImageLoaderProps {
    
  }
  
//   const SegmentedImageLoader: React.FC<ImageLoaderProps> = ({ imageUrls }) => {
//     const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
//       return (
//         <div key={key} style={style}>
//           <img src={imageUrls[index]} alt={`Image ${index}`} />
//         </div>
//       );
//     };
  

const Hair: React.FC<ImageLoaderProps> = () => {
    // const rowRenderer:ListRowRenderer = ({ index, key, style }) => {
    //     return (
    //       <div key={key} style={style}>
    //         <img src={require(`${hairImages.blockOne[index]?.url}`)} alt={`Image ${index}`} />
    //       </div>
    //     );
    //   };
    
    //   return (
    //     <List
    //       width={470} // 列表的宽度
    //       height={400} // 列表的高度
    //       rowCount={hairImages.blockOne.length} // 图片的数量
    //       rowHeight={200} // 每行的高度
    //       rowRenderer={rowRenderer} // 自定义的行渲染函数
    //     />
    //   );

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
                                {hairImages.blockOne.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={windowWidth > 1000 ? `${((windowWidth-20)/3)-20}px` : '100%'} height={windowWidth > 1000 ? img.size === 'vertical' ? `${(((windowWidth-20)/3)-20)*3/2}px` : `${(((windowWidth-20)/3)-20)*2/3}px` : `auto`} effect={windowWidth > 1000 ? 'blur' : 'opacity'} src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {hairImages.blockTwo.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={windowWidth > 1000 ? `${((windowWidth-20)/3)-20}px` : '100%'} height={windowWidth > 1000 ? img.size === 'vertical' ? `${(((windowWidth-20)/3)-20)*3/2}px` : `${(((windowWidth-20)/3)-20)*2/3}px` : `auto`} effect={windowWidth > 1000 ? 'blur' : 'opacity'} src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {hairImages.blockThree.map((img,idx:any) => {
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

export default Hair;
