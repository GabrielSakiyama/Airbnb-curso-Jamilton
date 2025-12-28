interface BotaoIcon {
    icone: React.ReactNode,
    children: React.ReactNode
}

const BotaoIcon = (props: BotaoIcon)=>{
        return (
                <button className="rounded-xl border-2 
                                flex items-center gap-2 
                                px-2 py-1 
                                hover:border-gray-500">
                        <span>
                            {props.icone}
                        </span>
                        <span>
                            {props.children}
                        </span>
                </button>
        );
}

export default BotaoIcon;