
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { curriculum } from "@/lib/curriculum/data";
import Link from "next/link";
import React from "react";
import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";
import MotionDiv from "@/components/motion-div";


const cardCss = `sm:p-4 p-2 bg-gray-200 rounded-sm`;

const ProfileCard = () => {
    const currentDate = new TZDate(Date.now(), 'America/Mexico_City');
    const timeFormated = format(currentDate, 'HH:mm:ss');
    const skillsMap = new Map(curriculum.skills.map(skill => [skill.id, skill]));
    const renderSkills = (skillsUsed: number[]) => {
        const sortedSkills = skillsUsed
            .map(id => skillsMap.get(id))
            .filter(skill => skill)
            .sort((a, b) => (b?.popularity || 0) - (a?.popularity || 0));

        return sortedSkills.map(skill => (
            <Badge key={skill?.id} className="bg-brand-blue-100 text-brand-blue-800 hover:text-blue-100">
                {skill?.name}
            </Badge>
        ));
    };

    return (
        <MotionDiv className="w-full max-w-3xl flex flex-col gap-2">
            <MotionDiv className={`flex justify-between items-center mb-2 ${cardCss}`}>
                <h1 className="text-xl font-bold">{curriculum.professionalPosition}</h1>
                <Link href={'/contact'} className="bg-brand-blue-800  font-semibold px-4 py-2 rounded-md hover:bg-brand-blue-700">
                    Hire me
                </Link>
            </MotionDiv>
            <MotionDiv className={`flex items-start space-x-4 ${cardCss}`}>
                <Avatar className="rounded-md">
                    <AvatarImage
                        src="https://github.com/BarreraSlzr.png" alt="@BarreraSlzr" />
                    <AvatarFallback>EB</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-gray-700 font-medium">Name</p>
                    <p className="text-black">{curriculum.contactInfo.fullname}</p>
                </div>
            </MotionDiv>
            <MotionDiv  className={cardCss}>
                <p className="text-gray-700 font-medium">About</p>
                <p className="text-black">{curriculum.contactInfo.bio}</p>
            </MotionDiv>
            <Tabs defaultValue="expertise">
                <TabsList>
                    <TabsTrigger className="data-[state=active]:bg-brand-blue-200" value="expertise">Job Expertise</TabsTrigger>
                    <TabsTrigger className="data-[state=active]:bg-brand-blue-200" value="skills">Skills</TabsTrigger>
                    <TabsTrigger className="data-[state=active]:bg-brand-blue-200" value="projects">Projects</TabsTrigger>
                    <TabsTrigger className="data-[state=active]:bg-brand-blue-200" value="me">More</TabsTrigger>
                </TabsList>
                <TabsContent value="me">
                    <div className="grid grid-cols-2 gap-2">
                        <div className={cardCss}>
                            <p className="text-gray-700 font-medium">Height</p>
                            <p className="text-black">180 cm</p>
                        </div>
                        <div className={cardCss}>
                            <p className="text-gray-700 font-medium">Sex</p>
                            <p className="text-black">Male</p>
                        </div>
                        <div className={cardCss}>
                            <p className="text-gray-700 font-medium">Nationality</p>
                            <p className="text-black">Mexican</p>
                        </div>
                        <div className={cardCss}>
                            <p className="text-gray-700 font-medium">Location</p>
                            <p className="text-black">Worlwide - Remote</p>
                        </div>
                        <div className={cardCss}>
                            <p className="text-gray-700 font-medium">Local Time</p>
                            <p className="text-black">{timeFormated}</p>
                        </div>
                        <div className={cardCss}>
                            <p className="text-gray-700 font-medium">Contact</p>
                            <Link title="Send email" href={`mailto:${curriculum.contactInfo.email}`} className="flex space-x-2">
                                {curriculum.contactInfo.email}
                                <ArrowUpRight className="size-4" />
                            </Link>
                        </div>
                        <div className={cardCss}>
                            <p className="text-gray-700 font-medium">Availability</p>
                            <div className="flex gap-2 items-center">
                                <span className="relative flex h-3 w-3">
                                    <span className={
                                        "bg-green-500 animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"}>
                                    </span>
                                    <span className={
                                        "bg-green-500 relative inline-flex rounded-full h-3 w-3"}>
                                    </span>
                                </span>
                                <p className="text-black">Open for projects</p>
                            </div>
                        </div>

                    </div>
                </TabsContent>
                <TabsContent value="expertise" className="flex flex-col gap-2">
                    <div className={cardCss}>
                        <p className="text-gray-700 font-medium">Job Experiences</p>
                    </div>
                    {curriculum.jobExperiences.map((job, index) => (
                        <div key={`expertise-${index}`} className={cardCss}>
                            <div className="flex flex-row flex-wrap justify-between">
                                <p className="font-medium">{job.title} | {job.razonSocial}</p>
                                <Badge variant={'outline'} className="text-gray-700 hover:bg-gray-300 text-sm font-semibold mr-2 px-2.5 py-0.5">
                                    {job.startDate} - {job.endDate || "Present"}
                                </Badge>
                            </div>
                            <p className="text-black">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </TabsContent>
                <TabsContent value="skills" className="flex flex-col gap-2">
                    <div className={cardCss}>
                        <p className="text-gray-700 font-medium">Skills & Apptitudes</p>
                    </div>
                    <div className={cardCss + ` flex flex-row flex-wrap gap-2`}>
                        {curriculum.skills.sort((a, b) => b.popularity - a.popularity).map((skill, index) => (
                            <Badge key={`skill-${index}`} className="bg-brand-blue-100 text-brand-blue-800 hover:text-blue-100">
                                {skill?.name}
                            </Badge>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="projects" className="flex flex-col gap-2">
                    <div className={cardCss}>
                        <p className="text-gray-700 font-medium">Enterprise projects</p>
                    </div>
                    {curriculum.jobExperiences.map((job, index) => (
                        <div key={`exp-${index}`} className={cardCss}>
                            <div className="flex flex-row flex-wrap justify-between">
                                <p className="text-brand-blue-100 font-medium">{job.title} | {job.razonSocial}</p>
                                <Badge variant={'outline'} className="text-gray-700 hover:bg-gray-300 text-sm font-semibold mr-2 px-2.5 py-0.5">
                                    {job.startDate} - {job.endDate || "Present"}
                                </Badge>
                            </div>
                            {job.projects.map((project, pIndex) => (

                                <div key={`project-${pIndex}`} className="ml-4 mb-4">
                                    <h4 className="text-lg font-semibold">{project.name}</h4>
                                    <p className="text-gray-700 mb-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">{renderSkills(project.skillsUsed)}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </TabsContent>
            </Tabs>
        </MotionDiv>
    );
};

export default ProfileCard;
