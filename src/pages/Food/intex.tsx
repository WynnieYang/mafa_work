import React, { useState, useEffect, useCallback, useContext  } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import '../../styles/base.scss';
import Nav from '../../components/Nav';

const Food: React.FC<any> = () => {
    return(
        <Grid container spacing={0} className='portal-layout'>
            <Grid item xs={12} md={12}>
                <div className='flex flex-column'>
                    <Nav/>
                    <div className='content w-100 flex flex-row display_start_center pl-10 pr-10'>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src='https://uc8195c17aee4dc6f3933441400f.previews.dropboxusercontent.com/p/thumb/AB4Z1ozEKhy7lVnIsUrRGKpTQb_qev3V4INhG_l3CqrFd9XHKJ7CIk-EOcvQyblLaVNKzahozsiQlZIVD2gckonSZF8BfqUdyRdMgQFmz_YA-fC2q7KDRZGxiDPmwzAcDkiJp5Vc5Z0gaZnjnsSadWkcnMZTHKpXFmANTaI-qAc29DOR_bnFci_y_Dr92h0o0QN3qmZrd0kEAWgvaUCz6Tpya9dTmsXiUGiSgSmHj491if7FmALFM7-j5q7OhW7m9cJFtg1xryLJUd53JVIfpY_zWYtGMHkTx3J-KyByxwGgOdO6r93OjTjSvJWgKfhv1CPKp3zA5qgNcK0Cyl2legtxW5ZiyKiD0QUh-Zrp_5LbpAU7E_NOhvRMOZQS2rRnBnYPORrHIYgPBxf4TuNiXkvzC44imHijkQIU0xCPEIIK6we1lIJ9HsxOc5HHoebhhC5d8Q4IMgfAPAMVeM6q3_pWp8edt1hce947EGDe2ew-Sf8leEntltlGiNoafwyVyW1HTDsWdUihv8YHaPMauYixiwcZ3kcKM2_SapLLcBchO99bPGqCj05fMZDmHNScSnU/p.jpeg'/></div></div>
                            <div ><div className='p-10'><img className='w-100' src='https://ucb7ff5f82f4f584e8cc22c4d1df.previews.dropboxusercontent.com/p/thumb/AB6RUShWcb62T6dfxhCn1jn-StRnfXeOPkIaWaurOU0ylSBs58LBYM2YzH3s-N8V8JumQw_4i8oQdLraxFgYX46Ogvmun499oFpR1cZ0oHa_FerxYs9ZGau2FTusrc800B8XwX40fB5vxOFVWS1wF-kms25hqPaxWUUS9wLzcJvSos3JvFmXHMCDmJRCoxru8E8k9-J10odUTlVuOyROFTmhe4tqRgXs6xmXzUYaAGYNuWN7T1wT2hX1OjZAJ7r5knAhBMJ962-DZ6S8kzGjG9uMCbgIrX_MxRNvD9ZkCRk0FHCQ3hdUCTNOdXsdC7hJhsoGVhjMYqTeQjj21GnrYkzZi2wY-hLwlwLRzvLT-aEsWZEd9iVe-AoAuMigQ2ifLNrPzdEosoC-pcQirhA3XaEYs6djpOkXDccSvSp0EGgbPyLSYS7vI09xxbW1y3pc7BgVyKPjYCZBunNGPTRC7HMs/p.jpeg'/></div></div>
                            <div ><div className='p-10'><img className='w-100' src='https://ucdca720dfe8117b93a95bcce391.previews.dropboxusercontent.com/p/thumb/AB6P7RrAdiznOjH-m3fW-tH_2Z2QH7jdEohHA16VQLoSmQeUrkqhVH2G5ZP1Ozik3y-lHSj1VW-DqZiQhLpGVrkSrg0_Y1dN1VZJ7n_vdsIIy8oy1maVKH-ESkAsioyVLr8VE5zPb5WtYOrQe_QhkYnoIunII8pc22M0FlblPzR4WQLB14YDz3eoZHlg_IYEIWABDSqGWthO2DbSYtc3cnboBcoQu8oDTlqjEcOj6NKaIpojLBdOLps6zvgbYBDTfETmI1M5eFSn2So9g5xUH3gaEKTZzQlugAbYMouf0hAmCZ96hsaQVyQqHdhu11IkmaTkIbTfiA0QEhwS2y29Fld2Ge8sXZBrdETe7Iz5UmRlP6jsXGZU57F4eIXnS-lzxAdc8FTT9HCCAUk5UQApZn3SXSS5zRPMAhUJewmXzS2AsKt3DkcgPXTBni31uPNFlk8aQX_evm-QAkugaobrIo50NPduqGFGWi5AtnkBJFXAHMSwZB3AcKlzWqfoEz59RJg/p.jpeg'/></div></div>
                        </div>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src='https://uc98065c0ca2636c80117757211f.previews.dropboxusercontent.com/p/thumb/AB7CprK7qGcDBryou9YAcpbh5uVzESee9mSxq9rukwfPS_rG_CFLai3Qth1UC7pU_34kmJaHVU6cMwMkeb5tSNF8pguzyXzbsfWBseSz7KXYHtOASdX3AEmzISytna6SY3ZsTOf-y_rqenz5W3XW_YyOwaisRfyhdXVEFREjP7pE80oj9YSHUSANNbr3yb4gkAARA83ERGFnKKkUtImHoiQ0wLpo7LwOFI2M6q8Z4aNHku6EwNZj-T2kGgIbCU45zxvVswCLfvTUD2nyO16Z-sK3SRUn5lNcW44BfRx4tRQclV27z2Jx-nox5fHqvmwy7ncd6VHgCv7IU9O_nGKCtpIm4wEqXkRVe3PDr7kRMac4_-_Fw4LBXCvo3N2_ACyKgHMpfQhEY7P19lqvSlQqoyOxUDqP00-aubGYODfsOFIJWS2Ziu3lk8dA1shbMyhnbbQTAxFyD-2h9T3AutP_PDVKlpNvu2wFgu1yerkTkv0GYnezXcFEY_PimOakcRLJaBk/p.jpeg'/></div></div>
                            <div ><div className='p-10'><img className='w-100' src='https://uc27cbf0c0640a91a4da67a541ae.previews.dropboxusercontent.com/p/thumb/AB4X7gU0FSciDLN-2TxRnfCts-upFDX3jBPsBLyOFwZCgzcrzs9GoSi5D1A3gsgWzXCCxr0kaqwEASHw8rJOLcAGZqDqcT_ZN9YpRL-JpVcstqahzEKtFa8pe-ruvqfmrc3-mxLCQ_4pD9udSlkKmQfz7IuB1hhDKntnwziitN77ERZCzYsq0tZLtvw6o72i7E2Uw-6Y8PyYVHFF42M5LgL7SjSA1aD_ngXcKrbq34pmmpuwiHbHITTG7cSMPJKh8ed3io7y8oExB0nuIn0dUcN_3iXZ4vbVgy0K8U3T_PUHHRWSWn6dlssVagbvV0LrfBpn71UqiDgoaBpQKCjX5vW6s5Pa4aH25CEAEvywGHC-DqP4csjGF9e9EasY8IUWR-RPziJKJ-J0Hx5024N15rSq_BDYGFc86-GWx69VLJJYx5umrEhO-rQFiSTMK5dBOaFFge4PksI-tWJBqmtSMCR2/p.jpeg'/></div></div>
                            <div ><div className='p-10'><img className='w-100' src='https://uc32aa2877eaa8864bb86bb57020.previews.dropboxusercontent.com/p/thumb/AB67ywUYJPIKnZOtE0-kgutQZEGBFrdf0zj-lv8D52KpyAz_1aWpY-ao6gfTEfPNXrmhzTRaBzLwjYrBi5_mZF1r2De0siGHnDDeM0CMaPJARnt0QkU1CYIBMBCB-RRM7Oht8soTA2-ebzbQOFlod2ENloifo_I9xTHE7yXLFyyAeYWdCq8Fd6r_ncpiHxboFH8YoDewthNOThwWwHbhyjIlxdqQZTsblJZQUeSXl6BGLWNVEaNdY0YbdGkxf4i-Ndz8Mx1bLEqim2XzcPr5eA7rIATNm0knm6hDEEvwwDoz3QL88sJi1G0uUf4fFWcwXm43wS2sE93QVrgs3qRR8WcdjWwKon0U4bNctnMgUK8vURaDlklQvJ_tGQnVKM4NbupvF7hlRzsqOf4EMusjn55XzKnJW8oHGQePs3Bsh_hGzivHQreNNIQ4yECHOrvrcEG9Px63rqtRSey0oJyjeJgz/p.jpeg'/></div></div>
                        </div>
                        <div className='flex flex-column w-40per'>
                            <div ><div className='p-10'><img className='w-100' src='https://uc89820678b531ff0b6920de8501.previews.dropboxusercontent.com/p/thumb/AB6FO2wiIPfR9wbsj8NUUM_c5MFH7LLQ7YerLX2n9GYlYpRzguvQWBpr-kowN7CttDbKbBbzE8XE_SXEo50Li15M1o1Cnbjw5gEvSqC4SAGOdsUyqbWGgc220J3FIyKpLDh9yXT8eGYvGLs1JjaOVygpjyALJbueZ2fQrJI4ZYT5_bKr420eMJLH9yPn8G4paYrHqeNXNX9Q41y6UBXnZOD18jfxeGp7aguYV2TbcewsGOMjfLqXt6nxLrAme1dWmtQB3mtVqwsYpTPjStEsGj5sEhve5DAmCQjj8Yf6Q8jM98pkARrLzEUJCF4_YueQqwO0OF2e2fD11ohEpd9RJ-mjo0pimJ4Gm8LCn7-vmxoByyuEoUfKbdwNb79htRRhl13s9x2svwbAlWQ2Oc44l4HI181HWLAZ08TVTBw-GQg35mpBsYFzjrkaPUfPCNtCqZmuyZSyFZgRvDl2x0OD7jON/p.jpeg'/></div></div>
                            <div ><div className='p-10'><img className='w-100' src='https://uc4365391e1d283c71a33c92d857.previews.dropboxusercontent.com/p/thumb/AB6mhJzLbRao7Gjlk5Da19vFNIgR1IOqafuwm-AJomkumUYlYdvPQ9_2BKjGiRwco8AqPYTpxaP_vcyNWjVyanJmtfbXrr6GJq2inaWQW8b8KwXccMkh8U6KaTtyXs64ztY-p1PhU-GrnbJwdRZCWO30SW4j0mx-Tjn2ozJxv8aKoFFVGfxD-uuWRrtL6bQI1kBOnDLH2j7HOVgOQpn13jvNhJJJZJTWX9ukl2e-JkgzowAwi55lceggaoulhO8rF9VpdpY-kiteJU3DH9NkoYKzReRhbu7anhJnm-ILvzae74dXQ1NiNGOAFD_un0DetbSmFgNcEDkms30n8nb-AbniAOJsISioNdD4CLwfeJQLCWwgpZ4ta_sLMvXAx3hwVajFv6Lfg6OWdVVSNkJ7UzTufAstnHF-6epEg9aDPht_09Z_hTlLFCnmexcmxcl35S6GjKnIc_XH6I4thZTN_-CR/p.jpeg'/></div></div>
                            <div ><div className='p-10'><img className='w-100' src='https://uc7e8f5ad74b32fcf8aa3e045649.previews.dropboxusercontent.com/p/thumb/AB7pUmzlFnIVYpDSFLkCgS6xyxh4LnTJtpzJpkW-0RICOlS7lZBA6RgsSXPtkdO0e-FTcoNjpyBzcUTYcAtjb2ATp66rzgGWfQWHLBI-X1BWGJHnLNgvpUGHnH5B09-eksE6iL9QtnAqYe4AvJzYpH9NsBfMqSK0kmXvOK_I12Mt3-uDkRMnMW-mbXEaaOP99UBLh_bSjbzFtKpCQ_u4QQE-u0smwiHXFfxH6y1atS6ehcVoZBf_JsoiH2hdOLZJ0hfHx7SM71unUuy7_fU51A_ABW-E3FKjj15x7U8kPiojzigj2kACZwdEv50ypGDALQEUWH_saHsoFFLHrKgzzsf8GsQV6w1fm_aNhmeO8TUOQOdPGbTt3AqeRMCWgpgqDFtJ_OBaWdJ2J8NMA8-BuX05rzhWSdXc8Wh1c3gDLyPmYZHo4EXaSIpuwfZqwflAEQtHj2Kvqm3cdz5TRrb0L43R/p.jpeg'/></div></div>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Food;
