import React, { FC } from "react";
import Box from "../../components/box/Box";
import Owen from '../../assets/images/saycheese.png';
import Button from "../../components/button/Button";
import { aboutMeText, Taggable, educationHistory, workHistory } from "../../content/about/about";
import Resume from '../../content/about/Waldron_Owen_Resume.pdf';
import PageContainer from "../../components/page-container/PageContainer";

const AboutPage = () => {
    return (
        <PageContainer>
            <div className="flex flex-col gap-8">
                <Box>
                    <div className="flex justify-between gap-8">
                        <div className="flex flex-col w-full">
                            <img className="max-w-[80%] mx-auto rounded-sm mb-8 border-[3px] border-card-border-gray md:hidden block" src={Owen} alt="Me" />
                            <h1>Hello, World!</h1>
                            <Divider />
                            <p>{aboutMeText}</p>
                            <div className='flex md:flex-row flex-col gap-4 mt-4'>
                                <Button label='Download resume PDF' href={Resume} newTab/> 
                                <Button label='Contact me' variant='hollow' href="mailto:owen.waldron@uwaterloo.ca" newTab />
                            </div>
                        </div>
                        <img className="max-w-64 object-cover rounded-sm border-[3px] border-card-border-gray md:block hidden" src={Owen} alt="Me" />
                    </div>
                </Box>
                <Box>
                    <h1>Education</h1>
                    <Divider />
                    <div className="flex flex-col gap-8">
                        {educationHistory.map((educ, i) => <TagContent key={i} taggable={educ} />)}
                    </div>
                </Box>
                <Box>
                    <h1>Work Experience</h1>
                    <Divider />
                    <div className="flex flex-col gap-8">
                        {workHistory.map((work, i) => <TagContent key={i} taggable={work} />)}
                    </div>
                </Box>
            </div>
        </PageContainer>
    );
}

const Divider = () => {
    return <hr className="h-[2px] w-full bg-black border-black mt-2 mb-6" />
}

type TagContentProps = { taggable: Taggable }
const TagContent: FC<TagContentProps> = ({taggable}) => {
    return (
        <div>
            <div className="flex justify-between md:flex-row flex-col">
                <h2 className="text-xl font-bold">
                    {taggable.title}
                </h2>
                <h3 className="font-bold text-sm">
                    {taggable.date}
                </h3>
            </div>
            <h3 className="bg-owaldron-blue text-sm text-white px-2 mt-1 mb-2 rounded-xl w-fit">
                {taggable.tag}
            </h3>
            <p>
                {taggable.description}
            </p>
        </div>
    )
}

export default AboutPage;
