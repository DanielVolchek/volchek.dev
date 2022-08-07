import type {NextPage} from 'next'

const linkedin: NextPage = () => {
    window.location.replace("https://www.linkedin.com/in/daniel-volchek-aa0172224/");
    return (
        <div>
            <h1>You're not supposed to be here!</h1>
            <h2>Something must have gone wrong...</h2>
            <a href="https://www.linkedin.com/in/daniel-volchek-aa0172224/">Try clicking here instead!</a>
        </div>
    )
}

export default linkedin