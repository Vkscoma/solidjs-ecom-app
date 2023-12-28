export default function Card(props) {
    return (
        <div 
        class=" bg-slate-100 p-4 m-4 text-center rounded-md shadow-md"
        classList={{}}
        >
            {props.children}
        </div>
    )
}