import React, { useState, useEffect, useCallback, useContext  } from 'react';
// import Grid from '@mui/material/Grid';
import '../styles/base.scss'
import { Link } from 'react-router-dom';

interface winType {
    [key:string]:floatWin;
}

interface floatWin {
    show:boolean;
    width:number;
    top:number;
    left:number;
    right:number;
}

const Nav: React.FC<any> = () => {

    // const [winOpen,setWinOpen] = useState<winType>({Home:{show: false, width: 0, top: 0, left: 0, right:0},Portrait:{show: false, width: 0, top: 0, left: 0, right:0}})
    const [homeWin,setHomeWin] = useState<floatWin>({show: false, width: 0, top: 0, left: 0, right:0});
    const [portraitWin,setPortraitWin] = useState<floatWin>({show: false, width: 0, top: 0, left: 0, right:0});
    const [productWin,setProductWin] = useState<floatWin>({show: false, width: 0, top: 0, left: 0, right:0});
    const [eventWin,setEventWin] = useState<floatWin>({show: false, width: 0, top: 0, left: 0, right:0});
    const [leave,setLeave] = useState(false);
    const [hover,setHover] = useState(false);


    function share_setFloatWindowOptions(ele:any, pos?:string) { 
        console.log(ele)
        if(ele === null) return;
        const DOMRect = ele.getBoundingClientRect();
        let obj:any = {
            width : DOMRect.width <= 60 ? 200 : DOMRect.width,
            top : pos === 'bottom' ? window.innerHeight - DOMRect.top + 5 :  DOMRect.top + DOMRect.height + 5,
            left : DOMRect.left ,
            right: DOMRect.right,
            show : true,
        }
        return obj
      };
    const share_resetFloatWindowOptions = () => { 
        let obj:any = {
            width :0,
            top : 0,
            left : 0,
            right: 0,
            show : false,
        }
        return obj
    }

    const hoverStatus = (from:string) => {
        if(from === 'portrait') {
            setTimeout(()=>{
                setPortraitWin(share_resetFloatWindowOptions())

            },500)
        }
        
    }

    const mouseLeave = (from:string) => {
        setHover(false);
        if(from === 'portrait') {
            setPortraitWin(share_resetFloatWindowOptions())
        }
        if(from === 'product') {
            setProductWin(share_resetFloatWindowOptions())
        }
        if(from === 'event') {
            setEventWin(share_resetFloatWindowOptions())
        }

    }

    useEffect(()=>{
        console.log('hey')
        if(!hover && leave) {
            console.log(
                'hi'
            )
            setPortraitWin(share_resetFloatWindowOptions());
            setProductWin(share_resetFloatWindowOptions());
            setEventWin(share_resetFloatWindowOptions());
        }
    },[hover,leave])

    const mouseEnter = (from:string,e:any) => {
        setLeave(false);
        if(from === 'portrait') {
            setPortraitWin(share_setFloatWindowOptions(e.currentTarget))
        }
        if(from === 'product') {
            setProductWin(share_setFloatWindowOptions(e.currentTarget))
        }
        if(from === 'event') {
            setEventWin(share_setFloatWindowOptions(e.currentTarget))
        }
    }
    const pageMouseLeave = () => {
        setTimeout(()=>{
            setLeave(true);

        },200)
    }    
    
    return(
        <>
        <div className='nav-block w-100 display_center_center'><span className='text fs_30 bold black '>MAFA YANG</span></div>
        <div className='w-100 display_center_center flex flex-row'>
            <Link to="/Home" className='nav-item display_center_center cursor_flag cursor_pointer' ><span className='text fs_20 black '>HOME</span></Link>
            <div className='nav-item display_center_center cursor_flag cursor_pointer' onMouseEnter={(e)=>{mouseEnter('portrait',e)}} onMouseLeave={pageMouseLeave}><span className='text fs_20 black '>PORTRAIT</span></div>
            <div className='nav-item display_center_center cursor_flag cursor_pointer' onMouseEnter={(e)=>{mouseEnter('product',e)}} onMouseLeave={pageMouseLeave} ><span className='text fs_20 black '>PRODUCT</span></div>
            <div className='nav-item display_center_center cursor_flag cursor_pointer' onMouseEnter={(e)=>{mouseEnter('event',e)}} onMouseLeave={pageMouseLeave} ><span className='text fs_20 black '>EVENT</span></div>
            <div className='nav-item display_center_center cursor_flag cursor_pointer'><span className='text fs_20 black '>CONTACT ME</span></div>

        </div>
        
        {portraitWin.show && <div className={`float-window-wrapper cursor_flag cursor_pointer float-window-options-open`} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{mouseLeave('portrait')}}> 
            <div className="float-window-field"
                style={{"minWidth":`${portraitWin.width}px`,"top": `${portraitWin.top}px`, "left": `${portraitWin.left}px`}} >
                <div className='float-window-options-content'>

                <Link to={'/Beauty'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Beauty</span></div>
                </Link>
                <Link to={'/Music'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Music Image</span></div>
                </Link>
                <Link to={'/Creative'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Creative</span></div>
                </Link>
                <Link to={'/Hair'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Hair Style</span></div>
                </Link>
                <Link to={'/Family'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Family</span></div>
                </Link>
                <Link to={'/Kol'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">KOL</span></div>
                </Link>
                    
                </div>
            </div>
            <div className="window-mask white" ></div>
        </div> }
        {productWin.show && <div className={`float-window-wrapper cursor_flag cursor_pointer float-window-options-open`} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{mouseLeave('product')}}> 
            <div className="float-window-field"
                style={{"minWidth":`${productWin.width}px`,"top": `${productWin.top}px`, "left": `${productWin.left}px`}} >
                <div className='float-window-options-content'>

                <Link to={'/Product'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Product</span></div>
                </Link>
                <Link to={'/Food'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Food</span></div>
                </Link>
                <Link to={'/Accessories'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Accessories</span></div>
                </Link>
                <Link to={'/Cosmetics'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Cosmetics</span></div>
                </Link>
                    
                </div>
            </div>
            <div className="window-mask white" ></div>
        </div> }
        {eventWin.show && <div className={`float-window-wrapper cursor_flag cursor_pointer float-window-options-open`} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{mouseLeave('event')}}> 
            <div className="float-window-field"
                style={{"minWidth":`${eventWin.width}px`,"top": `${eventWin.top}px`, "left": `${eventWin.left}px`}} >
                <div className='float-window-options-content'>

                <Link to={'/Wedding'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Wedding</span></div>
                </Link>
                <Link to={'/Activity'} className={`float-window-block display_center_start`} >
                    <div className="float-text display_center_start"><span className="color-black fs_16">Activity Album</span></div>
                </Link>
                    
                </div>
            </div>
            <div className="window-mask white" ></div>
        </div> }
        </>
    )
}

export default Nav;