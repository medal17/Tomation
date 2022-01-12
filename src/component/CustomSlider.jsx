import Carousel from 'react-elastic-carousel'


const CustomSlider =({...children})=>{

    console.log(children.children)
    return (

        <Carousel 
        className="carousel-courses"
        // itemsToShow={3}
        infiniteLoop={true}
        enableAutoPlay autoPlaySpeed={2000} showArrows={false}
        // style={{border:'1px solid red'}}
        pagination ={true}
        // style={{}}
        breakPoints={[
            {'width':460,itemsToShow:1},
            // {'width':500,itemsToShow:2},
            {'width':700,itemsToShow:3},

            
        ]}
        >
            
        {
            [...children.children]
        }
         

         </ Carousel >
    )
}

export default CustomSlider