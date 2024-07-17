import { Button } from '@components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';
import { Separator } from '@components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { cn } from '@lib/utils';
import { Link, createFileRoute } from '@tanstack/react-router';
import { FolderClock } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { MdArchitecture, MdPattern } from 'react-icons/md';
import { SlCloudDownload } from 'react-icons/sl';

import {
  SiAmazonec2,
  SiAutocad,
  SiAutodesk,
  SiAutodeskrevit,
  SiAxios,
  SiBluetooth,
  SiExpo,
  SiMicrosoft,
  SiMicrosoftazure,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSqlite,
  SiTypescript,
  SiZod,
} from 'react-icons/si';
import { VscJson, VscProject } from 'react-icons/vsc';
import { ScrollArea } from '@components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { FAPES_LOGO, IEL_LOGO, UCL_LOGO, XP_LOGO } from '@services/utils/Images';

export const Route = createFileRoute('/experience')({
  component: Experience,
});

type TIconTecBtn = {
  children: React.ReactNode;
  path: string;
  className?: string;
};
function IconTecButton({ children, path, className }: TIconTecBtn) {
  return (
    <Button variant="ghost" className={cn('col-span-4 gap-2', className)} asChild>
      <Link to={path} params={false} search={false} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </Button>
  );
}

type ExperienceCardContentType = {
  title?: string;
  description?: string;
} & PropsWithChildren;

function ExperienceCardContent({ title, description, children }: ExperienceCardContentType) {
  return (
    <CardContent className="mt-5 grid grid-cols-12 justify-items-center gap-2 py-0">
      <CardTitle className="col-span-12">{title}</CardTitle>
      <CardDescription className="col-span-12">{description}</CardDescription>
      <CardContent className="col-span-12 grid grid-cols-12 gap-2">{children}</CardContent>
    </CardContent>
  );
}

