/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProjectsImport } from './routes/projects'
import { Route as PostsImport } from './routes/posts'
import { Route as LoginImport } from './routes/login'
import { Route as IntroductionImport } from './routes/introduction'
import { Route as ExperienceImport } from './routes/experience'
import { Route as ContactImport } from './routes/contact'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as ProjectsIndexImport } from './routes/projects.index'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as ProjectsChartsImport } from './routes/projects.charts'
import { Route as ProjectsProjectIdImport } from './routes/projects.$projectId'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as AuthProjectsCreateImport } from './routes/_auth.projects.create'
import { Route as AuthPostsCreateImport } from './routes/_auth.posts.create'
import { Route as AuthProjectsProjectIdEditImport } from './routes/_auth.projects.$projectId.edit'
import { Route as AuthPostsPostIdEditImport } from './routes/_auth.posts.$postId.edit'

// Create/Update Routes

const ProjectsRoute = ProjectsImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IntroductionRoute = IntroductionImport.update({
  path: '/introduction',
  getParentRoute: () => rootRoute,
} as any)

const ExperienceRoute = ExperienceImport.update({
  path: '/experience',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIndexRoute = ProjectsIndexImport.update({
  path: '/',
  getParentRoute: () => ProjectsRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)

const ProjectsChartsRoute = ProjectsChartsImport.update({
  path: '/charts',
  getParentRoute: () => ProjectsRoute,
} as any)

const ProjectsProjectIdRoute = ProjectsProjectIdImport.update({
  path: '/$projectId',
  getParentRoute: () => ProjectsRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const AuthProjectsCreateRoute = AuthProjectsCreateImport.update({
  path: '/projects/create',
  getParentRoute: () => AuthRoute,
} as any)

const AuthPostsCreateRoute = AuthPostsCreateImport.update({
  path: '/posts/create',
  getParentRoute: () => AuthRoute,
} as any)

const AuthProjectsProjectIdEditRoute = AuthProjectsProjectIdEditImport.update({
  path: '/projects/$projectId/edit',
  getParentRoute: () => AuthRoute,
} as any)

const AuthPostsPostIdEditRoute = AuthPostsPostIdEditImport.update({
  path: '/posts/$postId/edit',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/experience': {
      id: '/experience'
      path: '/experience'
      fullPath: '/experience'
      preLoaderRoute: typeof ExperienceImport
      parentRoute: typeof rootRoute
    }
    '/introduction': {
      id: '/introduction'
      path: '/introduction'
      fullPath: '/introduction'
      preLoaderRoute: typeof IntroductionImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/projects/$projectId': {
      id: '/projects/$projectId'
      path: '/$projectId'
      fullPath: '/projects/$projectId'
      preLoaderRoute: typeof ProjectsProjectIdImport
      parentRoute: typeof ProjectsImport
    }
    '/projects/charts': {
      id: '/projects/charts'
      path: '/charts'
      fullPath: '/projects/charts'
      preLoaderRoute: typeof ProjectsChartsImport
      parentRoute: typeof ProjectsImport
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsImport
    }
    '/projects/': {
      id: '/projects/'
      path: '/'
      fullPath: '/projects/'
      preLoaderRoute: typeof ProjectsIndexImport
      parentRoute: typeof ProjectsImport
    }
    '/_auth/posts/create': {
      id: '/_auth/posts/create'
      path: '/posts/create'
      fullPath: '/posts/create'
      preLoaderRoute: typeof AuthPostsCreateImport
      parentRoute: typeof AuthImport
    }
    '/_auth/projects/create': {
      id: '/_auth/projects/create'
      path: '/projects/create'
      fullPath: '/projects/create'
      preLoaderRoute: typeof AuthProjectsCreateImport
      parentRoute: typeof AuthImport
    }
    '/_auth/posts/$postId/edit': {
      id: '/_auth/posts/$postId/edit'
      path: '/posts/$postId/edit'
      fullPath: '/posts/$postId/edit'
      preLoaderRoute: typeof AuthPostsPostIdEditImport
      parentRoute: typeof AuthImport
    }
    '/_auth/projects/$projectId/edit': {
      id: '/_auth/projects/$projectId/edit'
      path: '/projects/$projectId/edit'
      fullPath: '/projects/$projectId/edit'
      preLoaderRoute: typeof AuthProjectsProjectIdEditImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthRoute: AuthRoute.addChildren({
    AuthPostsCreateRoute,
    AuthProjectsCreateRoute,
    AuthPostsPostIdEditRoute,
    AuthProjectsProjectIdEditRoute,
  }),
  ContactRoute,
  ExperienceRoute,
  IntroductionRoute,
  LoginRoute,
  PostsRoute: PostsRoute.addChildren({ PostsPostIdRoute, PostsIndexRoute }),
  ProjectsRoute: ProjectsRoute.addChildren({
    ProjectsProjectIdRoute,
    ProjectsChartsRoute,
    ProjectsIndexRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/contact",
        "/experience",
        "/introduction",
        "/login",
        "/posts",
        "/projects"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/posts/create",
        "/_auth/projects/create",
        "/_auth/posts/$postId/edit",
        "/_auth/projects/$projectId/edit"
      ]
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/experience": {
      "filePath": "experience.tsx"
    },
    "/introduction": {
      "filePath": "introduction.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/posts": {
      "filePath": "posts.tsx",
      "children": [
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/projects": {
      "filePath": "projects.tsx",
      "children": [
        "/projects/$projectId",
        "/projects/charts",
        "/projects/"
      ]
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx",
      "parent": "/posts"
    },
    "/projects/$projectId": {
      "filePath": "projects.$projectId.tsx",
      "parent": "/projects"
    },
    "/projects/charts": {
      "filePath": "projects.charts.tsx",
      "parent": "/projects"
    },
    "/posts/": {
      "filePath": "posts.index.tsx",
      "parent": "/posts"
    },
    "/projects/": {
      "filePath": "projects.index.tsx",
      "parent": "/projects"
    },
    "/_auth/posts/create": {
      "filePath": "_auth.posts.create.tsx",
      "parent": "/_auth"
    },
    "/_auth/projects/create": {
      "filePath": "_auth.projects.create.tsx",
      "parent": "/_auth"
    },
    "/_auth/posts/$postId/edit": {
      "filePath": "_auth.posts.$postId.edit.tsx",
      "parent": "/_auth"
    },
    "/_auth/projects/$projectId/edit": {
      "filePath": "_auth.projects.$projectId.edit.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
