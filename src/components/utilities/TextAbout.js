import React, {useState} from 'react';

export default function TextAbout(props) {
    const [more, setMore] = useState(false);

    return (
        <div className={"about-yourself " + props.className}>
            {
                (more || props.text.length<=50) ?
                <>
                    <span>{props.text}</span>
                    <span className="more" onClick={() => setMore(false)}>скрыть</span>
                </>
                : <>
                    <span>{props.text.slice(0,50) + '...'}</span>
                    <span className="more" onClick={() => setMore(true)}>ещё</span>
                </>
            }
        </div>
    )
}