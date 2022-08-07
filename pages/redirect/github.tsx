import type {NextPage} from 'next'

const github: NextPage = () => {
    window.location.replace("https://github.com/danielvolchek");
    return (
        <div>
            <h1>You're not supposed to be here!</h1>
            <h2>Something must have gone wrong...</h2>
            <a href="https://github.com/danielvolchek">Try clicking here instead!</a>
        </div>
    )
}

export default github