interface featureProps {
    description: string,
    children: React.ReactNode
} 

export default function Caracteristica(props: featureProps){
    return (
        
          <li className="flex flex-row gap-2 items-center">
            {props.children}
            {props.description}
          </li>
    )
}