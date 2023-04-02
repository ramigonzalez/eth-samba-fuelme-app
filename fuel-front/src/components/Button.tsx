
export const Button = (props: any) => {
    const { text } = props
    return <button
        className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm" {...props}>{text}</button>
}