import { useRouter } from 'next/router'

function ProjectDynamicPage() {
  const router = useRouter()

  return ( <h1>hello from dynamic project page {router?.query?.projectid}</h1> );
}

export default ProjectDynamicPage;