function Experience() {
  return (
    <div className="grid-rows-auto m-3 grid grid-cols-12 gap-4 px-16">
      <div className="col-span-5">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Experiências</CardTitle>
            <CardDescription>
              Ao longo de minha jornada, passei por várias áreas de conhecimentos e acumulei algumas experiências
              profissionais que levo diariamente, no pessoal e profissional.
            </CardDescription>
            <CardDescription>
              Atualmente trabalhando com desenvolvimento de software no{' '}
              <strong>ISTEO - Instituto SENAI de Tecnologia em Eficiência Operacional</strong>. Ativamente desenvolvendo
              aplicações web e mobile junto a clientes de divesas áreas e localidades.
            </CardDescription>
            <CardDescription>Possuo experiências nas seguintes Stacks e suas tecnologias:</CardDescription>
          </CardHeader>
          <Separator />
          <ExperienceCardContent
            title="Frontend"
            description="Aplicações web feitas com gerenciamento de estados globais, formulários com validação e integração com REST APIs."
          >
            {TECH_STACK.frontend?.map((tech) => (
              <IconTecButton key={tech.title} path={tech.url} className="col-span-3">
                {tech.icon}
                {tech.title}
              </IconTecButton>
            ))}
          </ExperienceCardContent>
          <Separator />
          <ExperienceCardContent
            title="Mobile"
            description="Aplicações mobile que utilizam a conectividade bluetooth para coleta de dados. Sempre com mentalidade
              Offline-first para gerantia de persistência de dados."
          >
            {TECH_STACK.mobile?.map((tech) => (
              <IconTecButton key={tech.title} path={tech.url}>
                {tech.icon}
                {tech.title}
              </IconTecButton>
            ))}
          </ExperienceCardContent>
          <Separator />
          <ExperienceCardContent
            title="Backend"
            description="Banco de dados e ORM utilizados para persistência de dados da aplicação mobile no celular do usuário."
          >
            {TECH_STACK.backend?.map((tech) => (
              <IconTecButton key={tech.title} path={tech.url}>
                {tech.icon}
                {tech.title}
              </IconTecButton>
            ))}
          </ExperienceCardContent>
          <Separator />
          <ExperienceCardContent
            title="SoftSkills"
            description="Ao longo dos projetos tive a oportunidade desenvolver minha comunição, empatia, liderança, trabalho em
              equipe"
          >
            {TECH_STACK.softskill?.map((tech) => (
              <IconTecButton key={tech.title} path={tech.url}>
                {tech.icon}
                {tech.title}
              </IconTecButton>
            ))}
          </ExperienceCardContent>
        </Card>
      </div>
      <div className="col-span-7 col-start-6 grid grid-cols-12 grid-rows-2 gap-2">
        <div className="col-span-12 row-span-1">
          <div className="flex h-full flex-col justify-center">
            <CardHeader className="text-center">
              <CardTitle>Educação</CardTitle>
              <CardDescription>
                Um breve resumo sobre minhas experiências no campo acadêmico e tecnologias utilizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="postgraduate" className="flex flex-col">
                <TabsList className="mx-auto">
                  <TabsTrigger value="postgraduate">Pós graduação</TabsTrigger>
                  <TabsTrigger value="graduate">Graduação</TabsTrigger>
                </TabsList>
                <TabsContent value="postgraduate">
                  <CardContent className="grid grid-cols-4 items-center">
                    <div className="col-span-1">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Avatar key="XPE">
                            <AvatarImage src={XP_LOGO} />
                            <AvatarFallback>XP Educação logo</AvatarFallback>
                          </Avatar>
                          <CardTitle>XP Educação</CardTitle>
                        </div>
                        <CardContent className="p-0">
                          <CardDescription>Postgraduate Degree, Software Architecture and Solutions</CardDescription>
                          <CardDescription>Nov 2023 - Aug 2024</CardDescription>
                        </CardContent>
                      </CardHeader>
                    </div>
                    <div className="col-span-1 col-start-2">
                      <CardHeader>
                        <CardTitle className="text-center">Aprendizados</CardTitle>
                        <ScrollArea className="h-[150px] rounded-md">
                          <CardDescription>
                            Specialized in software project lifecycle, focusing on project requirements, structuring,
                            and management. Gained expertise in Software Architecture and Cloud-based Solutions
                            Architecture.
                          </CardDescription>
                        </ScrollArea>
                      </CardHeader>
                    </div>
                    <div className="col-span-2 col-start-3">
                      <CardHeader>
                        <CardTitle className="text-center">Ferramentas</CardTitle>
                        <ScrollArea className="h-[150px] rounded-md">
                          <CardContent className="grid grid-cols-2 gap-x-3 p-0">
                            {TECH_STACK.education &&
                              TECH_STACK.education[0]?.map((tech) => (
                                <IconTecButton key={tech.title} path={tech.url} className="col-span-1">
                                  {tech.icon}
                                  {tech.title}
                                </IconTecButton>
                              ))}
                          </CardContent>
                        </ScrollArea>
                      </CardHeader>
                    </div>
                  </CardContent>
                </TabsContent>
                <TabsContent value="graduate">
                  <CardContent className="grid grid-cols-4 items-center">
                    <div className="col-span-1">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Avatar key="UCL">
                            <AvatarImage src={UCL_LOGO} />
                            <AvatarFallback>Faculdade UCL logo</AvatarFallback>
                          </Avatar>
                          <CardTitle>Faculdade UCL</CardTitle>
                        </div>
                        <CardContent className="p-0">
                          <CardDescription>Bachelor of Engineering - BE, Engenharia Civil</CardDescription>
                          <CardDescription>Feb 2014 - Aug 2021</CardDescription>
                        </CardContent>
                      </CardHeader>
                    </div>
                    <div className="col-span-1 col-start-2">
                      <CardHeader>
                        <CardTitle className="text-center">Aprendizados</CardTitle>
                        <ScrollArea className="h-[150px] rounded-md">
                          <CardDescription>
                            Development of activities related to all the stages of the concrete compressive strength
                            test. Therefore, participation in the concreting of the client's site, carrying out the
                            concrete slump test.
                          </CardDescription>
                          <CardDescription>
                            Demolding of specimens obtained during concreting at the client's site. Identification and
                            storage of the specimens in the wet chamber.
                          </CardDescription>
                          <CardDescription>
                            Maintenance of the molds used in concreting, concrete compressive strength test, disposal of
                            broken specimens and creation of the test certificate for each invoice.
                          </CardDescription>
                        </ScrollArea>
                      </CardHeader>
                    </div>
                    <div className="col-span-2 col-start-3">
                      <CardHeader>
                        <CardTitle className="text-center">Ferramentas</CardTitle>
                        <ScrollArea className="h-[150px] rounded-md">
                          <CardContent className="grid grid-cols-2 gap-x-3 p-0">
                            {TECH_STACK.education &&
                              TECH_STACK.education[1]?.map((tech) => (
                                <IconTecButton key={tech.title} path={tech.url} className="col-span-1">
                                  {tech.icon}
                                  {tech.title}
                                </IconTecButton>
                              ))}
                          </CardContent>
                        </ScrollArea>
                      </CardHeader>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </CardContent>
          </div>
        </div>
        <div className="col-span-12 row-span-1 row-start-2">
          <div className="flex h-full flex-col justify-center">
            <CardHeader className="text-center">
              <CardTitle>Profissional</CardTitle>
              <CardDescription>As etapas profissionais e as experiências acumuladas em cada lugar</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="IEL" className="flex flex-col">
                <TabsList className="mx-auto">
                  <TabsTrigger value="IEL">ISTEO - IEL</TabsTrigger>
                  <TabsTrigger value="FAPES">ISTEO - FAPES</TabsTrigger>
                </TabsList>
                <TabsContent value="IEL">
                  <CardContent className="grid grid-cols-4 items-center">
                    <div className="col-span-1">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Avatar key="IEL">
                            <AvatarImage src={IEL_LOGO} />
                            <AvatarFallback>IEL - Bolsista</AvatarFallback>
                          </Avatar>
                          <CardTitle>IEL - Bolsista em Desenvolvimento de Software</CardTitle>
                        </div>
                        <CardDescription>
                          ISTEO - Instituto SENAI de Tecnologia em Eficiência Operacional
                        </CardDescription>
                        <CardContent className="p-0">
                          <CardDescription>Feb 2024 - Present</CardDescription>
                          <CardDescription>Vitória, Espírito Santo, Brazil · On-site</CardDescription>
                        </CardContent>
                      </CardHeader>
                    </div>
                    <div className="col-span-1 col-start-2">
                      <CardHeader>
                        <CardTitle className="text-center">Aprendizados</CardTitle>
                        <ScrollArea className="h-[150px] rounded-md">
                          <CardDescription>
                            Working on software development projects, focusing on the frontend.
                          </CardDescription>
                          <CardDescription>
                            • Collaborated with a cross-functional team in an Agile environment to successfully deliver
                            multiple software projects on time and within budget
                          </CardDescription>
                          <CardDescription>
                            • Participated in calls with 4 companies, helping the development of 4 innovative projects
                            and securing R$300K plus in funding.
                          </CardDescription>
                          <CardDescription>
                            • Developing projects using React, React Native, TypeScript, Expo, React Query, Axios, Zod,
                            React - hook-form, React-native-ble-plx, Redux Toolkit, REST API, BPMN and Agile
                            Methodologies.
                          </CardDescription>
                        </ScrollArea>
                      </CardHeader>
                    </div>
                    <div className="col-span-2 col-start-3">
                      <CardHeader>
                        <CardTitle className="text-center">Ferramentas</CardTitle>
                        <ScrollArea className="h-[150px] rounded-md">
                          <CardContent className="grid grid-cols-2 gap-x-3 p-0">
                            {TECH_STACK.profissional &&
                              TECH_STACK.profissional[0]?.map((tech) => (
                                <IconTecButton key={tech.title} path={tech.url} className="col-span-1">
                                  {tech.icon}
                                  {tech.title}
                                </IconTecButton>
                              ))}
                          </CardContent>
                        </ScrollArea>
                      </CardHeader>
                    </div>
                  </CardContent>
                </TabsContent>
                <TabsContent value="FAPES">
                  <CardContent className="grid grid-cols-4 items-center">
                    <div className="col-span-1">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Avatar key="FAPES">
                            <AvatarImage src={FAPES_LOGO} />
                            <AvatarFallback>FAPES - Bolsista</AvatarFallback>
                          </Avatar>
                          <CardTitle>FAPES - Bolsista em Desenvolvimento de Software</CardTitle>
                        </div>
                        <CardDescription>
                          ISTEO - Instituto SENAI de Tecnologia em Eficiência Operacional
                        </CardDescription>
                        <CardContent className="p-0">
                          <CardDescription>Feb 2023 - Feb 2024 · 1 yr</CardDescription>
                          <CardDescription>Vitória, Espírito Santo, Brazil · On-site</CardDescription>
                        </CardContent>
                      </CardHeader>
                    </div>
                    <div className="col-span-1 col-start-2">
                      <CardHeader>
                        <CardTitle className="text-center">Aprendizados</CardTitle>
                        <ScrollArea className="h-[150px] rounded-md">
                          <CardDescription>
                            Working on software development projects, focusing on the frontend.
                          </CardDescription>
                          <CardDescription>
                            • Collaborated with a cross-functional team in an Agile environment to successfully deliver
                            multiple software projects on time and within budget
                          </CardDescription>
                          <CardDescription>
                            • Participated in calls with 4 companies, helping the development of 4 innovative projects
                            and securing R$300K plus in funding.
                          </CardDescription>
                          <CardDescription>
                            • Developing projects using React, React Native, TypeScript, Expo, React Query, Axios, Zod,
                            React - hook-form, React-native-ble-plx, Redux Toolkit, REST API, BPMN and Agile
                            Methodologies.
                          </CardDescription>
                        </ScrollArea>
                      </CardHeader>
                    </div>
                    <div className="col-span-2 col-start-3">
                      <CardHeader>
                        <CardTitle className="text-center">Ferramentas</CardTitle>
                        <ScrollArea className="h-[150px] rounded-md">
                          <CardContent className="grid grid-cols-2 gap-x-3 p-0">
                            {TECH_STACK.profissional &&
                              TECH_STACK.profissional[1]?.map((tech) => (
                                <IconTecButton key={tech.title} path={tech.url} className="col-span-1">
                                  {tech.icon}
                                  {tech.title}
                                </IconTecButton>
                              ))}
                          </CardContent>
                        </ScrollArea>
                      </CardHeader>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}

const TECH_STACK: TechStackType = {
  frontend: [
    { title: 'Typescript', icon: <SiTypescript size={20} />, url: 'https://www.typescriptlang.org/' },
    { title: 'React', icon: <SiReact size={20} />, url: 'https://react.dev/' },
    {
      title: 'Tanstack Query',
      icon: <SiReactquery size={20} />,
      url: 'https://tanstack.com/query/latest/docs/framework/react/overview',
    },
    {
      title: 'Tanstack Router',
      icon: <SiReactquery size={20} />,
      url: 'https://tanstack.com/router/latest/docs/framework/react/overview',
    },
    { title: 'React Hook Form', icon: <SiReacthookform size={20} />, url: 'https://www.react-hook-form.com/' },
    { title: 'Zod', icon: <SiZod size={20} />, url: 'https://zod.dev/' },
    { title: 'Axios', icon: <SiAxios size={20} />, url: 'https://axios-http.com/docs/intro' },
    { title: 'Redux Toolkit', icon: <SiRedux size={20} />, url: 'https://redux-toolkit.js.org/' },
  ],
  backend: [
    { title: 'SQLite', icon: <SiSqlite size={20} />, url: 'https://www.sqlite.org/' },
    { title: 'TypeORM', icon: <VscJson size={20} />, url: 'https://typeorm.io/' },
  ],
  mobile: [
    { title: 'Expo', icon: <SiExpo size={20} />, url: 'https://docs.expo.dev/' },
    { title: 'React Native', icon: <SiReact size={20} />, url: 'https://reactnative.dev/' },
    {
      title: 'react-native-ble-plx',
      icon: <SiBluetooth size={20} />,
      url: 'https://github.com/dotintent/react-native-ble-plx',
    },
  ],
  softskill: [{ title: 'Metodologia Ágil', icon: <FolderClock size={20} />, url: 'https://agilemanifesto.org/' }],
  education: [
    [
      { title: 'Amazon EC2', icon: <SiAmazonec2 size={20} />, url: 'https://aws.amazon.com/pt/ec2/' },
      { title: 'Azure', icon: <SiMicrosoftazure size={20} />, url: 'https://azure.microsoft.com/en-us' },
      {
        title: 'Solutions Architecture',
        icon: <SlCloudDownload size={20} />,
        url: 'https://learn.microsoft.com/en-us/collections/m14nt48x3r35jp',
      },
      {
        title: 'Software Architecture',
        icon: <MdArchitecture size={20} />,
        url: 'https://roadmap.sh/software-architect',
      },
      { title: 'Design Patterns', icon: <MdPattern size={20} />, url: 'https://refactoring.guru/design-patterns' },
      {
        title: 'Project Management',
        icon: <VscProject size={20} />,
        url: 'https://fia.com.br/blog/gestao-de-projetos/',
      },
    ],
    [
      {
        title: 'Revit',
        icon: <SiAutodeskrevit size={20} />,
        url: 'https://www.autodesk.com/br/products/revit/architecture',
      },
      { title: 'AutoCad', icon: <SiAutocad size={20} />, url: 'https://www.autodesk.com/br/products/autocad/overview' },
      {
        title: 'AutoDesk',
        icon: <SiAutodesk size={20} />,
        url: 'https://learn.microsoft.com/en-us/collections/m14nt48x3r35jp',
      },
      { title: 'Office 365', icon: <SiMicrosoft size={20} />, url: 'https://www.autodesk.com/' },
    ],
  ],
  profissional: [
    [
      { title: 'Typescript', icon: <SiTypescript size={20} />, url: 'https://agilemanifesto.org/' },
      { title: 'React', icon: <SiReact size={20} />, url: 'https://agilemanifesto.org/' },
      {
        title: 'Tanstack Query',
        icon: <SiReactquery size={20} />,
        url: 'https://tanstack.com/query/latest/docs/framework/react/overview',
      },
      {
        title: 'Tanstack Router',
        icon: <SiReactquery size={20} />,
        url: 'https://tanstack.com/router/latest/docs/framework/react/overview',
      },
      { title: 'React Hook Form', icon: <SiReacthookform size={20} />, url: 'https://www.react-hook-form.com/' },
      { title: 'Zod', icon: <SiZod size={20} />, url: 'https://zod.dev/' },
      { title: 'Expo', icon: <SiExpo size={20} />, url: 'https://docs.expo.dev/' },
      { title: 'React Native', icon: <SiReact size={20} />, url: 'https://reactnative.dev/' },
      {
        title: 'react-native-ble-plx',
        icon: <SiBluetooth size={20} />,
        url: 'https://github.com/dotintent/react-native-ble-plx',
      },
      { title: 'SQLite', icon: <SiSqlite size={20} />, url: 'https://www.sqlite.org/' },
      { title: 'TypeORM', icon: <VscJson size={20} />, url: 'https://typeorm.io/' },
    ],
    [
      { title: 'Typescript', icon: <SiTypescript size={20} />, url: 'https://agilemanifesto.org/' },
      { title: 'React', icon: <SiReact size={20} />, url: 'https://agilemanifesto.org/' },
      {
        title: 'Tanstack Query',
        icon: <SiReactquery size={20} />,
        url: 'https://tanstack.com/query/latest/docs/framework/react/overview',
      },
      { title: 'React Hook Form', icon: <SiReacthookform size={20} />, url: 'https://www.react-hook-form.com/' },
      { title: 'Zod', icon: <SiZod size={20} />, url: 'https://zod.dev/' },
      { title: 'Redux Toolkit', icon: <SiRedux size={20} />, url: 'https://redux-toolkit.js.org/' },
      { title: 'Axios', icon: <SiAxios size={20} />, url: 'https://axios-http.com/docs/intro' },
      { title: 'Expo', icon: <SiExpo size={20} />, url: 'https://docs.expo.dev/' },
      { title: 'React Native', icon: <SiReact size={20} />, url: 'https://reactnative.dev/' },
      {
        title: 'react-native-ble-plx',
        icon: <SiBluetooth size={20} />,
        url: 'https://github.com/dotintent/react-native-ble-plx',
      },
    ],
  ],
};

type TechStackType = {
  backend?: TechType[];
  frontend?: TechType[];
  mobile?: TechType[];
  softskill?: TechType[];
  education?: TechType[][];
  profissional?: TechType[][];
};

type TechType = {
  title: string;
  icon: JSX.Element;
  url: string;
};
