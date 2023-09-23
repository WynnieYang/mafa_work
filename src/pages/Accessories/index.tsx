import React, { useState, useEffect, useCallback, useContext, useRef  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';
import { accessoryImages } from './imagesLib';
import { LazyLoadImage } from "react-lazy-load-image-component";
// import useImage from 'use-image';
// import { getImageSize } from 'react-image-size';
  
const Accessories: React.FC<any> = () => {
    // let width = useImage(image);
    // useEffect(() => {
    //     Image.getSize(image, (w:any, h:any) => {
    //         console.log(w)
    //         console.log(h)
    //       });
    // })
    // async function fetchImageSize(image:any) {
    //     let height = 0;
    //         await getImageSize(require(`${image}`)).then((res) => {
    //             height = ((((currentWidth-20)/3)-20)/res.width) * res.height;
    //         })
    //     console.log(height)
    //     return height;    
            
    // }
    const windowWidth = window.innerWidth;
    const navRef = useRef(null);
    const [currentWidth,setCurrentWidth] = useState(0);

    useEffect(() => {
        // 创建一个ResizeObserver实例
        const observer = new ResizeObserver(entries => {
          for (let entry of entries) {
            // entry.contentRect包含了<div>元素的新尺寸信息
            const newWidth = entry.contentRect.width;
            const newHeight = entry.contentRect.height;
            setCurrentWidth(newWidth)
          }
        });
      
        // 监听<div>元素
        if (navRef.current) {
          observer.observe(navRef.current);
        }
      
        // 在组件卸载时停止观察
        return () => {
          if (navRef.current) {
            observer.unobserve(navRef.current);
          }
        };
      }, [navRef]);

    
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav navRef={navRef}/>
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
                                {accessoryImages.blockOne.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={windowWidth > 1000 ? `${((windowWidth-20)/3)-20}px` : '100%'} height={windowWidth > 1000 ? img.size === 'vertical' ? `${(((windowWidth-20)/3)-20)*3/2}px` : `${(((windowWidth-20)/3)-20)*2/3}px` : `auto`} effect={windowWidth > 1000 ? 'blur' : 'opacity'} src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {accessoryImages.blockTwo.map((img,idx:any) => {
                                    return(
                                        <div className='p-10' key={idx}><LazyLoadImage width={windowWidth > 1000 ? `${((windowWidth-20)/3)-20}px` : '100%'} height={windowWidth > 1000 ? img.size === 'vertical' ? `${(((windowWidth-20)/3)-20)*3/2}px` : `${(((windowWidth-20)/3)-20)*2/3}px` : `auto`} effect={windowWidth > 1000 ? 'blur' : 'opacity'} src={require(`${img.url}`)}/></div>
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className='img-block'>
                            <div >
                                {accessoryImages.blockThree.map((img,idx:any) => {
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

export default Accessories;
