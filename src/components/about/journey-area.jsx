import React, {useState, useEffect} from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider setting
const setting = {
    loop: true, 
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    }, 
      scrollbar: {
        el: ".tp-scrollbar",
        clickable: true,
    },
  }
// journey_data
  const journey_data =[
    {
        id: "01", 
        date: "MAR 2018",
        title: <>The Idea <br /> Takes Root</>,
        description: <>Our founders set out to build communication <br />
        software rooted in transparency and <br /> trust.</>,
    },
    {
        id: "02", 
        date: "SEP 2019",
        title: <>First <br /> Prototype</>,
        description: <>We launched our first encrypted messaging <br />
        prototype to a small beta community of <br /> early adopters.</>,
    },
    {
        id: "03", 
        date: "JUN 2020",
        title: <>Public <br /> Launch</>,
        description: <>Troth Communication went public with <br />
        a mission to redefine trust in digital <br /> communication.</>,
    },
    {
        id: '04', 
        date: "DEC 2021",
        title: <>10,000 <br /> Users</>,
        description: <>We crossed 10,000 active users across <br />
        40+ countries — a milestone built on <br /> word of trust.</>,
    },
    {
        id: "05", 
        date: "Present",
        title: <>Global <br /> Scale</>,
        description: <>Today Troth Communication powers <br />
        enterprise communication for thousands <br /> of teams worldwide.</>,
    },
    {
        id: "06", 
        date: "SEP 2019",
        title: <>First <br /> Prototype</>,
        description: <>We launched our first encrypted messaging <br />
        prototype to a small beta community of <br /> early adopters.</>,
    },
    {
      id: "07", 
      date: "JUN 2020",
      title: <>Public <br /> Launch</>,
      description: <>Troth Communication went public with <br />
      a mission to redefine trust in digital <br /> communication.</>,
  },
  {
      id: '08', 
      date: "DEC 2021",
      title: <>10,000 <br /> Users</>,
      description: <>We crossed 10,000 active users across <br />
      40+ countries — a milestone built on <br /> word of trust.</>,
  },
  {
      id: "09", 
      date: "Present",
      title: <>Global <br /> Scale</>,
      description: <>Today Troth Communication powers <br />
      enterprise communication for thousands <br /> of teams worldwide.</>,
  },
  {
      id: "10", 
      date: "SEP 2019",
      title: <>First <br /> Prototype</>,
      description: <>We launched our first encrypted messaging <br />
      prototype to a small beta community of <br /> early adopters.</>,
  },
  {
    id: "11", 
    date: "MAR 2018",
    title: <>The Idea <br /> Takes Root</>,
    description: <>Our founders set out to build communication <br />
    software rooted in transparency and <br /> trust.</>,
  },
  {
      id: "12", 
      date: "SEP 2019",
      title: <>First <br /> Prototype</>,
      description: <>We launched our first encrypted messaging <br />
      prototype to a small beta community of <br /> early adopters.</>,
  },
  {
    id: "13", 
    date: "JUN 2020",
    title: <>Public <br /> Launch</>,
    description: <>Troth Communication went public with <br />
    a mission to redefine trust in digital <br /> communication.</>,
  },
  {
    id: '14', 
    date: "DEC 2021",
    title: <>10,000 <br /> Users</>,
    description: <>We crossed 10,000 active users across <br />
    40+ countries — a milestone built on <br /> word of trust.</>,
  },
  {
    id: "15", 
    date: "Present",
    title: <>Global <br /> Scale</>,
    description: <>Today Troth Communication powers <br />
    enterprise communication for thousands <br /> of teams worldwide.</>,
  },
  {
    id: "16", 
    date: "SEP 2019",
    title: <>First <br /> Prototype</>,
    description: <>We launched our first encrypted messaging <br />
    prototype to a small beta community of <br /> early adopters.</>,
  },
  ]

const JourneyArea = () => {

  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
     setIsDragged(true);
  };

  const handleTransitionEnd = () => {
     setIsDragged(false);
  };

    return (
      <>
        <div className="journey-area p-relative fix">
          <div className="journey-grey-bg grey-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="journey-section-box">
                  <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                  <h3 className="ab-brand-title pb-0 mb-0">
                    Our Journey
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="journey-slider-wrapper">
                  <Swiper
                    {...setting}
                    onSliderMove={handleSlideChange}
                    onTransitionEnd={handleTransitionEnd}
                    modules={[Navigation, Scrollbar]}
                    className={`swiper-container journey-slider-active ${isDragged ? "dragged" : ""}`}
                  >
                    {journey_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                        className="journey-slider-item p-relative"
                      > 
                        <div className="journey-stroke-text">
                          <h2>{item.id}</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>{item.date}</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="tp-scrollbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default JourneyArea;