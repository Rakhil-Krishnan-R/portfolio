import { Box, Card, Typography } from '@mui/material';
import React from 'react'
import './App.scss';

const basicInfo = [

  { key: 'greetings', content: "Hello I'm", variant: 'h3' },
  { key: 'name', content: 'Rakhil Krishnan R', variant: 'h2' },
  { key: 'title', content: "Full Stack Developer", color: 'red', variant: 'h4' },
  {
    key: 'desc',
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio vero, ipsam libero sequi et ducimus velit commodi doloribus illum soluta. Atque aspernatur hic modi blanditiis excepturi natus et animi nihil.  ",
    variant: 'h6'
  }

]

const styles = {
  infoBox: { display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', textAlign: { lg: 'left', xs: 'center' } }
}

const skills = [
  { key: 'html5', content: "HTML5", imgSrc: 'img/skills/html5.svg' },
  { key: 'css3', content: "CSS3", imgSrc: 'img/skills/css3.svg' },
  { key: 'js', content: "JavaScript", imgSrc: 'img/skills/js.svg' },
  { key: 'mongodb', content: "Mongod-DB", imgSrc: 'img/skills/mongodb.svg' },
  { key: 'react', content: "React JS", imgSrc: 'img/skills/react.svg' },
  { key: 'nodejs', content: "Node JS", imgSrc: 'img/skills/nodejs.svg' },
  { key: 'responsive', content: "Responsive", imgSrc: 'img/skills/responsive.svg' },
  { key: 'git', content: "Git", imgSrc: 'img/skills/git.svg' },
  { key: 'scss', content: "SCSS", imgSrc: 'img/skills/scss.svg' },
]

export const App = () => {
  return (
    <Box>
      <Box className="container" sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, paddingX: { xs: 1, lg: 20 } }}>
        <Box sx={[styles.infoBox, { order: { lg: 1, xs: 2 }, width: { lg: '50%', xs: '100%' }, }]}>
          {
            basicInfo.map((item) => {
              return <Typography color={item?.color} variant={item?.variant} key={item.key}>{item.content}</Typography>
            })
          }
        </Box>
        <Box sx={[styles.infoBox, { position: 'relative', order: { lg: 2, xs: 1 }, width: { lg: '50%', xs: '100%' }, marginX: 'auto', alignItems: 'center' }]}>
          <img src='img/avatar.pmg' alt='avatar' style={{ borderRadius: 10, width: '40%' }} />
        </Box>
      </Box>

      {/* Skills */}
      <Box className="container" >
        <Typography variant='h4' textAlign='center'>My Skills</Typography>
        <br />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginX: 'auto', width: '70%' }}>
          {
            skills.map((skill) => {
              return <Card sx={{ display: 'flex', flexDirection: 'column', width: '20%', alignItems: 'center', padding: '20px' }}>
                <img src={skill.imgSrc} alt='img' style={{ width: '100px', height: '100px' }} />
                <br />
                <Typography variant='h6' textAlign='center'>{skill.content}</Typography>
              </Card>
            })
          }
        </Box>
      </Box>


      {/* About Me */}

      {/* <Box className="container" >
        <Box>
        <Typography variant='p'>
            Hello, my name is Rakhil Krishnan R and I'm a Full Stack Developer with 2 years of experience. I specialize in the MERN stack, including MongoDB, Express, React, and Node.js, and I have experience working on various web development projects, both as a freelancer and in team environments.
          </Typography>
          <Typography variant='p'>
            My passion for web development began during my college years, and I have since honed my skills and expertise through continuous learning and practice. As a developer, I take pride in creating clean, efficient, and user-friendly applications that exceed my clients' expectations.
          </Typography>
          <Typography variant='p'>
            In addition to my technical skills, I am a highly communicative and collaborative team player who thrives in fast-paced environments. I enjoy working with clients and stakeholders to understand their needs and goals, and I'm always willing to go the extra mile to deliver exceptional results.
          </Typography>
          <Typography variant='p'>
            When I'm not coding, I enjoy exploring new technologies and attending meetups to expand my knowledge and skills. I am always eager to learn and grow as a developer, and I'm committed to staying up-to-date with the latest trends and best practices in the industry.
          </Typography>
          <Typography variant='p'>
            Thank you for taking the time to visit my portfolio website, and I look forward to the opportunity to work with you on your next project.
          </Typography>
        </Box>
        <Box>
          <img src='img/avatar.png' alt='avatar' style={{ borderRadius: 10 }} />
        </Box>
      </Box> */}


     
    </Box>
  )
}
