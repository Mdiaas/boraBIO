import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { buildNextAuthOptions } from './api/auth/[...nextauth].api';

export { default } from './home'
export const getServerSideProps: GetServerSideProps = async({req, res}) => {
  const session = await unstable_getServerSession(req, res, buildNextAuthOptions(req, res))
  if(session){
    return {
      redirect: {
        permanent: false,
        destination: "/generate-profile",
      },
      props:{},
    };
  }
  return {
    
    props:{},
  }
}