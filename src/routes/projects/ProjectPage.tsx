import React, { FC } from "react";
import PageContainer from "../../components/page-container/PageContainer";
import projects, { Project } from '../../content/projects/projects';
import Box from "../../components/box/Box";
import styles from './ProjectPage.module.css';
import { useAsyncError, useNavigate } from "react-router-dom";

const ProjectPage = () => {
    return (
        <PageContainer>
            <main className="flex gap-8 md:flex-row flex-col flex-wrap items-center mb-24">
                {projects.map((proj, i) => <ProjectCard key={i} project={proj} />)}
            </main>
        </PageContainer>
    )
}

type ProjCardProps = { project: Project }

const ProjectCard: FC<ProjCardProps> = ({ project }) => {
    const navigate = useNavigate();

    return (
        <Box 
            onClick={() => navigate('/projects/' + project.url)}
            className={'p-6 md:w-[31%] md:h-[27rem] cursor-pointer ' + styles['proj-card']} 
            manualPadding
        >
            <img className="rounded-sm border-black border-4 mb-4 w-full h-[50%] object-cover" src={project.images[0]} alt="" />
            <h2 className="text-xl font-bold pb-1 max-h-[10%]">{project.name}</h2>
            <p className="h-[28%] text-[0.95rem]" >{project.tldr}</p>
            <div className="flex text-white font-bold mt-2 gap-1 h-[8%]">
                {project.tags.map((tag, i) => {
                    return (
                        <h3 className="p-1 px-[0.7rem] bg-owaldron-blue rounded-2xl" key={i} >
                            {tag}
                        </h3>
                    )
                })}
            </div>
        </Box>
    )
}

export default ProjectPage;
