import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';
import firebase from '../../firebase/firebase';

const Home: React.FC<any> = () => {
    const [imgShow,setImageShow] = useState(false);
    const [trianglevanish,setTriangleVanish] = useState(false);
    useEffect(()=>{
        setTimeout(function() {
            setImageShow(true)
          }, 1200);
          setTimeout(function() {
            setTriangleVanish(true)
          }, 1500);
    },[])
    const [isHover,setIsHover] = useState({show: false, width: 0, top: 0, left: 0, right:0},)
    
    const saveImg = () => {
        
    }
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column h-100'>
                    <Nav/>
                    {/* <div className='content w-100 flex flex-row display_start_center'>
                        <div className={`${trianglevanish ? '' : 'triangle'}`} style={{position:'absolute',left:'45%',top:'40%'}}></div>
                        <div className='h-100'><img className={`w-100 ${imgShow ? 'img-opacity' : 'opacity-0'}`} src={require("./images/IMG_0515.jpg")}></img></div>
                    </div> */}
                    <div className='content w-100 flex flex-row display_start_center' style={{flexGrow:'1'}}>
                        <div className='triangle'></div>
                        {/* <div className={`triangle`} style={{position:'absolute',left:'41%',top:'38%'}}></div>
                        <div className='h-100'><img className={`w-100 img-opacity`} src={require("./images/IMG_0515.jpg")}></img></div> */}
                        {/* <div className='triangle-image'><img className={`w-100 img-opacity`} src={require("./images/IMG_0515.jpg")}></img></div> */}

                        {/* <div className='window-mask'></div> */}
                    </div>
                </div>
                
            </Grid>
        </Grid>
    )
}

export default Home;