import {getProviders, signIn} from 'next-auth/react';

function Login({providers}) {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-black'>
        <img className='w-52 mb-5' src='https://links.papareact.com/9xl' alt='Spotify' />
    {Object.values(providers).map((provider) => (
        <div>
            <button
            onClick={() => signIn(provider.id , {callbackUrl: "/"})} 
            className='bg-[#18D860] text-white p-5 rounded-lg'>Login with {provider.name}</button>
        </div>
    ))}
    
    </div>
  )
}

export default Login

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}