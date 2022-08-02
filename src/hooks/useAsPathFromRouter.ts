import { useRouter } from "next/router";


const useAsPathFromRouter = () => {
    const { asPath } = useRouter()
    return asPath;
}

export default useAsPathFromRouter;