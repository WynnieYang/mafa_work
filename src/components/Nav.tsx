import React, { useState, useEffect, useCallback, useContext  } from 'react';
// import Grid from '@mui/material/Grid';
import '../styles/base.scss'
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";

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
    const windowHeight = window.innerHeight;
    // const [winOpen,setWinOpen] = useState<winType>({Home:{show: false, width: 0, top: 0, left: 0, right:0},Portrait:{show: false, width: 0, top: 0, left: 0, right:0}})
    const [homeWin,setHomeWin] = useState<floatWin>({show: false, width: 0, top: 0, left: 0, right:0});
    const [portraitWin,setPortraitWin] = useState<floatWin>({show: false, width: 0, top: 0, left: 0, right:0});
    const [productWin,setProductWin] = useState<floatWin>({show: false, width: 0, top: 0, left: 0, right:0});
    const [eventWin,setEventWin] = useState<floatWin>({show: false, width: 0, top: 0, left: 0, right:0});
    const [leave,setLeave] = useState(false);
    const [hover,setHover] = useState(false);
    const [show,setShow] = useState(false);


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
    const [navOpen,setNavOpen] = useState({portrait:false,products:false,event:false}) 
    
    return(
        <>
        <div className='nav-block w-100 display_center_center'><span className='text fs_30 bold black '>MAFA YANG</span></div>
        {!show && <div className='sidebar display_center_center' onClick={()=>setShow(true)}><HiBars3 className='sidebar-icon' size={50}/></div>}
        {show && <div className='sidebar-block' >
            <div className='sidebar-item'>
                <Link to={'/Home'}><span className='sidebar-text fs_20'>HOME</span></Link>
            </div>
            <div className='sidebar-item' onClick={()=>setNavOpen((prevState) => ({
                ...prevState,
                portrait:true,
                products:false,
                event:false
            }))}>
                <span className='sidebar-text fs_20'>PORTRAIT</span>
            </div>
            {navOpen.portrait && <div> 
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Beauty'}><span className='sidebar-text fs_16'>Beauty</span></Link>
                </div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Music'}><span className='sidebar-text fs_16'>Music Image</span></Link>
                </div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Creative'}><span className='sidebar-text fs_16'>Creative</span></Link>
                </div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Hair'}><span className='sidebar-text fs_16'>Hair Style</span></Link>
                </div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Family'}><span className='sidebar-text fs_16'>Family</span></Link>
                </div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Kol'}><span className='sidebar-text fs_16'>KOL</span></Link>
                </div>
            </div>}
            <div className='sidebar-item' onClick={()=>setNavOpen((prevState) => ({
                ...prevState,
                products:true,
                portrait:false,
                event:false
            }))}>
                <span className='sidebar-text fs_20'>PRODUCTS</span>
            </div>
            {navOpen.products && <div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Product'}><span className='sidebar-text fs_16'>Product</span></Link>
                </div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Food'}><span className='sidebar-text fs_16'>Food</span></Link>
                </div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Accessories'}><span className='sidebar-text fs_16'>Accessories</span></Link>
                </div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Cosmetics'}><span className='sidebar-text fs_16'>Cosmetics</span></Link>
                </div>
            </div>}
            <div className='sidebar-item' onClick={()=>setNavOpen((prevState) => ({
                ...prevState,
                products:false,
                portrait:false,
                event:true
            }))}>
                <span className='sidebar-text fs_20'>EVENT</span>
            </div>
            {navOpen.event && <div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Wedding'}><span className='sidebar-text fs_16'>Wedding</span></Link>
                </div>
                <div className='sidebar-item child'>
                    <div className='level-block'></div><Link to={'/Activity'}><span className='sidebar-text fs_16'>Activity Album</span></Link>
                </div>
            </div>}
            <div className='sidebar-item'>
                <span className='sidebar-text fs_20'>CONTACT ME</span>
            </div>
        </div>}
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