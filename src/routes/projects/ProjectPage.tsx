import React, { FC } from "react";
import PageContainer from "../../components/page-container/PageContainer";
import projects, { Project } from '../../content/projects/projects';
import Box from "../../components/box/Box";
import styles from './ProjectPage.module.css';
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
    return (
        <PageContainer>
            <main className="flex gap-8 md:flex-row flex-col flex-wrap items-center">
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
            className={'md:w-[31%] md:h-[23rem] cursor-pointer ' + styles['proj-card']} 
            manualPadding
        >
            <div className="w-full h-full p-4">
                <img className="border-card-border border-2 mb-2 w-full h-[60%] object-cover" src={project.images[0]} alt="" />
                <h2 className="text-3xl max-h-[10%] mb-2">{project.name}</h2>
                <p className="h-[30%] text-[0.95rem]" >{project.tldr}</p>
            </div>
        </Box>
    )
}

export default ProjectPage;
