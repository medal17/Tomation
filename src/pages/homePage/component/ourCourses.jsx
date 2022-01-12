import userImage from '../../../assets/images/xauthor-1.jpg.pagespeed.ic.gWpEzQ4x3B.jpg'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'

import CustomSlider from '../../../component/CustomSlider'
import { setMessage } from '../../../redux/actions/messageAction'
import { getAllCourses } from '../../../redux/actions/courseAction'
import { useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import IntroToCardList from '../../../component/IntroToCardList'

const OurCourses =()=>{
    const { courses } = useSelector(state=>state.courses)

    const dispatch = useDispatch();
    const [isLoading,setIsloading] =useState(true)


    useEffect(()=>{
        // Note this is a Async CallBack
        dispatch(getAllCourses())
        .then(response=>{
            setIsloading(false)
            console.log(courses,"from slider")
        })
        
    
    },[])



    return (

        

        <IntroToCardList isSchoolDetail={false} contentList={!isLoading?courses:[]} />

    )
}

export default OurCourses





// styled.div`

// `