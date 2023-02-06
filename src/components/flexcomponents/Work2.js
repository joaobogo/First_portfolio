import React, { useContext, useState } from 'react'
import WorkCard2 from './WorkCard2.js'
import WorkCardData from "../WorkCardData"
import './Work2Styles.css'
import Context from '../../context/Context'
import lapis from '../../assets/lapis.jpg'





function Work2() {
    const [title, setTitle] = useState('Projects')
    const [color, setColor] = useState('var(--quaternary)')
    const [viewtxt, setViewtxt] = useState('View')
    const globalState = useContext(Context)

    const handleEdit = () => {
        globalState.setChangeInputs([{
            label: 'title',
            value: title,
            type: 'text',
            setter: setTitle,
        }, {
            label: 'color',
            value: color,
            type: 'color',
            setter: setColor,
        },
        {
            label: 'view',
            value: viewtxt,
            type: 'text',
            setter: setViewtxt,
        }

        ])
        globalState.setIsMenuActive(true)
    }

    return (
        <div className='worksection'>
            <button className="botaoeditar" onClick={handleEdit}><img src={lapis}></img></button>
            <h2 className='title'>{title}</h2>
            <div className='container'>
                {WorkCardData.map((card) => (
                    <WorkCard2 color={color} viewtxt={viewtxt} title={card.title} text={card.text} view={card.view} source={card.source} imgsrc={card.imgsrc} />
                ))}

            </div>
        </div>
    )
}

export default Work2